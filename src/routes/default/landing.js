import "./landing.css"; 
import { useState } from 'react'; 
import ChatQuestion from "../../components/question/chatquestion";
import ChatResponse from "../../components/response/response";

const Interface = () =>{
    const [message, setMessage] = useState(''); 
    const [messageLog, setMessages] = useState([]); 

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
        //Feature Not Supported Yet
        alert('Erm.... feature not avaialable yet, sorry :('); 
    }

    const handleKeyUp = (event) => {
        if (event.key === "Enter"){
            //When the enter key gets pressed, it submits the form and adds a new message, for which we asynchronously receive a corresponding response
            addMessage(event); 
        }
    }; 
    
    return (
        <div className="container">
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
                <form onSubmit={addMessage} onKeyUp={handleKeyUp}>
                    <textarea className="chat-input" value={message} onChange={(e)=>setMessage(e.target.value)} style={{ fontFamily: 'Monospace' }}></textarea>
                    <button type="submit" className="btn">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" class="h-4 w-4 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Interface; 