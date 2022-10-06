import {Link} from 'react-scroll'
import { useState } from "react";


export default function Footer() {
    const [mode, setMode] = useState("auto");
    return (
        <div className="">
            <footer id="footer" className="font-ATL relative z-50 bg-gray-100">
                <div className=" border-t  border-gray-200  py-16">
                     
                            <div className="w-full flex flex-row justify-center items-center">
                                <div className="w-1/2 px-6">
                                    <ul className='laptop:text-[20px] laptop:space-y-0 laptop:flex laptop:flex-row justify-center laptop:items-center laptop:space-x-6 mobile:flex flex-col items-center space-x-0 space-y-3 cursor-pointer'>
                                      
                                        <li className="">
                                        <Link to='section1' spy={true} smooth={true}>
                                                <span className=" leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">About</span>
                                            </Link>
                                        </li>
                                        <li className="">
                                        <Link to='section2' spy={true} smooth={true}>
                                                <span className="leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">Events</span>
                                            </Link>
                                        </li>
                                        <li className="">
                                        <Link to='section3' spy={true} smooth={true}>
                                                <span className="leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">Team</span>
                                            </Link>
                                        </li>
                                        <li className="">
                                        <Link to='section4' spy={true} smooth={true}>
                                                <span className="leading-none hover:text-brand dark:hover:text-brand text-gray-800 dark:text-gray-50">FAQ</span>
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                               
                            
                            <div className="w-1/2">
                          
                                <div className="px-6 flex flex-col justify-center ">
                                    <div className="flex items-center justify-center">
                                        <a target="blank" href="/">
                                            <div className="text-gray-800 dark:text-gray-50 cursor-pointer hover:text-brand dark:hover:text-brand ">
                                            <img className="w-[30px]" src='github.svg' />
                                            </div>
                                        </a>
                                        <a target="blank" href="https://twitter.com/The404DAO">
                                            <div className="pl-4">
                                            <img className="w-[30px]" src='twitter.svg' />
                                            </div>
                                        </a>
                                        <a target="blank" href="https://discord.gg/v6GUGVqtvV">
                                            <div className="pl-4">
                                              <img className="w-[30px]" src='discord.svg' />
                                            </div>
                                        </a>
                                    </div>
                                </div>
                                </div>
                            
                        </div>
                    </div>
                    <div className="py-8 flex flex-col justify-center items-center">
                   
                        <a href='/'>
                         <img className="h-[60px]" src="logo.jpeg"/>
                        </a>
                  
                    <p className="mt-6 text-xs lg:text-sm leading-none text-gray-900 dark:text-gray-50">2022 404 DAO. All Rights Reserved.</p>
                
                </div>
              
            </footer>
        </div>
    );
};

