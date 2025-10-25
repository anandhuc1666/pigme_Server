import React, { useEffect, useState } from "react";
import { BsSend } from "react-icons/bs";
import girl from "../assets/girl.png";
import axios from "axios";

function Home() {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users/users")
      .then((res) => setUser(res.data.users || []))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#9747FF] to-[#C927C9] flex items-end gap-x-10 p-2">
      
      {/* LEFT USERS LIST */}
      <div className="w-[600px] min-h-screen bg-[#A442F0] rounded-lg shadow-md overflow-hidden">
        <div className="min-w-full h-[95px] bg-[#A442F0] border-b-2 border-[#C927C9] flex items-center px-4">
          <h2 className="text-white text-xl font-semibold">Users</h2>
        </div>

        <div className="w-full h-[calc(100vh-95px)] overflow-y-auto p-3 space-y-3">
          {user.length > 0 ? (
            user.map((i, index) => (
              <div
                key={index}
                className="w-full h-[100px] bg-white rounded-3xl flex items-center px-4 gap-3 shadow hover:bg-gray-100 transition"
              >
                <img src={girl} alt="user" className="w-[60px] rounded-full" />
                <p className="text-2xl font-medium text-[#6b00c9]">{i.name}</p>
              </div>
            ))
          ) : (
            <p className="text-white text-center">No users found</p>
          )}
        </div>
      </div>

      <div className="flex-1 h-[90vh] bg-white rounded-tl-[40px] shadow-lg flex flex-col">
        <div className="flex-1 p-4 overflow-y-auto">
        </div>

        <div className="w-full px-5 py-3 flex items-center gap-4 border-t">
          <input
            type="text"
            placeholder="Typing..."
            className="bg-[#A442F0] text-white placeholder-white/80 px-5 py-4 w-full rounded-3xl focus:ring-2 focus:ring-[#C927C9] outline-none"
          />
          <button className="min-w-[75px] h-[75px] rounded-full bg-gradient-to-r from-[#9747FF] to-[#C927C9] flex items-center justify-center transition hover:opacity-90">
            <BsSend size={34} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
