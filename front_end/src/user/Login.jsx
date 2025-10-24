import React from "react";

function Login() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-[#9747FF] to-[#C927C9] text-white flex items-center flex-col relative justify-center">
      <div className=" w-7xl h-[700px] bg-white">
        <div className="w-3xl h-[700px] bg-gradient-to-r from-[#944fef] to-[#ca33ca] p-[100px] text-justify flex flex-col gap-2">
          <h2 className="font-bold text-[60px] font-Roboto">
            Welcome to Pigme
          </h2>
          <h4 className="font-light text-2xl">Make someone smile,</h4>
          <p className="text-[18px] font-Gothic">
            Pigme is a fun and friendly chatting platform that helps you meet
            new people and build real friendships. Pigme gives you a safe space
            to connect and chat anytime
          </p>
          <div className="w-[250px] h-[250px] backdrop-blur-xl bg-white/20 border border-white/30 rounded-full shadow-lg mask-t-from-30% "></div>
        </div>
        <div className=" "></div>
      </div>
      <div className="absolute left-0 w-[150px] h-[150px] backdrop-blur-xl bg-white/20 border border-white/30 rounded-full shadow-lg animate-bounce"></div>
      <div className="absolute right-0 top-1.5/2 -translate-y-1/2  w-[250px] h-[250px] backdrop-blur-xl bg-white/20 border border-white/30 rounded-full shadow-lg"></div>
    </div>
  );
}

export default Login;
