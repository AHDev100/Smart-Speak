import { useState, useEffect } from 'react';

const ChatResponse = (props) => {
    const [response, setResponse] = useState('');
    const { question } = props; 
    
    useEffect(() => {
        const generateResponse = async (q) => {
            //We send in a POST Request to Express Server to get a response from OpenAI API
            const response = await fetch('http://localhost:4000', {
                method: "POST", 
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({prompt : q}),
            })
            const answer = await response.json();
            setResponse(answer.answer.text); 
        }
        generateResponse(question);
    }, [question]);

    return (
        <div className="response">
            {response}
        </div>
    )
}

export default ChatResponse;
