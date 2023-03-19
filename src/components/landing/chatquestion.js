const ChatLog = (props) => {
    const { message } = props; 
    return (
        <>
            <div className="Chat-Message-Me">
                {message}
            </div>
        </>
    ); 
}

export default ChatLog; 