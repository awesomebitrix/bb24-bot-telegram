# BB24 Telegram Bot
A Telegram bot application for Bale Bale 24

## Requirements
- **node** 8.4.0
- **npm** 5.3.0
- **b24** 1.1.0
- **express** 4.15.4
- **telebot** 1.2.3
- **babel** 6.23.0
- **babel-cli** 6.26.0
- **babel-core** 6.26.0
- **babel-preset-es2015** 6.24.1
- **lowdb** 0.17.1

## Installation
- Put your bot token in `src/user/token.js`.
- Put your Bitrix24 web hook credentials in `src/bitrix24/webhook.js`.
- Run `npm install`.
- Run `npm start`.

## Deployment
Before you deploy the application, please makes sure that you have run
`npm run compile` command. It's included in `npm start` command.

## Directory Structure
```
k2d2-telegram-bot
├── dist
│   ├── bitrix24
│   └── user
├── node_modules
|   └── ...
├── src
│   ├── bitrix24
│   └── user
└── storage
```

All of the bot source code is located in `src/` directory.
We are using ES6. So, the ES6 will be compiled in `dist/`.
The bot dependencies saved in `node_modules/` directory.

Each Telegram username will be saved in `storage/users.json`.

## TODO
- [x] Create a Telegram bot
- [x] Build a directory structure for K2D2 Telegram Bot application
- [x] Make sure that the bot would run properly
- [x] Fix timeout problem with Express
- [x] Add help command with specific topic
- [x] Integrate bot with [b24](https://github.com/setyongr/b24) package
- [x] Test the web hook feature from `b24` package
- [x] Test an inbound web hook from Bitrix24 with `b24` package
- [ ] Complete all needed commands
- [ ] Process and save all needed data
- [ ] Bind BB24 Telegram Bot with Bitrix24 Open Channel Telegram integration
- [ ] Add unit test
