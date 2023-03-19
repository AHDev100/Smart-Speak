import "./landing.css"; 
import { useState } from 'react'; 
import ChatQuestion from "./chatquestion";
import ChatResponse from "./response";

const Interface = () =>{
    const [message, setMessage] = useState(''); 
    const [messageLog, setMessages] = useState([]); 
    //const [answer, setAnswer] = useState(''); 

    const addMessage = (event) => {
        event.preventDefault();
        if (message.trim() !== '') {
          try {
            setMessages([...messageLog, message]); //Adds new message to message log using spread operator (for existing messages, if any)
            setMessage(''); 
          } catch (error) {
            //Do nothing if no message is entered
          }
        }
      }
    
    const openConversation = () => {
        alert('Erm.... feature not avaialable yet, sorry :('); 
    }

    return (
        <>
            <div className="menu">
                <button className="new-chat" onClick={openConversation}>
                    <i className="fa fa-plus"></i> New Chat
                </button>    
            </div>
            <div className="interface">
                {messageLog.map((message, index) => 
                        <div key={index}>
                            <ChatQuestion message={message} />
                            <ChatResponse question={message}/>
                        </div>
                )}
                <form onSubmit={addMessage}>
                    <textarea className="chat-input" value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
                    <button type="submit" className="btn">
                        Send
                    </button>
                </form>
            </div>
        </>
    )
}

export default Interface; 