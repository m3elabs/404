import React from "react"
import {Link} from 'react-scroll'

export default function Navbar() {





  return(
<nav className="absolute z-20 h-[7%] w-full px-6 top-10 ">

<span className="flex flex-row  flex flex-row items-center justify-between ">
<Link to='section1' spy={true} smooth={true}>

<h1 className="mobile:text-[12px] text-white rounded-full bg-black px-3 py-3 font-bold cursor-pointer hover:text-green-500 bg-opacity-80 laptop:text-[20px] laptop:px-6">
      About
  </h1>
</Link>

<Link to='section2' spy={true} smooth={true}>

<h1 className="mobile:text-[12px] text-white  rounded-full bg-black px-3 py-3 font-bold cursor-pointer hover:text-green-500 bg-opacity-80 laptop:text-[20px] laptop:px-6">
     Events
  </h1>
</Link>

<a href="/team">

<h1 className="mobile:text-[12px] text-white rounded-full bg-black px-3 py-3 font-bold cursor-pointer hover:text-green-500 bg-opacity-80 laptop:text-[20px] laptop:px-6">
    Team
  </h1>
</a>

<Link to='section3' spy={true} smooth={true}>
<h1 className="mobile:text-[12px] text-white  rounded-full bg-black px-3 py-3 font-bold cursor-pointer hover:text-green-500 bg-opacity-80 laptop:text-[20px] laptop:px-6">
         FAQs
  </h1>
</Link>
</span>

</nav>

  ) 
}