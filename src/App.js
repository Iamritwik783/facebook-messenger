import React, { useState } from 'react';

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

      <form >
      <input value={input} onChange={event => setInput(event.target.value)} />
      <button type="submit" onClick={sendMessage}>Send Messages</button>
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
