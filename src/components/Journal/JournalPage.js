import React, { useState } from 'react';
import { GiftedChat } from 'react-native-gifted-chat';

const JOT = {
	_id: 2,
	name: 'Jot'

}
export default function RoomScreen() {
  const [messages, setMessages] = useState([
   	{
   		_id: 1,
   		text: 'sup brother',
   		user: JOT
   	},
  ]);
  // helper method that is sends a message
  function handleSend(newMessage = []) {
    setMessages(GiftedChat.append(messages, newMessage));
  }
  return (
    <GiftedChat
      messages={messages}
      onSend={newMessage => handleSend(newMessage)}
      user={{ _id: 1, name: 'Herobrine' }}
      placeholder='penispenispenis'
      showUserAvatar
      alwaysShowSend
    />
  );
}