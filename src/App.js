import React, {useState} from 'react';

import './App.css';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState(['hello','hi','whatsup']);
  //console.log(input);
  console.log(messages);

  // sending message function:
  const sendMessage = (event) => {
      setMessages([...messages, input]);
      setInput('');
  }

  return (
    <div className="App">
      <h1>Hello</h1>

    <input value={input} onChange={event=> setInput(event.target.value)}/>
    <button onClick={sendMessage}>Send Messages</button>

{/* input button */}
{/* button */}
{/* messages */}

    </div>
  );
}

export default App;
