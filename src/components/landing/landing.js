import "./landing.css"; 
import { useState } from 'react'; 
import ChatLog from "./chatlog";

const Interface = () =>{
    const [message, setMessage] = useState(''); 
    const [messageLog, setMessages] = useState([]); 

    const addMessage = (event) => {
        event.preventDefault();
        if (message.trim() !== '') {
          try {
            setMessages([...messageLog, message]); 
            setMessage(''); 
          } catch (error) {
            //Do nothing if no message is entered
          }
        }
      }
    
    const openConversation = () => {
        alert('HA'); 
    }

    return (
        <>
            <div className="menu">
                <button className="new-chat" onClick={openConversation}>
                    <i className="fa fa-plus"></i> New Chat
                </button>    
            </div>
            <div className="interface">
                {messageLog.map((message => 
                        <div>
                            <ChatLog message={message} />
                        </div>
                ))}
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