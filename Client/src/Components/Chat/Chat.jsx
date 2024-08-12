import React from "react";
import { useState } from "react";
import { FiSend } from "react-icons/fi";

const Chat = () => {
  const [message, setMessage] = useState("");
  return (
    <div className="w-screen h-screen overflow-y-auto flex flex-col justify-between">
      <div className="flex h-24 justify-center align-middle">
        <h1 className="flex items-end p-20 text-slate-900">Chat</h1>
      </div>
      <div className="flex-1"></div>
      <div className="flex justify-center items-center p-16">
        <textarea
          className="w-3/4 h-20 p-4 border border-gray-400 rounded-lg "
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        ></textarea>
        <button className="h-16 w-16 rounded-full bg-orange-400 justify-center items-center">
          <FiSend className="" />
        </button>
      </div>
    </div>
  );
};
export default Chat;
