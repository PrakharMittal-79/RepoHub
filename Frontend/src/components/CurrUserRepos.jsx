import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ReposCard from './ReposCard';

const CurrUserRepos = ({repos_url}) => {
    const [ReposData,setreposData]=useState([]);
    const [dummyData,setDummyData]=useState([]);
    const [inp,setInp]=useState();
    const [sortBy, setSortBy] = useState('');


    const handleSort = () => {
        const sortedData = [...dummyData].sort((a, b) => {
            if (sortBy === 'stars') {
                return a.stargazers_count - b.stargazers_count;
            } else if (sortBy === 'forks') {
                return a.forks_count - b.forks_count;
            } else if (sortBy === 'open_issues') {
                return a.open_issues - b.open_issues;
            } else {
                return a.name.localeCompare(b.name);
            }
        });
        setDummyData(sortedData);
    };
    useEffect(()=>{
        async function GetData() {
            const ReposData=await axios.get(repos_url+"?per_page=100");
            setreposData(ReposData.data)
            setDummyData(ReposData.data)
        }
        GetData();
    },[])
  return (
    <div>
            <h1 className='text-center mt-[4rem] text-[3rem] mx-[10rem] bg-blue-400'>Repositories</h1>
            <div className='flex justify-between px-[10rem]'>
            <div className='text-center mt-5 text-3xl'>

            <span className='p-2 border border-black  mx-2 font-semibold rounded-md'>Search</span>
            <input className='border border-black rounded-md p-2' type="text" placeholder='Search Repository' value={inp} onChange={(e)=>{
                e.preventDefault();
                setDummyData(ReposData.filter((data)=>{
                    if(data.name.toLowerCase().includes(e.target.value.toLowerCase())){
                        return data;
                    }
                }));
                setInp(e.target.value)}}
                />
            </div>

            <div className='text-center text-xl mt-5 '>
                <select className='border-solid border-2 border-black rounded-md' value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                    <option value="name">Name</option>
                    <option value="stars">Stars</option>
                    <option value="forks">Forks</option>
                    <option value="open_issues">Open Issues</option>
                </select>
                <button onClick={handleSort} className='bg-green-700 px-2 py-1 mx-2 font-semibold rounded-md text-white'>Sort</button>
            </div>
            </div>
            
            <div className='grid grid-cols-2 justify-items-center gap-4 mt-7'>{ ReposData &&
                dummyData.map((data,idx)=>{
                    return <ReposCard key={idx} data={data}/>
                })
            }</div>
    </div>
  )
}

export default CurrUserRepos