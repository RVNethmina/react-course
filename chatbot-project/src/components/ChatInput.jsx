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
        id: crypto.randomUUID()
      }
    ];
    setChatMessages(newChatMessages);

    const response = Chatbot.getResponse(inputText);
    
    setChatMessages([
      ...newChatMessages, 
      {
        message: response,
        sender: 'robot',
        id: crypto.randomUUID()
      }
    ]);

    setInputText('');
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
      </div>
  )
}
