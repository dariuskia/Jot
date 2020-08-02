import React, { useState } from 'react';
import { GiftedChat, Bubble, BubbleProps } from 'react-native-gifted-chat';
import { TextInput } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'
import { View, Text } from 'react-native'
import Header from '../Global/Header/Header'
import { TIME } from '../../utils/Time'

import { db } from '../../environment/config'

function genID(length=30) {
  var result = ''
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  var charactersLength = characters.length
  for ( var i = 0; i < length; i++ ) {
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
  // const messageRef = db.collection('messages').doc('tay86GEpVCQYq2m9rk8q')
  // const doc = await messageRef.get()
  const greeting = [
    {
      _id: 1,
      text: 'Hi there! Type some messages to get started.',
      // text: doc.data().toString(),
      user: JOT,
      createdAt: new Date(),
    }
  ].reverse()
  const [username, setUsername] = useState(null)
  const [messages, setMessages] = useState()
  const [storageReceived, alreadyReceived] = useState(false)
  
  const clearMessages = async () => {
    setMessages([])
    await AsyncStorage.removeItem('@messages')
  }

  const updateMessages = async (newMessages) => {
    try {
      await AsyncStorage.setItem('@messages', JSON.stringify(newMessages))
    } catch (error) {
      throw new Error(error)
      console.log(error)
    }
  }
  
  const recvMessages = async (initialMessages) => {
    try {
      let newMessages = await AsyncStorage.getItem('@messages')
      if (newMessages != null) {
        setMessages(JSON.parse(newMessages))
      } else {
        setMessages(initialMessages)
        await AsyncStorage.setItem('@messages', JSON.stringify(initialMessages))
        await AsyncStorage.setItem('@firstMessageDate', new Date().toDateString())
      }
    } catch (error) {
      throw new Error(error)
      console.log(error)
    }
  }

  const getUsername = async () => {
    try {
      let val = await AsyncStorage.getItem('@username')
      setUsername(val)
    } catch (error) {
      throw new Error(error)
      console.log(error)
    }
  }

  const run = (async () => {
    try {
      getUsername()
      let firstMessageDate = await AsyncStorage.getItem('@firstMessageDate')
      if (firstMessageDate != null) {
        if (firstMessageDate != new Date().toDateString()) {
          clearMessages()
          recvMessages(greeting)
          await AsyncStorage.setItem('@firstMessageDate', new Date().toDateString())
        }
      }
      if (!storageReceived) {
        recvMessages()
        alreadyReceived(true)
      }
    } catch (error) {
      throw new Error(error)
      console.log(error)
    }
  })()
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
            backgroundColor: '#272B580D',
          },
          right: {
            backgroundColor: (TIME == 'NIGHT') ? '#4F5ADE' : '#3278FF',
          }
        }}
        textStyle={{
          left: {
            
          },
          right: {

          }
        }}
        />
      )
    }
  
  return (
    <View style={{flex: 1}}>
      <Header title="Jot" page="Journal" />
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
      // alwaysShowSend
      />
    </View>
  );
}