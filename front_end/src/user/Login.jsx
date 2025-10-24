import React, { useState } from "react";
import axios from "axios";
import Register from "./Register";

function Login() {
  const [state, setState] = useState({ email: "", password: "" });


  const handlechange=(e)=>{
   setState({...state,[e.target.name]:e.target.value})
  }

  const handleSub = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:3000/users/login", state);
      alert("user login success")
      console.log("Login success:", res.data);
     
    } catch (err) {
      console.log(err);
      alert("user login faild try again")
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#9747FF] to-[#C927C9] text-white flex flex-col items-center justify-center relative p-4">
      <div className="w-full max-w-6xl bg-white flex flex-col lg:flex-row rounded-xl overflow-hidden shadow-lg">
        {/* Left Section */}
        <div className="lg:w-1/2 w-full bg-gradient-to-r from-[#944fef] to-[#ca33ca] p-8 lg:p-20 flex flex-col gap-4 text-white">
          <h2 className="font-bold text-4xl md:text-5xl font-Roboto">
            Welcome to Pigme
          </h2>
          <h4 className="font-light text-xl md:text-2xl">
            Make someone smile,
          </h4>
          <p className="text-[10px] tracking-[.2em] md:text-lg font-Gothic text-justify">
            Pigme is a fun and friendly chatting platform that helps you meet
            new people and build real friendships. Pigme gives you a safe space
            to connect and chat anytime.
          </p>
          <div className="w-10 h-10 md:w-60 md:h-60 backdrop-blur-xl bg-white/20 border border-white/30 rounded-full shadow-lg mt-4"></div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-1 bg-[#9747FF]"></div>

        {/* Right Section */}
        <div className="lg:w-1/2 w-full flex flex-col gap-6 p-6 lg:p-16 items-center text-black">
          <h1 className="text-3xl md:text-4xl font-sans mb-4">Login</h1>
          <form
            onSubmit={handleSub}
            className="flex flex-col gap-4 w-full max-w-md"
          >
            <input
              type="text"
              name="email"
              value={state.email}
              placeholder="Your email"
              onChange={handlechange}
              className="w-full h-14 md:h-16 rounded-full px-6 text-lg md:text-2xl font-Gothic"
            />
            <input
              type="password"
              name="password"
              value={state.password}
              onChange={handlechange}
              placeholder="Your password"
              className="w-full h-14 md:h-16 rounded-full px-6 text-lg md:text-2xl font-Gothic"
            />
            <p className="text-sm md:text-base">I don't have any account!</p>
            <button
              type="submit"
              className="bg-purple-600 text-white rounded-full py-2"
            >
              Login
            </button>
          </form>
          <p className="font-Roboto text-sm md:text-base font-extralight text-center mt-4">
            Start conversations, and make friends from all around the world!
          </p>
        </div>
      </div>

      {/* Background Circles */}
      <div className="absolute left-2 top-10 hidden lg:block md:w-36 md:h-36 backdrop-blur-xl bg-white/20 border border-white/30 rounded-full shadow-lg animate-bounce"></div>
      <div className="absolute right-2 top-1/2 transform -translate-y-1/2 w-20 h-20 md:w-60 md:h-60 backdrop-blur-xl bg-white/20 border border-white/30 rounded-full shadow-lg"></div>
    </div>
  );
}

export default Login;
