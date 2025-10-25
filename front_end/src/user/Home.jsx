import React from "react";
import { BsSend } from "react-icons/bs";
import girl from "../assets/girl.png";

function Home() {
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#9747FF] to-[#C927C9] flex items-end gap-x-10">
      <div className="w-[600px] min-h-screen bg-gradient-to-r from-[#9747FF] to-[#C927C9]">
        <div className="min-w-full min-h-[95px] bg-[#A442F0] border-b-2 border-[#C927C9]"></div>
        <div className="w-full max-h-screen flex flex-col gap-1.5 box-border">
          <div className="w-full overflow-y-auto p-3 flex flex-col gap-2 ">
            <div className="w-full h-[100px] bg-white rounded-3xl flex items-center px-3 gap-3  ">
              <img src={girl} alt="" className="w-[60px]" />
              <p className="text-2xl">name</p>
            </div>
            <div className="w-full h-[100px] bg-white rounded-3xl"></div>
            <div className="w-full h-[100px] bg-white rounded-3xl"></div>
            <div className="w-full h-[100px] bg-white rounded-3xl"></div>
            <div className="w-full h-[100px] bg-white rounded-3xl"></div>
          </div>
        </div>
      </div>
      <div className="w-full h-[90vh] bg-white rounded-tl-4xl">
        <div className="w-full h-[80vh]"></div>
        <div className="w-full h-auto px-5 py-2.5 flex  gap-5">
          <input
            type="text"
            placeholder="Typing..."
            className="bg-[#A442F0] border-b-2 border-[#C927C9] px-10 w-full box-border rounded-3xl border-none"
          />
          <div className="w-20 h-[75px] rounded-full bg-gradient-to-r from-[#9747FF] to-[#C927C9] flex items-center justify-center">
            <BsSend size={40} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
