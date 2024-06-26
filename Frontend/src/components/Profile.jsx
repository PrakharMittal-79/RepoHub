import React from "react";
import { useLocation } from "react-router-dom";
import CurrUserRepos from "./CurrUserRepos";

const Profile = () => {
  const location = useLocation();
  const {
    avatar_url,
    created_at,
    followers,
    following,
    login,
    public_repos,
    name,
    repos_url,
  } = location.state.props.data;

  return (
    <div className=" mx-auto">
      <h2 className="text-[3rem] text-center bg-blue-400 mx-[10rem] mt-8">GITHUB PROFILE</h2>
      <div className="flex justify-center items-center mt-[3rem]">
        <div>
          <img
            src={avatar_url}
            className="h-64 w-64 rounded-full"
            alt="User Avatar"
          />
          <p className="text-[1.9rem] text-center font-semibold mt-4">{login}</p>
        </div>
        <div className="ml-8 mt-[-4rem]" >
          <h2 className="text-[3rem] font-semibold">{name}</h2>
          <p> <strong>Followers: </strong>{followers}</p>
          <p> <strong>Following: </strong>{following}</p>
          <p><strong>Public Repositories: </strong>{public_repos}</p>
          <p><strong>Member since: </strong>{new Date(created_at).toLocaleDateString()}</p>
        </div>
      </div>
      <div className="mt-8">
        <CurrUserRepos repos_url={repos_url} />
      </div>
    </div>
  );
};

export default Profile;
