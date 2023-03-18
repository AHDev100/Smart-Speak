import { useEffect, useState } from "react";

const ChatLog = (props) => {
    const [showCursor, setShowCursor] = useState(true); 
    const { message } = props; 

    useEffect(() => {
        const interval = setInterval(() => {
            setShowCursor((showCursor) => !showCursor); 
        }, 500)
        return clearInterval(interval); 
    })
    
    return (
        <>
            <div className="Chat-Message-Me">
                {showCursor && <span className="cursor">_</span>}
                {message}
            </div>
        </>
    ); 
}

export default ChatLog; 