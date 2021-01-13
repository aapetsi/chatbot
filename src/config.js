import React from 'react'
import { createChatBotMessage } from 'react-chatbot-kit'
import LearningOptions from './components/LearningOptions/LearningOptions'
import LinkList from './components/LinkList/LinkList'

const config = {
  botName: 'Chatbot',
  initialMessages: [
    createChatBotMessage("Hi, I'm here to help. What do you want to learn?", {
      widget: 'learningOptions',
    }),
  ],
  customStyles: {
    botMessageBox: {
      backgroundColor: '#376B7E',
    },
    chatButton: {
      backgroundColor: '#376B7E',
    },
  },
  widgets: [
    {
      widgetName: 'learningOptions',
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: 'javascriptLinks',
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          { text: 'Introduction to JS', url: 'https://google.com', id: 1 },
          { text: 'Learn JS the hard way', url: 'https://google.com', id: 2 },
          { text: "You don't know JS", url: 'https://google.com', id: 3 },
        ],
      },
    },
    {
      widgetName: 'flutterLinks',
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          { text: 'Introduction to Flutter', url: 'https://google.com', id: 1 },
          {
            text: 'Learn Flutter the hard way',
            url: 'https://google.com',
            id: 2,
          },
          { text: "You don't know Flutter", url: 'https://google.com', id: 3 },
        ],
      },
    },
    {
      widgetName: 'reactLinks',
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          { text: 'Introduction to React', url: 'https://google.com', id: 1 },
          {
            text: 'Learn React the hard way',
            url: 'https://google.com',
            id: 2,
          },
          { text: "You don't know React", url: 'https://google.com', id: 3 },
        ],
      },
    },
    {
      widgetName: 'informationSecurityLinks',
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: 'Introduction Computer Security',
            url: 'https://google.com',
            id: 1,
          },
          {
            text: 'Learn Hacking by doing',
            url: 'https://google.com',
            id: 2,
          },
          { text: 'Hack the box', url: 'https://google.com', id: 3 },
        ],
      },
    },
    {
      widgetName: 'algorithmsLinks',
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: 'Data structures & algorithms',
            url: 'https://google.com',
            id: 1,
          },
          {
            text: '7 Algorithms you must know',
            url: 'https://google.com',
            id: 2,
          },
          { text: 'Algorithms with python', url: 'https://google.com', id: 3 },
        ],
      },
    },
  ],
}

export default config
