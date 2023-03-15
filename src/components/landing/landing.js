import "./interface.css"; 

const Interface = () =>{

    const handleInput = () => {
        alert('Input Sent')
    }
    
    const openConversation = () => {
        alert('HA'); 
    }

    return (
        <>
            <div className="menu">
                <button className="new-chat" onClick={openConversation}>
                    <i className="fa fa-plus"></i> New Chat
                </button>    
            </div>
            <div className="interface">
                <input className="chat-input"></input>
                <button onClick={handleInput}></button>
            </div>
        </>
    )
}

export default Interface; 