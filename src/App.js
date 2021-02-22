import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/analytics';

import { useAuthState } from 'react-firebase-hooks/auth'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import { useState } from 'react';

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
    <div>
      App!
      <section>
        { user ? <ChatRoom /> : <SignIn /> }
      </section>
    </div>
  )
}

const SignIn = () => {

  const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    auth.signInWithPopup(provider);
  }

    return (
<>    <button onClick={signInWithGoogle}>Sign in with Google</button>
</>
    )
}


const ChatRoom = () => {

  const messagesRef = firestore.collection('messages');
  const query = messagesRef.orderBy('createdAt').limit(25);

  const [messages] = useCollectionData(query, {idField: 'id'})

  const [formValue, setFormValue] = useState("")

  console.log(messages);

  const sendMessage = async (e) => {
    e.preventDefault();

    const { uid, photoURL } = auth.currentUser;

    await messagesRef.add({
      text: formValue,
      createdAt: firebase.firestore.FieldValue.serverTimestamp(),
      uid,
      photoURL
    })

    setFormValue('');
  }

  return (
  <>
  <div>
    {messages && messages.map(msg => <ChatMessage key={msg.id} message={msg}/>)}
  </div>
  <div>
    <form onSubmit = {sendMessage}>
      <input value = {formValue} onChange= {(e) => setFormValue(e.target.value)}></input>
      <button type ="submit" disabled={!formValue}>SEND MESSAGE!</button>
    </form>
  </div>
  </>)
}


const ChatMessage = (props) => {
  const { text, uid } = props.message;
  return (
    <p>{text}</p>
  )
}

const SignOut = () => {
  return auth.currentUser && (
    <button onClick={auth.signOut()}>Sign Out!!!</button>
  )
}

export default App