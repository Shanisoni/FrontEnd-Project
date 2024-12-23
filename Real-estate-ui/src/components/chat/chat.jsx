import React, { useState } from "react";
import axios from "axios";

function Chat() {
    const [messages, setMessages] = useState([]);
    const [userInput, setUserInput] = useState("");

    const handleSendMessage = async () => {
        if (userInput.trim()) {
            const userMessage = { sender: "You", text: userInput, time: "Just now" };
            setMessages([...messages, userMessage]);
            setUserInput("");

            try {
                const response = await axios.post("http://localhost:5000/chat", {
                    query: userInput,
                });

                const botMessage = { sender: "Bot", text: response.data.reply, time: "Just now" };
                setMessages(prevMessages => [...prevMessages, botMessage]);
            } catch (error) {
                console.error("Error fetching response:", error);
                const botMessage = { sender: "Bot", text: "Sorry, I couldn't get a response.", time: "Just now" };
                setMessages(prevMessages => [...prevMessages, botMessage]);
            }
        }
    };

    return (
        <div className="chat">
            <div className="messages">
                <h1>Messages</h1>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <p>{msg.sender}: {msg.text}</p>
                    </div>
                ))}
            </div>

            <div className="bottom">
                <textarea
                    value={userInput}
                    onChange={(e) => setUserInput(e.target.value)}
                    placeholder="Type a message..."
                />
                <button onClick={handleSendMessage}>Send</button>
            </div>
        </div>
    );
}

export default Chat;
