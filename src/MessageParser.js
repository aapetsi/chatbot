class MessageParser {
  constructor(actionProvider, state) {
    this.actionProvider = actionProvider
    this.state = state
  }

  parse(message) {
    const lowerCaseMessage = message.toLowerCase()

    if (lowerCaseMessage.includes('hello')) {
      this.actionProvider.greet()
    }

    if (lowerCaseMessage.includes('javascript')) {
      this.actionProvider.handleJavascriptList()
    }

    if (lowerCaseMessage.includes('flutter')) {
      this.actionProvider.handleFlutterList()
    }

    if (lowerCaseMessage.includes('react')) {
      this.actionProvider.handleReactList()
    }

    if (lowerCaseMessage.includes('information security')) {
      this.actionProvider.handleInformationSecurityList()
    }

    if (lowerCaseMessage.includes('algorithms')) {
      this.actionProvider.handleAlgorithmsList()
    }
  }
}

export default MessageParser
