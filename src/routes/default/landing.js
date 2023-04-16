import "./landing.css"; 
import { useState, useCallback } from 'react'; 
import ChatQuestion from "../../components/question/chatquestion";
import ChatResponse from "../../components/response/response";

const Interface = () =>{
    const [message, setMessage] = useState(''); 
    const [messageLog, setMessages] = useState([]);
    const [messageHistory, setMessageHistory] = useState([]);

    const addMessage = useCallback((event) => {
        event.preventDefault();
        if (message.trim() !== '') {
          try {
            setMessages(prevMessages => [...prevMessages, message]); //Adds new message to message log using spread operator (for existing messages, if any)
            setMessage('');
          } catch (error) {
            //Do nothing if no message is entered
          }
        }
    }, [message, setMessages]);

    const archiveConversation = () => {
        if (messageLog.length !== 0) {
            setMessageHistory(prevMessageHistory => [...prevMessageHistory, messageLog]);
            setMessages([]);
        } else {
            alert('There\'s nothing to save!');
        }
    };

    const openConversation = (index) => {
        const selectedConversation = messageHistory[index];
        setMessageHistory(prevMessageHistory => {
            const updatedHistory = [...prevMessageHistory];
            updatedHistory.splice(index, 1);
            return updatedHistory;
        });
        setMessages(selectedConversation);
    };

    const handleKeyUp = useCallback((event) => {
        if (event.key === "Enter"){
            //When the enter key gets pressed, it submits the form and adds a new message, for which we asynchronously receive a corresponding response
            addMessage(event); 
        }
    }, [addMessage]);

    const handleDelete = useCallback((index) => {
        setMessages(prevMessages => {
          const newMessages = [...prevMessages];
          newMessages.splice(index, 1);
          return newMessages;
        });
    }, [setMessages]);

    return (
        <div className="container">
            <div className="menu">
                <button className="new-chat" onClick={archiveConversation}>
                    <i className="fa fa-plus"></i> New Chat/Save Current
                </button>  
                <div className="separator"></div>
                <h4>Conversation History: </h4>                
                {messageHistory.map((conversation, index) => (
                    <button key={index} onClick={() => openConversation(index)} className="convo-identifier">
                        {conversation[0].substring(0, 6).toUpperCase() + '...'}
                    </button>
                ))}
            </div>
            <div className="interface">
                {messageLog.map((message, index) => 
                    <div key={index}>
                        <div>
                            <div className='chat-question-container'>
                                <div className="chat-question">
                                    <ChatQuestion message={message} />
                                </div>
                                <button onClick={() => handleDelete(index)} className="delete-button">
                                    Delete <i className='fa fa-trash'></i>
                                </button>
                            </div>
                            <ChatResponse question={message}/>
                        </div>
                    </div>
                )}
                <form onSubmit={addMessage} onKeyUp={handleKeyUp}>
                    <textarea className="chat-input" value={message} onChange={(e)=>setMessage(e.target.value)} style={{ fontFamily: 'Monospace' }}></textarea>
                    <button type="submit" className="btn">
                        <svg stroke="currentColor" fill="none" stroke-width="2" viewBox="0 0 24 24" stroke-linecap="round" stroke-linejoin="round" className="h-4 w-4 mr-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg">
                            <line x1="22" y1="2" x2="11" y2="13"></line>
                            <polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
                        </svg>
                    </button>
                </form>
            </div>
        </div>
    )
};

export default Interface; 