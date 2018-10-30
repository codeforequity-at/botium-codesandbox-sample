const answers = [
  {
    input: ['buttons', 'show me buttons', 'show me some buttons', 'give me buttons'],
    output: {
      messageText: 'Here are some buttons',
      buttons: [
        { text: 'First Button' },
        { text: 'Second Button' }
      ]
    }
  },
  {
    input: ['picture', 'show me a picture', 'give me a picture'],
    output: {
      messageText: 'Here is a picture',
      media: [
        { altText: 'Botium Logo', mediaUri: 'http://www.botium.at/img/logo.png' }
      ]
    }
  },
  {
    input: ['card', 'show me a card', 'give me a card'],
    output: {
      messageText: 'Here is a card',
      cards: [
        {
          text: 'Botium is great!',
          image: { mediaUri: 'http://www.botium.at/img/logo.png' },
          buttons: [
            { text: 'First Button' },
            { text: 'Second Button' }
          ]
        }
      ]
    }
  }
]

module.exports = (msg) => {
  const template = answers.find((a) => a.input.indexOf(msg.messageText) >= 0)
  if (template) return Object.assign({}, { sender: 'bot', sourceData: msg }, template.output)
  else return { sender: 'bot', sourceData: msg, messageText: 'You said: ' + msg.messageText }
}
