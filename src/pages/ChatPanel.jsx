import React from "react";
import { useState } from "react"
import { SendHorizonal } from "lucide-react"

const initialMessages = [
  { id: 1, from: "admin", text: "Hey! How can I help you?" },
  { id: 2, from: "user", text: "I have a question about my order." },
  { id: 3, from: "admin", text: "Sure! Please share your order ID." },
]

const ChatPanel = () => {
  const [input, setInput] = useState("")
  const [messages, setMessages] = useState(initialMessages)

  const handleSend = () => {
    if (!input.trim()) return
    setMessages([...messages, { id: Date.now(), from: "admin", text: input }])
    setInput("")
  }

  return (
    <div className="w-full  bg-white dark:bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="p-4 border-b bg-gray-100 dark:bg-gray-800 dark:border-gray-700 text-lg font-semibold">
        📨 Support Chat
      </div>

      {/* Chat Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-3">
        {messages.map((msg) => (
          <div
            key={msg.id}
            className={`flex ${
              msg.from === "admin" ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 py-2 rounded-lg max-w-[80%] ${
                msg.from === "admin"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-200 dark:bg-gray-700 text-black dark:text-white"
              }`}
            >
              {msg.text}
            </div>
          </div>
        ))}
      </div>

      {/* Input Box */}
      <div className="p-4 border-t bg-gray-100 dark:bg-gray-800 dark:border-gray-700 flex items-center gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="w-full px-4 py-2 rounded border border-gray-300 dark:bg-gray-700 dark:text-white"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && handleSend()}
        />
        <button
          onClick={handleSend}
          className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          <SendHorizonal size={18} />
        </button>
      </div>
    </div>
  )
}

export default ChatPanel
