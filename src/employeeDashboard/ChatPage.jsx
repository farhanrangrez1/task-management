import React, { useState, useRef, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "font-awesome/css/font-awesome.min.css";
import Sidebar from "./Sidebar";

// Chat live
import { Stack, Grid, TextField, Button, Typography } from "@mui/material";
import io from "socket.io-client";
import { format } from "date-fns";
import UsernameDialog from "./UsernameDialog";
import { ChatAll, chats_Creat, UserAll } from "../features/Chats/ChatsSlice";
import { useDispatch, useSelector } from "react-redux";
const socket = io("http://localhost:5173/"); // Make sure this URL is correct

const ChatPage = () => {
  const dispatch = useDispatch()
  const [message, setMessage] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedChat, setSelectedChat] = useState("Marketing Team");
  const [selectedUserId, setSelectedUserId] = useState(null);
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

     // chat all
     const { chatsArr } = useSelector((state) => state.chats);
     // console.log(chatsArr);
   useEffect(() => {
     dispatch(ChatAll());
   }, [dispatch]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);
  const filteredChats = chats.filter(chat => 
    chat.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Chat Live
  const scrollRef = useRef();
  const [username, setUsername] = useState(null);
  const [chatMessages, setChatMessages] = useState([]);

  useEffect(() => {
    socket.on("receive_message", (e) => {
      const data = JSON.parse(e);
      const formattedData = {
        username: data.username,
        content: data.content,
        timestamp: data.timestamp,
   
      };
      setChatMessages((prevMessages) => [...prevMessages, data]);
    });
    return () => {
      socket.off("receive_message");
    };
  }, []);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [chatMessages]);

  const sendMessage = (e) => {
    e.preventDefault();
    if (!message.trim() || !selectedUserId) return;

    const data = {
      username,
      content: message,
      timestamp: new Date().toISOString(),
      receiverId: selectedUserId
    };
    dispatch(chats_Creat(data))
    socket.emit("send_message", JSON.stringify(data));
    setChatMessages((prevMessages) => [...prevMessages, data]); 
    setMessage("");
 dispatch(ChatAll());  
  };

  // user api
    const [showProfileMenu, setShowProfileMenu] = useState(false);
    const [profiledata, setProfileData]=useState({})
  
    useEffect(()=>{
     const data= localStorage.getItem("user")
     if(data){
      //  setProfileData(JSON.parse(data))
      //  console.log(data);
        }else{
      setProfileData("")
     }
    },[])
    
    // UserAll all
        const { AllUser } = useSelector((state) => state.chats);
        console.log(AllUser);        
      useEffect(() => {
        dispatch(UserAll());
      }, [dispatch]);


      

      const selectUser = (id) => {
    setSelectedUserId(id);
    dispatch(ChatAll(id));
  }

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
              {AllUser?.map((chat) => (
                <div
                  key={chat.id}
                  className={`chat-item ${selectedChat === chat.name ? 'active' : ''}`}
                  // onClick={() => setSelectedChat(chat.name)}
                  onClick={() => selectUser(chat.id)}
                >
                  <div className="chat-item-avatar">
                    {/* <img src={chat.avatar} alt={chat.name} /> */}
                    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s" alt="" />
                  </div>
                  <div className="chat-item-info">
                    <h6>{chat.first_name}</h6>
                    <p>{chat.email}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="chat-main">
          <div className="chat-messages">
              {chatsArr.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${msg.username === username ? 'message-right' : 'message-left'}`}
                >
                  <div className="message-avatar">
                    <img src={msg.avatar || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s'} alt={msg.username} />
                  </div>
                  <div className="message-content">
                    <div className="message-sender">{msg.username}</div>
                    <div className="message-text">{msg.content}</div>
                    {/* <div className="message-time">{format(new Date(msg.timestamp), 'hh:mm a')}</div> */}
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div> 

          <div className="chat-messages">
              {chatMessages.map((msg, index) => (
                <div
                  key={index}
                  className={`message ${msg.username === username ? 'message-right' : 'message-left'}`}
                >
                  <div className="message-avatar">
                    <img src={msg.avatar || 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRLe5PABjXc17cjIMOibECLM7ppDwMmiDg6Dw&s'} alt={msg.username} />
                  </div>
                  <div className="message-content">
                    <div className="message-sender">{msg.username}</div>
                    <div className="message-text">{msg.content}</div>
                    <div className="message-time">{format(new Date(msg.timestamp), 'hh:mm a')}</div>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div> 
            <form onSubmit={sendMessage} className="chat-input">
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
            <form onSubmit={sendMessage} className="chat-input">
      <Grid
        container
        direction="column"
        alignItems="center"
        style={{ height: "100vh", width: "100%", padding: 5, marginTop: "100px", position: "fixed" }}
      >
        <UsernameDialog username={profiledata} setUsername={profiledata} />
        <Stack                                                 
          spacing={1}
          sx={{
            backgroundColor: "#fff",
            height: "80vh",
            width: "90%",
            borderRadius: 2,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Grid container item padding={3}>
            <Grid item>Welcome {username}</Grid>
          </Grid>

          <Stack ref={scrollRef} direction="column" spacing={3} px={2} sx={{ flex: 1, overflowY: "auto" }}>
            {chatMessages.map(({ username: sender, content, timestamp }, index) => {
              const self = sender === username;
              return (
                <Grid
                  key={index}
                  item
                  sx={{
                    alignSelf: self ? "flex-end" : "flex-start",
                    maxWidth: "50%",
                  }}
                >
                  <Typography fontSize={11} px={1} textAlign={self ? "right" : "left"}>
                    {sender}
                  </Typography>
                  <Typography
                    sx={{
                      backgroundColor: self ? "#90caf9" : "#e0e0e0",
                      borderRadius: 2,
                      padding: "5px",
                    }}
                    px={1}
                  >
                    {content}
                  </Typography>
                  <Typography fontSize={11} px={1} textAlign={self ? "right" : "left"}>
                    {format(new Date(timestamp), "hh:mm a")}
                  </Typography>
                </Grid>
              );
            })}
          </Stack>

          <Grid container item padding={3} alignItems="center">
            <Grid item flex={1}>
              <TextField
                autoFocus
                variant="standard"
                fullWidth
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                sx={{
                  border: "1px solid gray",
                  borderRadius: 1,
                  paddingLeft: 2,
                }}
                InputProps={{
                  disableUnderline: true,
                }}
              />
            </Grid>
            <Grid item xs={2}>
            <Button type="submit" variant="contained" fullWidth>
              <Button type="submit">Send</Button>
              </Button>
                    </Grid>
          </Grid>
        </Stack>
      </Grid>
    </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatPage;