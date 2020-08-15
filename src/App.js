import React, { useState } from 'react';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';

import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['hello', 'hi', 'whatsup']);
  //console.log(input);
  console.log(messages);

  // sending message function:
  const sendMessage = (event) => {
    event.preventDefault(); // to stop "form" from refreshing
    setMessages([...messages, input]);
    setInput('');
  }

  return (
    <div className="App">
      <h1>Hello</h1>


      <FormControl>
        <InputLabel>Enter a message....</InputLabel>
        <Input value={input} onChange={event => setInput(event.target.value)}/>
        <Button disabled = {!input} variant="contained" color = "primary" type="submit" onClick={sendMessage}>Send Message</Button>
      </FormControl>

      <form >
    
      
      </form>


      {/* messages */}
      {
        messages.map(message => (
          <p>{message}</p>
        ))
      }

    </div>
  );
}

export default App;
