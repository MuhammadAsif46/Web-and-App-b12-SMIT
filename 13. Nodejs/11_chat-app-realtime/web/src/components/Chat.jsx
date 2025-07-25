import { useState, useEffect, useContext } from "react";
import {
  Send,
  Paperclip,
  Mic,
  Smile,
  MoreVertical,
  Phone,
  Video,
  Search,
  ArrowLeft
} from 'lucide-react'
import profileImage from "../assets/profile.png"
import { BaseUrl } from '../constants'
import UserContext from '../context/userContext'
import axios from 'axios'
import moment from 'moment'
import io from 'socket.io-client';

const Chat = ({ selectedChat }) => {
  const [message, setMessage] = useState('')
  const { isLoggedIn, isUser } = useContext(UserContext)


  const [isTyping, setIsTyping] = useState(false)

  // Simulate typing indicator

  const [messages, setMessages] = useState([])
  const [toggle, setToggle] = useState(false)


  useEffect(() => {

    // const socket = io("https://myap_name.herokuapp.com"); // to connect hosted server on heroku
    const socket = io(BaseUrl); // to connect with locally running Socker.io server

    socket.on("connect", function () {
      console.log("connected");
    });

    socket.on("disconnect", function (message) {
      console.log("Socket disconnected from server: ", message);
    });

    socket.on(isLoggedIn?._id, (e) => {
      console.log("a new message for you -->", e);
      setMessages((prev) => {
        return [...prev, e]
      })
    });

    return () => {
      socket.close();
    };

  }, [])

  useEffect(() => {
    if (selectedChat) {
      const timer = setTimeout(() => {
        setIsTyping(true);
        setTimeout(() => setIsTyping(false), 2000);
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, [selectedChat,])

  const getMessages = async () => {
    try {
      const response = await axios.get(`${BaseUrl}/api/v1/messages/${selectedChat._id}`, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`
        }
      })
      if (response) {
        console.log("res-data--", response.data);
        setMessages(response.data.data)
      }
    } catch (error) {
      console.log(error.code);
    }
  }

  useEffect(() => {
    if (selectedChat) {
      getMessages()
    }
  }, [selectedChat, toggle])



  const handleSendMessage = async () => {

    const obj = {
      messageText: message,
      to_id: selectedChat._id,
    };


    try {
      const response = await axios.post(`${BaseUrl}/api/v1/message`, obj, {
        headers: {
          Authorization: `Bearer ${JSON.parse(localStorage.getItem("token"))}`,
        },
      });
      console.log("res-data--", response.data);
      setToggle(!toggle)
      setMessage('')
      // if (response) {
      //   localStorage.setItem("token", JSON.stringify(response.data.token))
      //   setIsLoggedIn(response.data.data)
      //   setIsUser(true)
      //   setTimeout(() => {
      //     navigate("/");
      //   }, 3000);

      // }
    } catch (error) {
      console.log(error.code);
      // setErrorMessage(error.code);
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!selectedChat) {
    return (
      <div className="flex-1 flex items-center justify-center bg-gray-50 h-full">
        <div className="text-center">
          <div className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
            <span className="text-white text-2xl font-bold">W</span>
          </div>
          <h2 className="text-2xl font-semibold text-gray-700 mb-2">
            Welcome to WhatsApp
          </h2>
          <p className="text-gray-500">Select a chat to start messaging</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 flex flex-col bg-gray-50 h-full">
      {/* Chat Header */}
      <div className="bg-white border-b border-gray-200 p-4 shadow-sm">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <img
                src={selectedChat.avatar ? selectedChat.avatar : profileImage}
                alt={selectedChat.name}
                className="w-10 h-10 rounded-full"
              />
              <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-white rounded-full online-indicator"></div>
            </div>
            <div>
              <h3 className="font-semibold text-gray-900">
                {selectedChat.username}
              </h3>
              <p className="text-sm text-green-500">online</p>
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Video size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Phone size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Search size={20} />
            </button>
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <MoreVertical size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {messages.map((msg) => (
          <div
            key={msg._id}
            className={`flex message-enter ${msg.from_id === isLoggedIn?._id ? 'justify-end' : 'justify-start'}`}
          >
            <div className={`chat-bubble ${msg.from_id === isLoggedIn?._id ? 'sent' : 'received'}`} style={{ maxWidth: 'max(20rem, 50%)' }}>
              <p className="text-sm">{msg.messageText}</p>
              <p className="text-xs text-gray-500 mt-1">{moment(msg.created).fromNow()}</p>
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start message-enter">
            <div className="chat-bubble received">
              <div className="flex space-x-1">
                <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot"></div>
                <div className="w-2 h-2 bg-gray-400 rounded-full typing-dot"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Message Input */}
      <div className="bg-white border-t border-gray-200 p-4 shadow-sm">
        <div className="flex items-center space-x-2">
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Smile size={20} className="text-gray-500" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
            <Paperclip size={20} className="text-gray-500" />
          </button>
          <div className="flex-1 relative">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type a message"
              className="w-full px-4 py-2 bg-gray-100 rounded-full focus:outline-none focus:ring-2 focus:ring-green-500 transition-all duration-200"
            />
          </div>
          {message.trim() ? (
            <button
              onClick={handleSendMessage}
              className="p-2 bg-green-500 text-white rounded-full hover:bg-green-600 transition-all duration-200 hover:scale-110"
            >
              <Send size={20} />
            </button>
          ) : (
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <Mic size={20} className="text-gray-500" />
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Chat;
