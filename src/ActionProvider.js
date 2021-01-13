class ActionProvider {
  constructor(createChatBotMessage, setStateFunc, createClientMessage) {
    this.createChatBotMessage = createChatBotMessage
    this.setState = setStateFunc
    this.createClientMessage = createClientMessage
  }

  handleJavascriptList = () => {
    const message = this.createChatBotMessage(
      "Great, I've got the following resources for you on JavaScript",
      { widget: 'javascriptLinks' }
    )

    this.updateChatbotState(message)
  }

  handleFlutterList = () => {
    const message = this.createChatBotMessage(
      "Great, I've got the following resources for you on Flutter",
      { widget: 'flutterLinks' }
    )

    this.updateChatbotState(message)
  }

  handleReactList = () => {
    const message = this.createChatBotMessage(
      "Great, I've got the following resources for you on React",
      { widget: 'reactLinks' }
    )

    this.updateChatbotState(message)
  }

  handleInformationSecurityList = () => {
    const message = this.createChatBotMessage(
      "Great, I've got the following resources for you on Information Security",
      { widget: 'informationSecurityLinks' }
    )

    this.updateChatbotState(message)
  }

  handleAlgorithmsList = () => {
    const message = this.createChatBotMessage(
      "Great, I've got the following resources for you on Algorithms",
      { widget: 'algorithmsLinks' }
    )

    this.updateChatbotState(message)
  }

  greet() {
    const greetingMessage = this.createChatBotMessage('Hi', 'friend')
    this.updateChatbotState(greetingMessage)
  }

  updateChatbotState(message) {
    this.setState((prevState) => ({
      ...prevState,
      messages: [...prevState.messages, message],
    }))
  }
}

export default ActionProvider
