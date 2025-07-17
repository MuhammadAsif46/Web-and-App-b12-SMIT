import { useState } from 'react'
import Sidebar from './Sidebar'
import Chat from './Chat'
import { Menu } from 'lucide-react'

function Home() {
  const [selectedChat, setSelectedChat] = useState(null)
  const [sidebarOpen, setSidebarOpen] = useState(false)
 

  const handleSelectChat = (chat) => {
    setSelectedChat(chat)
    setSidebarOpen(false) // Close sidebar on mobile when chat is selected
  }

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Mobile Menu Button */}
      <div className="lg:hidden fixed top-4 left-4 z-50">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="p-2 bg-green-600 text-white rounded-lg shadow-lg"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Sidebar */}
      <div className={`
        ${sidebarOpen ? 'translate-x-0' : '-translate-x-full'}
        lg:translate-x-0
        fixed lg:relative
        z-40
        transition-transform duration-300 ease-in-out
        w-80 bg-white border-r border-gray-200 flex flex-col
      `}>
        <Sidebar 
          selectedChat={selectedChat}
          onSelectChat={handleSelectChat}
        />
      </div>

      {/* Overlay for mobile */}
      {sidebarOpen && (
        <div 
          className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-30"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Chat Area */}
      <div className="flex-1 lg:ml-0">
        <Chat selectedChat={selectedChat} />
      </div>
    </div>
  )
}

export default Home
