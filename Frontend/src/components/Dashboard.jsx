import React, { createContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import image from "../img/dashboard_bg.jpg";
import axios from "axios";
import Profile from "./Profile";
import UserCard from "./UserCard";

const user = createContext();

const Dashboard = () => {
  const [val, setval] = useState("");
  let [res, setRes] = useState();
  const navigate = useNavigate();
  async function handleClick(e) {
    e.preventDefault();
    if (val === "") {
      alert("Please enter a valid name");
      return;
    } else {
      res = await axios.get(`https://api.github.com/users/${val}`);
      setRes(res);
    }
  }
  return (
    <div>
      <div
        className=" h-screen"
        style={{ backgroundImage: `url(${image})` ,backgroundSize:"cover" }}
      >
        <div className=" text-left">
          <h3 className="text-white text-[6rem] pl-[2rem] pr-[2rem] pt-[15rem]">
            Uncover hidden gems!
          </h3>
        </div>
        <div className="text-left">
          <h5 className="text-white text-[2rem] pl-[2rem] mt-[9rem] ">
            Use our search feature <br />
            to navigate through the vast realm of <br />
            Github Users
          </h5>
        </div>
        <div>
          <input
            className="text-[1.7rem] pl-[10px] mt-[5rem] w-[28rem]  ml-[2.8rem] rounded-[3px]"
            onChange={(e) => {
              setval(e.target.value);
            }}
            value={val}
            type="text"
            placeholder="Enter Name"
          />
          <button
            className="bg-blue-600 text-[1.5rem] ml-[5px] p-[3px] text-white"
            onClick={handleClick}
            type="submit"
          >
            Search
          </button>
          {res && (
          <UserCard data={res.data} /> 
        )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
export { user };
