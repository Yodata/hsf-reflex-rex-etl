# hsf-reflex-rex-etl
process reflex messages into REX project

## Installation

```bash
$ git clone yodata/hsf-reflex-rex-etl

$ cd hsf-reflex-rex-etl

$ npm install
```

## Environment Setup

Make sure your environment has the API key and source inbox URL

```bash
$ export YODATA_API_KEY=xxxx

$ export YODATA_INBOX_URL=https://test.example.com/inbox/
```

## Write your handler function (example)

```js
// file: handleMessage.js
module.exports = async function handleMessage (notification) {
  console.dir(notification)
  
  // do some work
  
  return {} // any result you return will be logged to the event log
}

```