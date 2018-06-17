# hsf-reflex-rex-etl

process reflex messages into REX project

## Get Started

### Install

```bash
> git clone yodata/hsf-reflex-rex-etl

> cd hsf-reflex-rex-etl

> npm install
```

### Environment Setup

The service requires the following environment variables.
To set your environment, create a .env file in the project root with your information.

```bash
# .env file
YODATA_API_KEY="your_api_key"
YODATA_INBOX_URL="https://dave.yodata.me/inbox/"
SALESFORCE_USERNAME="user@example.com"
SALESFORCE_PASSWORD="salesforce-password"
SALESFORCE_LOGIN_URL="https://test.salesforce.com"
DEBUG="hsf-reflex-rex:*"
DEBUG_DEPTH=1
```

### Service Control

```bash
# start the service locally
> npm start
# run tests
> npm test
# run tests with coverage
> npm run coverage
```

## Development

### Project Files

```bash
.
|- server.js                    # loads environment and starts the service
|- .env                         # environment vars
|- app
   |- index.js                  # configure the service
   |- router.js                 # configure event routes and handlers (main)
   |- sendLeadToSalesForce.js   # sends leads to SF
   |- hander                    # event handlers go here
      |- askaction.js           # basic event handler
```