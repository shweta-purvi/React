import { useState } from 'react';
import './ChatApp.css';

export default function ChatApp() {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const sendMessage = () => {
    if (input.trim()) {
      setMessages([...messages, { id: Date.now(), text: input, sender: 'you' }]);
      setTimeout(() => {
        setMessages(m => [...m, { id: Date.now(), text: 'Nice to chat with you! 😊', sender: 'bot' }]);
      }, 500);
      setInput('');
    }
  };

  return (
    <div className="chat-container">
      <div className="chat-card">
        <div className="chat-header">
          <div className="online-badge">● Online</div>
          <h2>💬 Chat</h2>
          <p>John Doe</p>
        </div>

        <div className="messages">
          {messages.length === 0 ? (
            <div className="chat-empty">
              <p>Start a conversation! 👋</p>
            </div>
          ) : (
            messages.map(msg => (
              <div key={msg.id} className={`message ${msg.sender}`}>
                <div className="message-bubble">{msg.text}</div>
              </div>
            ))
          )}
        </div>

        <div className="chat-input-group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && sendMessage()}
            placeholder="Type a message..."
          />
          <button onClick={sendMessage}>Send</button>
        </div>
      </div>
    </div>
  );
}
