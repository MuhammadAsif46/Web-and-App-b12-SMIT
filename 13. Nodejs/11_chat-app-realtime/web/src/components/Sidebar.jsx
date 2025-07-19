import {
  Search,
  MoreVertical,
  MessageCircle,
  Phone,
  Video,
  Info,
  Filter,
  Camera,
  Edit,
  LogOutIcon
} from 'lucide-react'
import axios from "axios"
import { useContext, useEffect, useState } from 'react'
import profileImage from "../assets/profile.png"
import UserContext from '../context/userContext'

const Sidebar = ({ selectedChat, onSelectChat }) => {

  const [users, setUsers] = useState([])
  const [loader, setLoader] = useState(false)  
  const {setIsUser } = useContext(UserContext);
  

  const getChats = async () => {
    try {
      setLoader(true)
      await axios.get("http://localhost:5000/api/v1/users")
        .then(res => setUsers(res.data.data))
        .catch(err => console.log(err))

      setLoader(false)
    } catch (error) {
      setLoader(false)
      console.log("err", error.message);
    }
  }

  useEffect(() => {
    getChats()
  }, [])
  
  const logoutHandler = () =>{
    localStorage.removeItem("token")
    setIsUser(false);
  }

  return (
    <div className="w-80 bg-white border-r border-gray-200 flex flex-col h-full">
      {/* Header */}
      <div className="bg-green-600 text-white p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
              <span className="text-green-600 font-semibold">W</span>
            </div>
            <span className="font-semibold text-lg">WhatsApp</span>
          </div>
          <div className="flex items-center space-x-2">
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Camera size={20} />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Video size={20} />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <Phone size={20} />
            </button>
            <button className="p-2 hover:bg-white/10 rounded-full transition-colors">
              <MoreVertical size={20} />
            </button>
          </div>
        </div>
      </div>

      {/* Search Bar */}
      <div className="p-3 bg-gray-50">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search or start new chat"
            className="w-full pl-10 pr-4 py-2 bg-white rounded-lg border border-gray-200 focus:outline-none focus:border-green-500 transition-colors"
          />
        </div>
      </div>

      {/* Filter Button */}
      <div className="px-3 pb-2">
        <button className="flex items-center space-x-2 text-green-600 hover:bg-gray-100 px-3 py-2 rounded-lg transition-colors">
          <Filter size={16} />
          <span className="text-sm font-medium">Filter</span>
        </button>
      </div>

      {/* Status Updates */}
      <div className="px-3 pb-2">
        <div className="flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg cursor-pointer transition-colors">
          <div className="relative">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full flex items-center justify-center">
              <span className="text-white font-semibold">+</span>
            </div>
            <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 border-2 border-white rounded-full flex items-center justify-center">
              <Camera size={12} className="text-white" />
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900">My status</h4>
            <p className="text-sm text-gray-500">Tap to add status update</p>
          </div>
        </div>
      </div>

      {/* Chat List */}
      <div className="flex-1 overflow-y-auto">
        {users.map((eachuser, index) => (
          <div
            key={index}
            onClick={() => onSelectChat(eachuser)}
            className={`sidebar-item ${selectedChat?.id === eachuser.id ? 'active' : ''}`}
          >
            <div className="relative">
              <img
                src={eachuser.avatar ? eachuser.avatar : profileImage}
                alt={eachuser.username}
                className="w-12 h-12 rounded-full"
              />
              {eachuser.unread > 0 && (
                <div className="absolute -top-1 -right-1 bg-green-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-semibold">
                  {eachuser.unread}
                </div>
              )}
            </div>
            <div className="flex-1 ml-3 min-w-0">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-gray-900 truncate">{eachuser.username}</h3>
                <span className="text-xs text-gray-500">{eachuser.time}</span>
              </div>
              <div className="flex items-center justify-between">
                <p className="text-sm text-gray-600 truncate">{eachuser.lastMessage ? eachuser.lastMessage : "How Are You!"}</p>
                {eachuser.unread > 0 && (
                  <div className="w-2 h-2 bg-green-500 rounded-full ml-2 flex-shrink-0"></div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* New Chat Button */}
      <div className="p-4 border-t border-gray-200">
        <button className="w-full bg-red-500 text-white py-3 rounded-lg font-semibold hover:bg-red-600 hover:cursor-pointer transition-colors flex items-center justify-center space-x-2"
        onClick={logoutHandler}
        >
          {/* <MessageCircle size={20} /> */}
          <LogOutIcon size={20} />
          <span>Logout</span>
        </button>
      </div>
    </div>
  )
}

export default Sidebar 