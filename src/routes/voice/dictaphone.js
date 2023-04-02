import { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import ChatQuestion from '../../components/question/chatquestion'
import ChatResponse from '../../components/response/response'

const Dictaphone = () => {
  const { transcript, resetTranscript } = useSpeechRecognition();
  const [messageLog, setMessages] = useState([]); 

  const handleStart = () => {
    alert('Start speaking.... quick!')
    SpeechRecognition.startListening();
  };

  const handleStop = () => {
    SpeechRecognition.stopListening();
  };

  const handleSubmit = () => {
      setMessages([...messageLog, transcript]); 
      alert('Submitted!');
      resetTranscript();
  };

  const openConversation = () => {
    //Feature Not Supported Yet
    alert('Erm.... feature not avaialable yet, sorry :('); 
  }

  console.log(transcript); 

  return (
    <div className="container">
      <div className="menu">
          <button className="new-chat" onClick={openConversation}>
              <i className="fa fa-plus"></i> New Chat
          </button>   
          <button onClick={handleStart}>Start Talking</button>
          <button onClick={handleStop}>Stop Talking</button>
          <button onClick={handleSubmit}>Submit Question</button>
      </div>
      <div className="interface">
          {messageLog.map((message, index) => 
            <div key={index}>
              <ChatQuestion message={message} />
              <ChatResponse question={message}/>
            </div>
          )}
      </div>
    </div>
  );
}

export default Dictaphone;