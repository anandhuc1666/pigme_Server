import React from "react";
import Register from "./Register";

function Login() {
  return (
    <div className="w-full h-screen bg-gradient-to-r from-[#9747FF] to-[#C927C9] text-white flex items-center flex-col relative justify-center">
      <div className=" w-7xl h-[700px] bg-white flex">
        <div className="w-3xl h-[700px] bg-gradient-to-r from-[#944fef] to-[#ca33ca] p-[100px] text-justify flex flex-col gap-2 box-border">
          <h2 className="font-bold text-[50px] font-Roboto">
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
        <div className="w-[10px] h-[700px] bg-[#9747FF]"></div>
        <div className=" text-[#000] flex flex-col gap-13 p-4 box-border pt-36 items-center">
          <h1 className="text-4xl font-sans">Login</h1>

          <form action="" className="p-2 flex flex-col gap-5">
            <input
              type="text"
              name="email"
              placeholder="Your email"
              className="w-[500px] h-16 rounded-full pl-15 font-Gothic size-12  box-border text-2xl"
            />
            <input
              type="password"
              name="password"
              placeholder="Your password"
              className="w-[500px] h-16 rounded-full pl-15 font-Gothic size-12 text-2xl box-border"
            />
            <p>I don't have any account! </p>
          </form>
          <p className="font-Roboto font-extralight">
            start conversations, and make friends from all around the world!
          </p>
        </div>
      </div>
      <div className="absolute left-0 w-[150px] h-[150px] backdrop-blur-xl bg-white/20 border border-white/30 rounded-full shadow-lg animate-bounce"></div>
      <div className="absolute right-0 top-1.5/2 -translate-y-1/2  w-[250px] h-[250px] backdrop-blur-xl bg-white/20 border border-white/30 rounded-full shadow-lg"></div>
    </div>
  );
}

export default Login;
