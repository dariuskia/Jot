import React, { useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';
import { TextInput } from 'react-native'
import AsyncStorage from '@react-native-community/async-storage'

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
    text: 'sup brother',
   user: JOT,
   createdAt: new Date(2020, 5, 3, 4, 20),
  },
  {
    _id: 2,
    text: 'hello sexy boy',
    user: USER,
    createdAt: new Date(2020, 5, 3, 4, 21),
  },
  {
    _id: 4,
    text: 'com back',
    user: JOT,
    createdAt: new Date(2020, 5, 3, 4, 21),
  },
  {
    _id: 3,
    text: 'goodbye',
    user: USER,
    createdAt: new Date(2020, 5, 3, 4, 30),
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
    setMessages(GiftedChat.append(messages, newMessage))
    console.log(newMessage)
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