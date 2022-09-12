import React from "react";
import {ScrollAnimation} from "./ScrollAnimation";


export default function About() {
    return (

<div className='p-8 laptop:h-screen flex flex-col justify-center'>
<ScrollAnimation
animation="fade-right">
<h1 className="text-3xl font-bold text-center">What is 404 DAO?</h1>
<p className="mt-4 text-center">
404 DAO is a registered 5013(c) non-profit organization helping fund web3 projects that originate in the metro Atlanta area.
</p>

</ScrollAnimation>
<div className='mobile:flex flex-col justify-center mt-10 mobile:space-x-0 mobile:space-y-3 laptop:flex laptop:flex-row laptop:space-x-3 laptop:space-y-0 laptop:justify-between items-center'>

<div className="mobile:w-full flex flex-col items-center p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow hover:border-green-500 laptop:h-full w-1/3 flex flex-col items-center p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow hover:border-green-500">
<ScrollAnimation
animation="fade-right">
<img className='h-[3rem]' src="education.svg"/>

<h3 className="mt-4 text-xl font-bold text-[black]">Education</h3>

<p className="mt-3 text-sm text-[black]">
One of our pillars as a DAO is to empower the next generation of technologists to understand the ever expanding world of blockchain technology.<br></br><br></br>
404 DAO was born from Georgia Tech's blockchain club and seeks to join forces with other university students looking for a blockchain community.
</p>
</ScrollAnimation>
</div>



<div className="mobile:w-full flex flex-col items-center p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow hover:border-green-500 laptop:h-full w-1/3 flex flex-col items-center p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow hover:border-green-500">
<ScrollAnimation
animation="fade-right">
<img className='h-[3rem]' src="group.svg"/>

<h3 className="mt-4 text-xl font-bold text-[black]">Collaboration</h3>

<p className="mt-3 text-sm text-[black]">
New technology breeds an obvious learning curve for those looking to upgrade their skills.<br></br><br></br>
404 DAO's community of developers take pride in bouncing ideas between each other with a goal of solving any issues newer developers might run into.
</p>
</ScrollAnimation>
</div>




<div className="mobile:w-full flex flex-col items-center p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow hover:border-green-500 laptop:h-full w-1/3 flex flex-col items-center p-8 transition border border-gray-800 shadow-xl rounded-xl hover:shadow hover:border-green-500">
<ScrollAnimation
animation="fade-right">
<img className='h-[3rem]' src="layers.svg"/>

<h3 className="mt-4 text-xl font-bold text-[black]">Incubation</h3>

<p className="mt-3 text-sm text-[black]">
Looking for the right team to help build your brillant idea?<br></br><br></br>
Reach out in our Discord or show up to our local meetups to expose our community to your idea.
Odds are someone is passionate about the problem you are solving and will want to join forces.
</p>
</ScrollAnimation>
</div>


</div>
</div>

    )
}