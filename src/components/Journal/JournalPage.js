import React, { useState, useEffect } from 'react';
import { GiftedChat, Bubble, BubbleProps } from 'react-native-gifted-chat';
import { TextInput } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { View, Text } from 'react-native'
import Header from '../Global/Header/Header'
import COLORS from '../../utils/Colors'

function genID(length = 30) {
  var result = ''
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }
  return result
}

const JOT = {
  _id: 2,
  name: 'Jot'
}
const USER = {
  _id: 1,
  name: '',
}

export default function RoomScreen() {
  const greeting = [
    {
      _id: 1,
      text: 'Hi there! Type some messages to get started.',
      user: JOT,
      createdAt: new Date(),
    }
  ].reverse()
  const [username, setUsername] = useState(null)
  const [messages, setMessages] = useState()
  const [storageReceived, alreadyReceived] = useState(false)

  const clearMessages = async () => {
    try {
      setMessages([])
      await AsyncStorage.removeItem('@messages')
    } catch (error) {
      console.log(error)
    }
  }

  const updateMessages = async (newMessages) => {
    try {
      await AsyncStorage.setItem('@messages', JSON.stringify(newMessages))
    } catch (error) {
      console.log(error)
    }
  }

  const recvMessages = async (initialMessages) => {
    try {
      let newMessages = await AsyncStorage.getItem('@messages')
      if (newMessages != null) {
        setMessages(JSON.parse(newMessages))
      } else {
        setMessages(greeting)
        await AsyncStorage.setItem('@messages', JSON.stringify(initialMessages))
        // await AsyncStorage.setItem('@firstMessageDate', new Date().toDateString())
      }
    } catch (error) {
      console.log(error)
    }
  }

  const getUsername = async () => {
    try {
      let val = await AsyncStorage.getItem('@username')
      setUsername(val)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    (async () => {
      try {
        getUsername()
        // let firstMessageDate = await AsyncStorage.getItem('@firstMessageDate')
        if (messages != null) {
          let firstMessageDate = new Date(messages[messages.length-1]["createdAt"]).toDateString()
          if (firstMessageDate != new Date().toDateString()) {
            clearMessages()
            recvMessages(greeting)
            // await AsyncStorage.setItem('@firstMessageDate', new Date().toDateString())
          }
        } else {
          recvMessages(greeting)
        }
        if (!storageReceived) {
          recvMessages()
          alreadyReceived(true)
        }
      } catch (error) {
        console.log(error)
      }
    })()
  })
  USER.name = username


  // helper method that sends a message
  function handleSend(msg = []) {
    let newMessages = [msg[0], ...messages]
    setMessages(newMessages)
    updateMessages(newMessages)
    let text = msg[0].text
    if (text == "gm") {
      setMessages(prevMessages => GiftedChat.append(prevMessages, {
        _id: genID(),
        createdAt: new Date(),
        text: "good morning!",
        user: JOT
      }))
    }
  }


  const renderBubble = (props) => {
    return (
      <Bubble {...props}
        wrapperStyle={{
          left: {
            backgroundColor: COLORS.backgroundGray,
          },
          right: {
            backgroundColor: COLORS.themed.secondary,
          }
        }}
        textStyle={{
          left: {
            fontFamily: "Rubik",
            fontSize: 16,
          },
          right: {
            fontFamily: "Rubik",
            fontSize: 16,
          }
        }}
      />
    )
  }

  return (
    <View style={{ flex: 1 }}>
      <Header title="Jot" page="Journal" locked={false} />
      <GiftedChat
        messages={messages}
        onSend={newMessage => handleSend(newMessage)}
        // renderInputToolbar={() => {
        //   <TextInput editable={false} />
        // }}
        user={USER}
        placeholder='Type a message...'
        showUserAvatar
        renderBubble={renderBubble}
      />
    </View>
  );
}