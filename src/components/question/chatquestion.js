import "./chatquestion.css"
const ChatLog = (props) => {
    const { message } = props; 
    return (
        <>
            <div className="Chat-Message-Me">
                <span className="gpt-pfp2">
                    A
                </span>
                <span className="text" style={{ fontFamily: 'Monospace' }}>{message}</span>
            </div>
        </>
    ); 
}

export default ChatLog; 