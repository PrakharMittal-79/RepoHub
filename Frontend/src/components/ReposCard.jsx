import React from "react";
import { Link, useNavigate } from "react-router-dom";


const ReposCard = (props) => {
  const navigate=useNavigate();
  const {
    name,
    stargazers_count,
    visibility,
    updated_at,
    language,
    forks,
    svn_url,
    open_issues,
  } = props.data;

  function handleClick(){
    navigate('/commit_history',{state:{props}})
  }
  function handleClickRepo(){
    window.open(svn_url);
  }

  const givenDate = new Date(updated_at);
  const currentDate = new Date();
  const difference = currentDate - givenDate;
  const daysDifference = Math.ceil(difference / (1000 * 60 * 60 * 24 * 24));

  return (
    <div className="border-b-2 border-black w-[33rem] ">
      <div className="flex gap-4 p-2 justify-between">
        <div className="flex gap-2">
          <h1
            onClick={handleClick}
            className="font-bold text-xl text-blue-500 hover:underline hover:cursor-pointer"
          >
            {name}
          </h1>
          <span className="border border-black rounded-md text-xl px-1">
            {visibility}
          </span>
        </div>

        <p className="text-[1.1rem] "> Forks: {forks}</p>
      </div>
      <div className="flex gap-4 p-2 text-[1.1rem] font-semibold">
        <p>⭕{language}</p>
        <p>⭐{stargazers_count}</p>
        <p>Updated : {daysDifference} days ago</p>
        <p>Open Issues : {open_issues}</p>
      </div>
      <button className="bg-green-700 text-white p-2 m-2 rounded-md font-bold" onClick={handleClickRepo}>View Full Repo</button>
    </div>
  );
};

export default ReposCard;
