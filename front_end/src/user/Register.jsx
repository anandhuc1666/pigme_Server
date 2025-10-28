import axios from "axios";
import React, { useState } from "react";

function Register() {
  const [state, setState] = useState({
    email: "",
    password: "",
    name: "",
    number: "",
  });

  const getFormData = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSend = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_SERVER_HOST}/users/register`,
        state,
        { withCredentials: true }
      );

      console.log("Register success:", res.data);
      alert("Registration successful!");
      setState({ email: "", password: "", name: "", number: "" });
    } catch (error) {
      console.log("user alredy exsisted", error);
      alert("user alredy exsisted");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#9747FF] to-[#C927C9] text-white flex flex-col items-center justify-center relative p-4">
      <div className="w-full max-w-6xl bg-white flex flex-col lg:flex-row rounded-xl overflow-hidden shadow-lg">
        {/* Left Section */}
        <div className="lg:w-1/2 w-full bg-gradient-to-r from-[#944fef] to-[#ca33ca] p-8 lg:p-20 flex flex-col gap-4 text-white">
          <h2 className="font-bold text-4xl md:text-5xl font-Roboto">
            Join Pigme Today
          </h2>
          <h4 className="font-light text-xl md:text-2xl">
            Start making friends,
          </h4>
          <p className="text-base md:text-lg font-Gothic">
            Create your Pigme account and start connecting with people around
            the world. Chat, share, and build real friendships in a safe and fun
            environment.
          </p>
          <div className="w-40 h-40 hidden lg:block  md:w-60 md:h-60 backdrop-blur-xl bg-white/20 border border-white/30 rounded-full shadow-lg mt-4"></div>
        </div>

        {/* Divider */}
        <div className="hidden lg:block w-1 bg-[#9747FF]"></div>

        {/* Right Section */}
        <div className="lg:w-1/2 w-full flex flex-col gap-6 p-6 lg:p-16 items-center text-black">
          <h1 className="text-3xl md:text-4xl font-sans mb-4">Register</h1>
          <form className="flex flex-col gap-4 w-full max-w-md">
            <input
              type="text"
              name="name"
              value={state.name}
              placeholder="Your Name"
              onChange={getFormData}
              className="w-full h-14 md:h-16 rounded-full px-6 text-lg md:text-1xl font-Gothic border-b-2"
            />
            <input
              type="email"
              name="email"
              value={state.email}
              placeholder="Your Email"
              onChange={getFormData}
              className="w-full h-14 md:h-16 rounded-full px-6 text-lg md:text-1xl font-Gothic border-b-2"
            />
            <input
              type="password"
              name="password"
              value={state.password}
              placeholder="Password"
              onChange={getFormData}
              className="w-full h-14 md:h-16 rounded-full px-6 text-lg md:text-1xl font-Gothic border-b-2"
            />
            <input
              type="number"
              name="number"
              value={state.number}
              placeholder="Your number"
              onChange={getFormData}
              className="w-full h-14 md:h-16 rounded-full px-6 text-lg md:text-1xl font-Gothic border-b-2"
            />
            <button
              type="submit"
              onClick={handleSend}
              className="w-full h-14 md:h-16 bg-[#9747FF] hover:bg-[#ca33ca] text-white rounded-full text-lg md:text-2xl font-bold transition-colors"
            >
              Register
            </button>
          </form>
          <p className="font-Roboto text-sm md:text-base font-extralight text-center mt-4">
            Already have an account?{" "}
            <span className="text-[#9747FF] font-bold cursor-pointer">
              Login
            </span>
          </p>
        </div>
      </div>

      {/* Background Circles */}
      <div className="absolute hidden lg:block  left-2 top-10 w-24 h-24 md:w-36 md:h-36 backdrop-blur-xl bg-white/20 border border-white/30 rounded-full shadow-lg animate-bounce"></div>
      <div className="absolute hidden lg:block  right-2 top-1/2 transform -translate-y-1/2 w-40 h-40 md:w-60 md:h-60 backdrop-blur-xl bg-white/20 border border-white/30 rounded-full shadow-lg"></div>
    </div>
  );
}

export default Register;
