import { useState } from 'react'
import { ChatInput } from './components/ChatInput';
import  ChatMessages  from './components/ChatMessages';
import './App.css'

function App() {

  // in here React.useState() converts whole data into a state. UseState gives us 2 values. 
  // 1) current data.
  // 2) function to update the data(updater function)
  
  const [ chatMessages, setChatMessages ] = useState([]);
  
  //this is called array destructuring, 
  //const [ chatMessages, setChatMessages ] = array;

  // const chatMessages = array[0]; //current data in use state.
  // const setChatMessages = array[1]; //updater function to update the current data. It will also update the HTML.

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
