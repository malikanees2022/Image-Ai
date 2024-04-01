import React from 'react'
import { Link } from 'react-router-dom'
import { IoHomeSharp } from "react-icons/io5";
import { FaNewspaper } from "react-icons/fa6";
import { FaHashtag } from "react-icons/fa";
import { FaUsers } from "react-icons/fa";

const HamburgerTabs = ({show}) => {
  return (
    <div>
      {show && (
        <div className=" fixed bg-[#151419] h-screen  flex text-start text-[#d7d7d7]  flex-col gap-5 pt-10 pl-8 pr-40 rounded-r-2xl font-semibold justify-start">
            <Link to={'/'}>
                Vedios
            </Link>
            <Link to={'/'}>
            <div className='flex gap-2 justify-start items-center'>
                    <IoHomeSharp/>
                    <h1>Home</h1>
                </div>
            </Link>
            <Link to={'/'}><div className='flex gap-2 justify-start items-center'>
                    <FaNewspaper/>
                    <h1>Submit Image</h1>
                </div></Link>
            <Link to={'/'}>
            <div className='flex gap-2 justify-start items-center'>
                    <FaHashtag />
                    <h1>Tags</h1>
                </div>
            </Link>
            <Link to={'/'}>
            <div className='flex gap-2 justify-start items-center'>
                    < FaUsers/>
                    <h1>Top Users</h1>
                </div>
            </Link>
            
        </div>
      )}
    </div>
  )
}

export default HamburgerTabs

