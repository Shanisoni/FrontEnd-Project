import "./chat.scss"
import React, { useState } from 'react';


function Chat() {
    const [chat, setChat] = useState(true);
    return (
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                <div className="message" onClick={() => setChat(true)}>
                    <img src="Profilephoto.jpg" alt="" />
                    <span>Nishchal Sachan</span>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>

                <div className="message" onClick={() => setChat(true)}>
                    <img src="Profilephoto.jpg" alt="" />
                    <span>Nishchal Sachan</span>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>

                <div className="message" onClick={() => setChat(true)}>
                    <img src="Profilephoto.jpg" alt="" />
                    <span>Nishchal Sachan</span>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>

                <div className="message" onClick={() => setChat(true)}>
                    <img src="Profilephoto.jpg" alt="" />
                    <span>Nishchal Sachan</span>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>

                <div className="message" onClick={() => setChat(true)}>
                    <img src="Profilephoto.jpg" alt="" />
                    <span>Nishchal Sachan</span>
                    <p>Lorem ipsum dolor sit amet...</p>
                </div>
            </div>
            {chat && (
                <div className="chatBox">
                    <div className="top">
                        <div className="user">
                            <img src="Profilephoto.jpg" alt="" />
                            <span>Nishchal Sachan</span>
                        </div>
                        <span className="close" onClick={() => setChat(null)}>X</span>
                    </div>
                    <div className="center">
                        <div className="chatMsg">
                            <p>Lorem ipsum dolor sit amet..</p>
                            <span>1 hour ago</span>
                        </div>

                        <div className="chatMsg own">
                            <p>Lorem ipsum dolor sit amet..</p>
                            <span>1 hour ago</span>
                        </div>

                        <div className="chatMsg">
                            <p>Lorem ipsum dolor sit amet..</p>
                            <span>1 hour ago</span>
                        </div>

                        <div className="chatMsg own">
                            <p>Lorem ipsum dolor sit amet..</p>
                            <span>1 hour ago</span>
                        </div>

                        <div className="chatMsg">
                            <p>Lorem ipsum dolor sit amet..</p>
                            <span>1 hour ago</span>
                        </div>

                        <div className="chatMsg own">
                            <p>Lorem ipsum dolor sit amet..</p>
                            <span>1 hour ago</span>
                        </div>

                        <div className="chatMsg">
                            <p>Lorem ipsum dolor sit amet..</p>
                            <span>1 hour ago</span>
                        </div>

                        <div className="chatMsg own">
                            <p>Lorem ipsum dolor sit amet..</p>
                            <span>1 hour ago</span>
                        </div>
                    </div>
                    <div className="bottom">
                        <textarea></textarea>
                        <button>Send</button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default Chat