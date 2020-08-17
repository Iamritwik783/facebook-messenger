import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import './App.css';
import db from './firebase';
import firebase from './firebase';
import 'firebase/firestore';

function App() {
  const [input, setInput] = useState('');
  //console.log(input);
  const [messages, setMessages] = useState([{}]);
  // console.log(messages);
  const [username, setUsername] = useState('');

  // useState = variable in React
  // useEffect = run code on a condition in React

  useEffect(() => {
    // run once when component loads
    db.collection('messages').onSnapshot(snapshot => {
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, [])

  useEffect(() => {
    // run code here.... if its blank inside [], this will run only once...
    // const username = prompt("Please enter your name:")
    setUsername(prompt("Please enter your name:"));
  }, []) // condition





  // sending message function:
  const sendMessage = (event) => {
    event.preventDefault(); // to stop "form" from refreshing

    // const timestamp = firebase.firestore
    // firebase.db.ServerValue.TIMESTAMP

    // const sessionsRef = firebase.database().ref("sessions");
    // sessionsRef.push({
    //   startedAt: firebase.database.ServerValue.TIMESTAMP
    // });

    const time = new Date().toLocaleTimeString();

    db.collection('messages').add({
      message: input,
      username: username,
      timestamp: time
    })

    // setMessages([...messages, { username: username, message: input }]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello {username}</h1>

      <FormControl>
        <InputLabel>Enter a message.....</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)} />
        <Button type="submit" variant="contained" color="primary" disabled={!input} onClick={sendMessage}> Send Message</Button>
      </FormControl>

      {/* message */}
      { 
        messages.map(message => (
          <Message
            currentUser={username}
            username={message.username}
            text={message.message} />
        ))
      }

    </div>
  );
}

export default App;
