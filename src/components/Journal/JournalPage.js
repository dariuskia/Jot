import React, { useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { TextInput } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

function genID(length=30) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
     result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const JOT = {
  _id: 2,
  name: 'Jot'
}
const USER = {
  _id: 1,
  name: '',
}

const initialMessages = [
  {
    _id: 1,
    text: 'Hi there! Type some messages to get started.',
    user: JOT,
    createdAt: new Date(2020, 5, 3, 4, 20),
  },
].reverse()

export default function RoomScreen() {
  const [username, setUsername] = useState(null)
  const [messages, setMessages] = useState(initialMessages)
  
  const runFirst = async () => {
    let val = await AsyncStorage.getItem('@username')
    setUsername(val)
  }
  
  runFirst()
  USER.name = username 

  // helper method that sends a message
  function handleSend(newMessage = []) {
    setMessages(prevMessages => GiftedChat.append(prevMessages, newMessage))
    text = newMessage[0].text
    console.log("TEXT", text)
    if (text == "gm") {
      setTimeout(() => setMessages(prevMessages => GiftedChat.append(prevMessages, {
        _id: genID(),
        createdAt: new Date(),
        text: "good morning!",
        user: JOT
      })), 1000)
    }
  }
  return (
    <GiftedChat
      messages={messages}
      onSend={newMessage => handleSend(newMessage)}
      // renderInputToolbar={() => {
      //   <TextInput editable={false} />
      // }}
      user={USER}
      placeholder='Type a message'
      showUserAvatar
      // alwaysShowSend
    />
  );
}