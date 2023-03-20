import "./chatquestion.css"
import barca from "./BARCA.png"

const ChatLog = (props) => {
    const { message } = props; 
    return (
        <>
            <div className="Chat-Message-Me">
                <img src={barca}></img>
                {message}
            </div>
        </>
    ); 
}

export default ChatLog; 