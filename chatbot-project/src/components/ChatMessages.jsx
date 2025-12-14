import { useEffect , useRef } from "react";
import { ChatMessage } from "./ChatMessage";
import './ChatMessages.css';

// chatMessages prop come from App.jsx
function ChatMessages({ chatMessages }) {

  /*  
    function sendMessage() {
      this is how we push directly it won't work.
      chatMessages.push({ 
        message: 'test',
        sender: 'user',
        // every id has unique value
        id: crypto.randomUUID()
      });

      console.log(chatMessages);

      using spread operator we made a copy of chatMessages array, and then we added a value at end of the new array.
      setChatMessages([
        ...chatMessages, 
        {
          message: 'test',
          sender: 'user',
          id: crypto.randomUUID()
        }
      ]);
      
    }
  */
  //useRef = automatically save an HTML element from the component.
  //null - initial value
  const chatMessagesRef = useRef(null);
  //react will run this function, after component is created and every time the component is updated.
  //Array at the end controls when useEffect runs.
  //empty array = [] -> only run once, after the component is created. This is called depenency array
  //In here [chatMessages] = run this function every time chatMessages changes.
  useEffect(() => {
    const containerElem = chatMessagesRef.current;
    if(containerElem){
      containerElem.scrollTop = containerElem.scrollHeight;
    }
  }, [chatMessages]);

  return (
    /*what happens in here is chat-messages-container is given to the ref container of useRef and save it in chatMessagesRef variable. useEffect access it and changes the chat-messages-container to handle auto scroll feature*/
    <div className="chat-messages-container" ref={chatMessagesRef}>
      {chatMessages.map((chatMessage) => {
        return (
          <ChatMessage 
            message={chatMessage.message}
            sender={chatMessage.sender}
            time={(chatMessage.time)}
            key={chatMessage.id}
          />
        );
      })}
    </div>
  )

}

export default ChatMessages