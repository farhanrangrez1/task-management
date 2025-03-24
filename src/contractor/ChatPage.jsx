import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Sidebar from "./Sidebar";

const ChatPage = () => {
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChat, setSelectedChat] = useState("Marketing Team");
  const messagesEndRef = useRef(null);

  const chats = [
    {
      id: 1,
      name: "Marketing Team",
      lastMessage: "Sarah: Latest updates on...",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    },
    {
      id: 2,
      name: "Development Team",
      lastMessage: "Mike: The new feature is...",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    },
    {
      id: 3,
      name: "Project Discussion",
      lastMessage: "Anna: Meeting at 4PM",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    }
  ];

  const messages = [
    {
      id: 1,
      sender: "Sarah Johnson",
      message: "Hi team! I've just uploaded the latest marketing materials for review.",
      time: "9:30 AM",
      position: "left",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    },
    {
      id: 2,
      sender: "You",
      message: "Thanks Sarah! I'll take a look at them right away.",
      time: "9:35 AM",
      position: "right",
      avatar: "/avatar2.jpg"
    },
    {
      id: 3,
      sender: "Mike Peters",
      message: "Could we schedule a quick call to discuss the feedback?",
      time: "9:40 AM",
      position: "left",
      avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s"
    }
  ];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!message.trim()) return;
    
    // Add message handling logic here
    console.log("Sending message:", message);
    setMessage("");
  };

  const filteredChats = chats.filter(chat => 
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="dashboard-wrapper d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1">
        <div className="chat-container">
          <div className="chat-sidebar">
            <div className="chat-header">
              <h5>Team Chat</h5>
              <button className="new-chat-btn">
                + New Chat
              </button>
            </div>
            
            <div className="search-box">
              <input
                type="text"
                placeholder="Search conversations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <i className="fa fa-search"></i>
            </div>

            <div className="chat-list">
              {filteredChats.map((chat) => (
                <div
                  key={chat.id}
                  className={`chat-item ${selectedChat === chat.name ? 'active' : ''}`}
                  onClick={() => setSelectedChat(chat.name)}
                >
                  <div className="chat-item-avatar">
                    <img src={chat.avatar} alt={chat.name} />
                  </div>
                  <div className="chat-item-info">
                    <h6>{chat.name}</h6>
                    <p>{chat.lastMessage}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="chat-main">
            <div className="chat-messages">
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`message ${msg.position === 'right' ? 'message-right' : 'message-left'}`}
                >
                  {msg.position === 'left' && (
                    <div className="message-avatar">
                      <img src={msg.avatar} alt={msg.sender} />
                    </div>
                  )}
                  <div className="message-content">
                    <div className="message-sender">{msg.sender}</div>
                    <div className="message-text">{msg.message}</div>
                    <div className="message-time">{msg.time}</div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>

            <form onSubmit={handleSendMessage} className="chat-input">
              <input
                type="text"
                placeholder="Type your message..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
              <button type="submit">
                <i className="fa fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;