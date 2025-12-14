import { useState , useEffect } from 'react'
import { ChatInput } from './components/ChatInput';
import { Chatbot } from 'supersimpledev';
import  ChatMessages  from './components/ChatMessages';
import './App.css'

function App() {

  //add responses to chatbot
  useEffect( () => {
    Chatbot.addResponses( {
      'goodbye' : 'Goodbye. Have a great day!',
      'give me a unique id' : function() {
        return `Sure! Here's a unique ID: ${crypto.randomUUID()}`;
      }
    });
  }, [])


  // in here React.useState() converts whole data into a state. UseState gives us 2 values. 
  // 1) current data.
  // 2) function to update the data(updater function)
  

  //default value is chatMessages data in localStorage
  const [ chatMessages, setChatMessages ] = useState(JSON.parse(localStorage.getItem('messages')) || []);
  
  //this is called array destructuring, 
  //const [ chatMessages, setChatMessages ] = array;
  // const chatMessages = array[0]; //current data in use state.
  // const setChatMessages = array[1]; //updater function to update the current data. It will also update the HTML.

  //save chatMessages in localStorage
  useEffect( () => {
    localStorage.setItem('messages', JSON.stringify(chatMessages))
  }, [chatMessages])

  return(
    <div className="app-container">
      <ChatMessages
        chatMessages={chatMessages}
      />

      <ChatInput
        chatMessages={chatMessages}
        setChatMessages={setChatMessages}
      />
    </div>
  );
}

export default App
