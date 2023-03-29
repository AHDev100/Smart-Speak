import './voice.css'; 
import { useState } from 'react';
import ChatQuestion from "../../components/question/chatquestion";
import ChatResponse from "../../components/response/response";

const Voice = () => {
    const message = 'Buddy boi'; 
    return (
        <div>
            <form>
                <textarea value={message} />
            </form>
        </div>
    )
}; 

export default Voice; 