import "./chatquestion.css"
const ChatLog = (props) => {
    const { message } = props; 
    return (
        <>
            <div className="Chat-Message-Me">
                <span className="text" style={{ fontFamily: 'Arial' }}>{message}</span>
            </div>
        </>
    ); 
}

export default ChatLog; 