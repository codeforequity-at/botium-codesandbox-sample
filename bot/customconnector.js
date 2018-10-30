const debug = require('debug')('botium-connector-samplebot')

const bot = require('./bot')

class SampleBot {
  constructor ({ queueBotSays }) {
    this.queueBotSays = queueBotSays
  }

  UserSays (msg) {
    const answer = bot(msg)
    if (answer) {
      setTimeout(() => this.queueBotSays(answer), 0)
    }
  }
}

module.exports = {
  PluginVersion: 1,
  PluginClass: SampleBot
}
