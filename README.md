# hsf-reflex-rex-etl
process reflex messages into REX project

## Installation

```bash
$ git clone yodata/hsf-reflex-rex-etl

$ cd hsf-reflex-rex-etl
```

## Environment Setup

Make sure your environment has the API key and source inbox URL

```bash
$ export YODATA_API_KEY=xxxx

$ export YODATA_INBOX_URL=https://test.example.com/inbox/
```

## Create your handler function (example)

```js
// file: messageHandler.js
const Service = require('yodata-inbox-poller');
const inboxURL = process.env.YODATA_INBOX_URL;
const handleMessage = require('./handleMessage.js');

const app = Service.create(inboxURL, handleMessage);

app.on('dispatch', event => {
  switch (event.type) {
    case Service.eventType.MESSAGE_PROCESS_COMPLETED:
      console.log(event.type, event.result);
      break;
    case Service.eventType.MESSAGE_PROCESS_FAILED:
      console.log(event.type, event.result);
      break;
    default:
      console.log(event.type);
  }
});

app.start();
```