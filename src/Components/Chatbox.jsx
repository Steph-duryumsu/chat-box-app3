import React, { useState } from "react"
import { Link } from "react-router-dom";

const Chatbox = () => {
  const [messages, setMessages]  = useState([]);
  const [inputMessage, setInputMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const sendMessage = async (userMessage) => {
    const API_KEY = "AIzaSyBKcvpEYSZOmBl7OoXrmqPUpGX9masvdwI";
    const API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash:generateContent';

    try {
      const response = await fetch (`${API_URL}?key=${API_KEY}`, {
        method: 'POST',
        headers: {
        'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          contents: [{
            parts: [{
              text: userMessage
            }]
          }],     
        })
      })

        console.log("Response status:", response.status);
        console.log("Full response:", response);
    
      //   if (!response.ok) {
      //     console.log("Response not OK:", response.status, response.statusText);
      //     throw new Error(`HTTP error! status: ${response.status}`);
      // }

       if (!response.ok) {
      const errorText = await response.text();
      console.log("Error response body:", errorText);
      throw new Error(`HTTP error! status: ${response.status}`);
    }

      const data = await response.json();
      console.log("API Response:", data); 

      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error('Detailed error:', error);
      return 'Sorry, I encountered an error. please try again.';
    }
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!inputMessage.trim()) return;

    const userMessage = inputMessage.trim();
    setInputMessage("");
    setIsLoading(true);

    setMessages(prev => [...prev, { text: userMessage, sender: 'user'}]);

    const aiResponse = await sendMessage(userMessage);

    setMessages (prev => [...prev, {text: aiResponse, sender: 'ai'}]);
    setIsLoading(false);
   
  };

  return (
     <div className="flex flex-col h-screen bg-gray-100">

     <div className=" text-black p-4 flex justify-between items-center">
      <h1 className="text-xl font-bold">AI Chat</h1>
      <Link to="/" className="bg-white px-5 py-2 rounded hover:bg-black hover:text-white transition">
        Logout
      </Link>
    </div>


      {/* Messages Area */}
    <div className="flex-1 overflow-y-auto p-4 space-y-4">
      {messages.map((message, index) => (

        <div
          key={index}
          className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-xs  px-5 py-2 rounded none border-none
            ${
              message.sender === 'user'
                ? 'bg-black text-white'
                : 'bg-white text-gray-800 border'
            }`}
          >
            {message.text}
          </div>
        </div>
      ))}
      
      {/* Loading indicator */}
      {isLoading && (
        <div className="flex justify-start">
          <div className="bg-gray-200 px-4 py-2 rounded-lg">
            AI is typing...
          </div>
        </div>
      )}
    </div>

    {/* Input Form */}
    <form onSubmit={handleSubmit} className="p-10 bg-white">
      <div className="flex space-x-4">
        <input
          type="text"
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 border rounded-lg px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          disabled={isLoading}
        />

        <button
          type="submit"
          disabled={isLoading}
          className="bg-black text-white px-6 py-2 rounded-lg  hover:bg-gray-400"
        >
          Send
        </button>
      </div>
    </form>
  </div>
);
}

export default Chatbox;