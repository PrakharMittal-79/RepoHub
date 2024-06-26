import React from "react";
import { useNavigate } from "react-router-dom";

const UserCard = (props) => {
    const navigate=useNavigate();
    function handleClick() {
        navigate('/user',{state:{props}});
    }
  return (
    <div className="flex bg-zinc-100 w-[28rem] ml-[2.8rem] rounded-[5px] mt-[10px] cursor-pointer" onClick={handleClick}>
      <div>
        <img
          className="rounded-full ml-[4px]"
          src={props.data.avatar_url}
          style={{ height: "4rem" }}
        />
      </div>
      <div className="ml-[12px] mt-[3px]">
        <h3>{props.data.login}</h3>
        <p>{props.data.html_url}</p>
      </div>
      <div>
      </div>
    </div>
  );
};

export default UserCard;
