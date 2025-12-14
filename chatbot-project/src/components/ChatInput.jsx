import dayjs from 'dayjs'
import { useState } from "react";
import { Chatbot } from 'supersimpledev';
import './ChatInput.css'

export function ChatInput({ chatMessages,setChatMessages }) { 

  const [inputText, setInputText] = useState('');

  function saveInputText(event) {
    setInputText(event.target.value);
  }

  function sendMessage(){

    // using spread operator we made a copy of chatMessages array, and then we added a value at end of the new array.
    const newChatMessages = [
      ...chatMessages, 
      {
        message: inputText,
        sender: 'user',
        id: crypto.randomUUID(),
        time: dayjs().valueOf()
      }
    ];
    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    
    setChatMessages([
      ...newChatMessages, 
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID(),
        time:dayjs().valueOf()
      }
    ]);

    setInputText('');
  }

  //Remove chatMessages array from localstorage.
  function clearChatMessages() {
    setChatMessages([]);

    // Here, you could also run:
    // localStorage.setItem('messages', JSON.stringify([]));

    // However, because chatMessages is being updated, the
    // useEffect in the App component will run, and it will
    // automatically update messages in localStorage to be [].
  }

  return (
      <div className="chat-input-container">
        <input 
          placeholder="Send a message to Chatbox" 
          size="30"
          onChange={saveInputText}
          //value = change the text inside this <Input>
          value={inputText}
          className="chat-input"
        /> 
        <button
          onClick={sendMessage}
          className="send-button"
        >Send</button>

        <button
          onClick={clearChatMessages}
          className='clear-button'
        >Clear</button>
      </div>
  )
}
