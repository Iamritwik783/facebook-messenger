import React, { useState, useEffect } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message';
import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([{ username: 'sonu', text: 'hey' }, { username: 'khata', text: 'hello' }, { username: 'ritwik', text: 'whatsup' }]);
  const [username, setUsername] = useState('');

  // useState = variable in React
  // useEffect = run code on a condition in React

  useEffect(() => {
    // run code here.... if its blank inside [], this will run only once...
    // const username = prompt("Please enter your name:")
    setUsername(prompt("Please enter your name:"))
  }, []) // condition

  //console.log(input);
  // console.log(messages);

  // sending message function:
  const sendMessage = (event) => {
    event.preventDefault(); // to stop "form" from refreshing
    setMessages([...messages, { username: username, text: input }]);
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
            username={message.username}
            text={message.text} />
        ))
      }

    </div>
  );
}

export default App;
