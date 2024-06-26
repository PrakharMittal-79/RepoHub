import React from 'react'
import { Link } from 'react-router-dom'
import image from '../img/image.jpg'

const Home = () => {
  return (
    <div>
        <div className="home" style={{backgroundImage:`url(${image})`, backgroundSize:"cover" ,height:"56rem"}} >
            <div className='flex' >
                <h3 className='text-white text-[5.4rem] ml-[1rem] pt-[8rem] opacity-75'>Explore github <br /> galaxy!! </h3>
                {/* <h5 className='text-white text-[3rem] pl-[2rem] pt-[14rem] opacity-45 text-center '>Search for users <br />and discover the stars  of <br />coding universe</h5> */}
            </div>
            <div className='flex items-center pt-[4rem] text-[2.6rem] pl-[2rem]'>
                <Link to={'/dashboard'} > <button className='bg-zinc-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-[10px]'>Get Started</button></Link>
            </div>
        </div>
    </div>
  )
}

export default Home