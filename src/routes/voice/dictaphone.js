import { useState, useCallback } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import ChatQuestion from '../../components/question/chatquestion'
import ChatResponse from '../../components/response/response'

const Dictaphone = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [messageLog, setMessages] = useState([]);
  const [messageHistory, setMessageHistory] = useState([]);

  const handleStart = () => {
    alert('Start speaking.... quick!')
    SpeechRecognition.startListening();
  };

  const handleStop = () => {
    SpeechRecognition.stopListening();
  };

  const handleSubmit = useCallback(() => {
    setMessages(prevMessages => [...prevMessages, transcript]);
    alert('Submitted!');
    resetTranscript();
  }, [transcript, resetTranscript]);

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
          <h4>Microphone Options: </h4>
          <button onClick={handleStart} className='mic-option'>Start Talking</button>
          <button onClick={handleStop} className='mic-option'>Stop Talking</button>
          <button onClick={handleSubmit} className='mic-option'>Submit Question</button>
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
      </div>
    </div>
  );
}

export default Dictaphone;