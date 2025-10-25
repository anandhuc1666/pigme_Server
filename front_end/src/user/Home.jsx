import React, { useEffect, useState } from "react";
import { BsSend } from "react-icons/bs";
import girl from "../assets/girl.png";
import axios from "axios";
import boy from "../assets/boy.png";

function Home() {
  const [user, setUser] = useState([]);
  const [msg, setMsg] = useState([]);
  const [userMSG, setUserMSG] = useState({ msg: "" });
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/users")
      .then((res) => setUser(res.data.users || []))

      .catch((err) => console.log(err));
  }, []);
  const handletext = (e) => {
    setUserMSG({ ...userMSG, [e.target.name]: e.target.value });
  };

  const handleSend = async (e) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("token");
      if (!token) return alert("User not logged in");

      const res = await axios.post(
        "http://localhost:3000/user/newMsg",
        userMSG,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
          withCredentials: true,
        }
      );

      console.log(res.data);
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
    .get("http://localhost:3000/user/msgs", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    })
    .then((res) => setMsg(res.data.msgs || []))
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
                <img
                  src={i.gender === "female" ? girl : boy}
                  alt="user"
                  className="w-[60px] rounded-full"
                />
                <p className="text-2xl font-medium text-[#6b00c9]">{i.name}</p>
              </div>
            ))
          ) : (
            <p className="text-white text-center">No users found</p>
          )}
        </div>
      </div>

      <div className="flex-1 h-[90vh] bg-white rounded-tl-[40px] shadow-lg flex flex-col ">
        <div className="h-[100vh] flex justify-between box-border">
          {/* left side non user side resive the user mesg */}
          <div className=" w-[600px] h-[750px] bg-amber-200 flex  items-start flex-col-reverse gap-2.5 box-border py-10 pl-10 px-10">
            <div className="w-fit h-auto p-3 text-1xl bg-gradient-to-r from-[#9747FF] to-[#C927C9] text-[white] rounded-tl-2xl rounded-tr-2xl rounded-br-2xl">
              hello man sdcv
            </div>
          </div>
          {/* sending area on there login in user msg on right side  */}
          <div className="w-[600px] h-[750px] flex flex-col-reverse items-end gap-2.5  box-border px-10 py-10">
            {msg.map((i, k) => (
              <div className="w-fit h-auto p-3 text-1xl bg-gradient-to-r from-[#9747FF] to-[#C927C9] text-[white] rounded-tl-2xl rounded-tr-2xl rounded-bl-2xl" key={k}>
               {i.msg}
              </div>
            ))}
          </div>
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
            className="min-w-[75px] h-[75px] rounded-full bg-gradient-to-t from-[#9747FF] to-[#C927C9] flex items-center justify-center transition hover:opacity-90"
          >
            <BsSend size={34} className="text-white" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;
