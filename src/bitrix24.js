import WebHook from './bitrix24/webhook.js'

class Bitrix24 {
  constructor() {
    let _ = this

    _.webhook = new WebHook
  }
}

module.exports = Bitrix24
