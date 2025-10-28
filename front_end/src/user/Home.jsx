import React, { useEffect, useState } from "react";
import { BsSend } from "react-icons/bs";
// import girl from "../assets/girl.png";
import axios from "axios";
// import boy from "../assets/boy.png";
import logo from "../assets/pigme_logo.png";
import Login from "./Login";

function Home() {
  const [msg, setMsg] = useState([]);
  const [nonUser, setNoneUser] = useState([]);
  const [userMSG, setUserMSG] = useState({ msg: "" });
  const myMsg = [...msg];
  const yourMsg = [...nonUser].reverse();
 const server = import.meta.env.VITE_SERVER_HOST
  const handletext = (e) => {
    setUserMSG({ ...userMSG, [e.target.name]: e.target.value });
  };
  const handleSend = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) return alert("User not logged in");
      <Login />;
      const res = await axios.post(
        `${server}/user/newMsg`,
        userMSG,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      setMsg((prev) => [...prev, res.data.newmsg]);
      setUserMSG({ msg: "" });
    } catch (error) {
      console.log("Error:", error);
      setUserMSG({ msg: "" });
    }
  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) return console.log("No token found");

    axios
      .get(`${server}/user/msgs`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      })
      .then((res) => setMsg(res.data.data || []))
      .catch((err) => console.log(err));

    axios
      .get(`${server}/user/nonusermsg`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        withCredentials: true,
      })
      .then((res) => setNoneUser(res.data.data || []))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-[#9747FF] to-[#C927C9] flex flex-col box-border gap-x-10 px-2.5">
      <img
        src={logo}
        alt=""
        className="w-[100px] fill-indigo-500 drop-shadow-lg drop-shadow-indigo-500/50 "
      />
      <div className="flex-1 h-[90vh] bg-white overflow-y-auto  rounded-tl-[40px] rounded-tr shadow-lg flex flex-col ">
        <div className="w-full h-[80vh] p-10 overflow-y-auto flex flex-col justify-end  gap-1">
          {yourMsg?.map((i, k) => {
            const tym = new Date(i.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });
            return (
              <div className="flex w-full h-auto mt-5 flex-col ">
                <div
                  className="w-fit h-auto px-3 py-2 bg-gradient-to-r from-[#9747FF] to-[#C927C9]  rounded-tl-[10px] rounded-tr-[10px] rounded-br-[10px] text-white"
                  key={k}
                >
                  {i.msg}
                </div>
                <li className="list-none text-[10px]">{tym}</li>
              </div>
            );
          })}
          {myMsg?.map((i, k) => {
            const tym = new Date(i.createdAt).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            });
            return (
              <div className="flex w-full h-auto mt-5 items-end flex-col">
                <div
                  className="w-fit h-auto px-3 py-2 bg-gradient-to-r from-[#9747FF] to-[#C927C9] text-white rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[10px]"
                  key={k}
                >
                  {i.msg}
                </div>
                <li className="list-none text-[10px]">{tym}</li>
              </div>
            );
          })}
        </div>
        <div className="w-full px-5 py-3 flex items-center gap-4 border-t">
          <input
            type="text"
            placeholder="Typing..."
            onChange={handletext}
            name="msg"
            value={userMSG.msg}
            className="bg-[#A442F0] text-white placeholder-white/80 px-5 py-4 w-full rounded-3xl focus:ring-2 focus:ring-[#C927C9] outline-none"
          />
          <button
            onClick={handleSend}
            className="min-w-[65px] h-[65px] rounded-full bg-gradient-to-t from-[#9747FF] to-[#C927C9] flex items-center justify-center transition hover:opacity-90"
          >
            <BsSend size={34} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
