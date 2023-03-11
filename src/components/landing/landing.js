import "./landing.css"; 

const landing = () =>{
    
    return (
        <div>
            <div className="btn-container">
                <button onClick={console.log('Gay')}>
                    <span>Voice GPT<i className="fas fa-microphone"></i></span>
                </button>
                <i className="fa fa-info-circle info-1"></i>
                <button>
                    <span>Chat GPT<i className="fas fa-comment"></i></span>
                </button>
                <i className="fa fa-info-circle info-2"></i>  
            </div>
        </div>
    )
}

export default landing; 