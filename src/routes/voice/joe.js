import React, { useState } from 'react';
import SpeechRecognition, { useSpeechRecognition } from 'react-speech-recognition';
import ChatQuestion from '../../components/question/chatquestion'

function MyComponent() {
  const { transcript, resetTranscript } = useSpeechRecognition();

  const handleStart = () => {
    SpeechRecognition.startListening();
  };

  const handleStop = () => {
    SpeechRecognition.stopListening();
  };

  const handleSubmit = () => {
    alert('Submitted!');
    resetTranscript();
  };

  console.log(transcript); 

  return (
    <div>
      <button onClick={handleStart}>Start Talking</button>
      <button onClick={handleStop}>Stop Talking</button>
      <ChatQuestion message={transcript}/>
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}

export default MyComponent; 