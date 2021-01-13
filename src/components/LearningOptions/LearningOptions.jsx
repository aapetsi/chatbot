import React from 'react'
import './LearningOptions.css'

const LearningOptions = props => {
  const options = [
    {text: 'JavaScript', handler: props.actionProvider.handleJavascriptList, id: 1},
    {text: 'Flutter', handler: () => {}, id: 2},
    {text: 'React', handler: () => {}, id: 3},
    {text: 'Information Security', handler: () => {}, id: 4},
    {text: 'Algorithms', handler: () => {}, id: 5},
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