import React from 'react'
import './LearningOptions.css'

const LearningOptions = props => {
  const options = [
    {text: 'JavaScript', handler: props.actionProvider.handleJavascriptList, id: 1},
    {text: 'Flutter', handler: props.actionProvider.handleFlutterList, id: 2},
    {text: 'React', handler: props.actionProvider.handleReactList, id: 3},
    {text: 'Information Security', handler: props.actionProvider.handleInformationSecurityList, id: 4},
    {text: 'Algorithms', handler: props.actionProvider.handleAlgorithmsList, id: 5},
  ]

  const optionsMarkup = options.map(option => (
    <button className='learning-option-button' key={option.id} onClick={option.handler}>{option.text}</button>
  ))

  return (
    <div className="learning-options-container">
      {optionsMarkup}
    </div>
  )
}

export default LearningOptions