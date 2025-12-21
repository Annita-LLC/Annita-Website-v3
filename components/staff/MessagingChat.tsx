'use client'

import { useState } from 'react'
import { MessageSquare, Send, Search, Plus, Users, Paperclip, Smile } from 'lucide-react'

export default function MessagingChat() {
  const [activeChat, setActiveChat] = useState<number | null>(1)
  const [message, setMessage] = useState('')
  const [searchTerm, setSearchTerm] = useState('')

  const conversations = [
    { id: 1, name: 'Jane Smith', role: 'Manager', lastMessage: 'Thanks for the update!', time: '10:30 AM', unread: 2, online: true },
    { id: 2, name: 'John Doe', role: 'Team Lead', lastMessage: 'Can we schedule a meeting?', time: '9:15 AM', unread: 0, online: true },
    { id: 3, name: 'Sarah Johnson', role: 'HR', lastMessage: 'Please review the document', time: 'Yesterday', unread: 1, online: false },
    { id: 4, name: 'Team Channel', role: 'General', lastMessage: 'Mike: Great work everyone!', time: '11:00 AM', unread: 5, online: null },
  ]

  const messages = [
    { id: 1, sender: 'Jane Smith', text: 'Hi, can you send me the Q4 report?', time: '10:25 AM', isMe: false },
    { id: 2, sender: 'You', text: 'Sure! I\'ll send it over in a few minutes.', time: '10:26 AM', isMe: true },
    { id: 3, sender: 'Jane Smith', text: 'Thanks for the update!', time: '10:30 AM', isMe: false },
  ]

  return (
    <div className="space-y-4 sm:space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 sm:gap-0">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-gray-900">Messaging & Chat</h2>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">Communicate with your team</p>
        </div>
        <button
          onClick={() => alert('Start New Conversation\n\nIn production, this would open a new chat.')}
          className="w-full sm:w-auto px-3 sm:px-4 py-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 text-xs sm:text-sm font-medium transition-colors touch-manipulation flex items-center justify-center space-x-2"
        >
          <Plus className="w-4 h-4" />
          <span>New Chat</span>
        </button>
      </div>

      <div className="bg-white rounded-lg shadow-sm border border-gray-200 overflow-hidden">
        <div className="flex flex-col sm:flex-row h-[600px]">
          {/* Conversations Sidebar */}
          <div className="w-full sm:w-80 border-b sm:border-b-0 sm:border-r border-gray-200 flex flex-col">
            <div className="p-3 sm:p-4 border-b border-gray-200">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search conversations..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                />
              </div>
            </div>
            <div className="flex-1 overflow-y-auto">
              {conversations.map((conv) => (
                <div
                  key={conv.id}
                  onClick={() => setActiveChat(conv.id)}
                  className={`p-3 sm:p-4 border-b border-gray-100 cursor-pointer hover:bg-gray-50 transition-colors touch-manipulation ${
                    activeChat === conv.id ? 'bg-orange-50 border-l-4 border-l-orange-600' : ''
                  }`}
                >
                  <div className="flex items-start space-x-3">
                    <div className="relative">
                      <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-sm font-bold">
                        {conv.name.charAt(0)}
                      </div>
                      {conv.online && (
                        <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between mb-1">
                        <h4 className="text-sm font-semibold text-gray-900 truncate">{conv.name}</h4>
                        {conv.unread > 0 && (
                          <span className="px-1.5 py-0.5 text-xs font-medium bg-orange-600 text-white rounded-full">
                            {conv.unread}
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-gray-500 truncate">{conv.lastMessage}</p>
                      <p className="text-xs text-gray-400 mt-1">{conv.time}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Chat Area */}
          <div className="flex-1 flex flex-col">
            {activeChat ? (
              <>
                <div className="p-3 sm:p-4 border-b border-gray-200 bg-gray-50">
                  <div className="flex items-center space-x-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold">
                      {conversations.find(c => c.id === activeChat)?.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="text-sm font-semibold text-gray-900">
                        {conversations.find(c => c.id === activeChat)?.name}
                      </h4>
                      <p className="text-xs text-gray-500">
                        {conversations.find(c => c.id === activeChat)?.role}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex-1 overflow-y-auto p-4 space-y-4">
                  {messages.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex ${msg.isMe ? 'justify-end' : 'justify-start'}`}
                    >
                      <div className={`max-w-[80%] sm:max-w-[70%] rounded-lg p-3 ${
                        msg.isMe
                          ? 'bg-orange-600 text-white'
                          : 'bg-gray-100 text-gray-900'
                      }`}>
                        {!msg.isMe && (
                          <p className="text-xs font-semibold mb-1 opacity-75">{msg.sender}</p>
                        )}
                        <p className="text-sm">{msg.text}</p>
                        <p className={`text-xs mt-1 ${msg.isMe ? 'text-orange-100' : 'text-gray-500'}`}>
                          {msg.time}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="p-3 sm:p-4 border-t border-gray-200">
                  <div className="flex items-center space-x-2">
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 touch-manipulation">
                      <Paperclip className="w-5 h-5" />
                    </button>
                    <input
                      type="text"
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Type a message..."
                      className="flex-1 px-3 sm:px-4 py-2 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-transparent"
                      onKeyPress={(e) => {
                        if (e.key === 'Enter' && message.trim()) {
                          alert(`Sending message: ${message}\n\nIn production, this would send the message.`)
                          setMessage('')
                        }
                      }}
                    />
                    <button className="p-2 text-gray-400 hover:text-gray-600 rounded-lg hover:bg-gray-100 touch-manipulation">
                      <Smile className="w-5 h-5" />
                    </button>
                    <button
                      onClick={() => {
                        if (message.trim()) {
                          alert(`Sending message: ${message}\n\nIn production, this would send the message.`)
                          setMessage('')
                        }
                      }}
                      className="p-2 bg-orange-600 text-white rounded-lg hover:bg-orange-700 touch-manipulation"
                    >
                      <Send className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <MessageSquare className="w-12 h-12 text-gray-400 mx-auto mb-3" />
                  <p className="text-sm text-gray-600">Select a conversation to start messaging</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
