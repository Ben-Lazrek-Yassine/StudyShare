import firebase from 'firebase/compat/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getDatabase } from 'firebase/database';
import firebaseConfig from '../config/config';
import { useEffect, useRef, useState } from 'react';
import Navbar from './Navbar';
import Chatbox from './Chatbox';
import SendMessage from './SendMessage';

  const ChatRoom = () => {
  return (
    <div>
      <Navbar />
      <Chatbox/>
      <SendMessage />
    </div>
  );
};

export default ChatRoom;
