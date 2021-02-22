import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useState, useRef } from 'react';

import { Container, Header, Message, Form, Messages, Sent, ReceivedMessage, SentMessage} from './styles'

//import React from 'react'

!firebase.apps.length ? firebase.initializeApp({
  //your config
  apiKey: "AIzaSyDxvOgQi_rEneoxRi9Iag75b-Oy-vLbCaI",
  authDomain: "chat-app-18404.firebaseapp.com",
  projectId: "chat-app-18404",
  storageBucket: "chat-app-18404.appspot.com",
  messagingSenderId: "1020225808869",
  appId: "1:1020225808869:web:fc9b3c705cde795d54e70c",
  measurementId: "G-7EXTG0ETER"
}) : firebase.app();

const auth = firebase.auth();
const firestore = firebase.firestore();
const analytics = firebase.analytics();

const App = () => {

  const [user] = useAuthState(auth);


  return (
    <>
      
    <Container>
      <Header>
        This is an anonymous chatroom!
      </Header>
      { user ? <ChatRoom id="chatbox" /> : <SignIn /> }
    </Container>

    </>
  )
}

const SignIn = () => {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

  const signInWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider();
    auth.signInWithPopup(provider);
  }

  const signInWithAnonymous = () => {
    firebase.auth().signInAnonymously();
  }
    return (
<>    <button onClick={signInWithGoogle}>Sign in with Google</button>
      <button onClick={signInWithFacebook}>Sign in with Facebook</button>
      <button onClick={signInWithAnonymous}>Sign in Anonymously</button>
</>
    )
}


const ChatRoom = () => {
  const dummy = useRef();


  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt', 'desc').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'})

  const [formValue, setFormValue] = useState("")

  console.log(messages);

  const sendMessage = async (e) => {
    e.preventDefault();

    console.log("sendmessage!")

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');

    
    dummy.current.scrollIntoView({ behavior: 'smooth'});

  }

  return (
  <>

  

  <Messages>
  <span ref={dummy}></span>
    {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
    {/* {dummy.current && console.log("dummref", dummy) && dummy.current.scrollIntoView({ behavior: 'smooth' })}; */}

  </Messages>
  <div>
    <Form onSubmit = {sendMessage}>
      <input value = {formValue} onChange= {(e) => setFormValue(e.target.value)}></input>
      <button type ="submit" disabled={!formValue}>SEND MESSAGE!</button>
    </Form>
  </div>
  <div>
    <SignOut />
  </div>
  </>)
}


const ChatMessage = (props) => {
  const { text, uid } = props.message;

  const sent = uid === auth.currentUser.uid ? true : false;

  return (
    sent ? <SentMessage>{text}</SentMessage> : <ReceivedMessage>{text}</ReceivedMessage>
  )
}

const SignOut = () => {
  return (
    <button onClick={(e) => auth.signOut()}>Sign Out!!!</button>
  ) 
}

export default App