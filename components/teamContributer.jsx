import React from "react";


export default function Contributers (info) {
    return (
                <div className="container mx-auto">
                    <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                        <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                            <div className="rounded overflow-hidden shadow-md bg-white">
                                <div className="absolute -mt-20 w-full flex justify-center">
                                    <div className="h-32 w-32">
                                        <img src={info.contributer.image?.url} alt className="rounded-full object-cover h-full w-full shadow-md" />
                                    </div>
                                </div>
                                <div className="px-6 mt-16">
                                    <div className="font-bold text-3xl text-center pb-1">{info.contributer?.name}</div>
                                    <p className="text-gray-800 text-sm text-center">{info.contributer?.title}</p>
                                    <p className="text-center text-gray-600 text-base pt-3 font-normal">{info.contributer?.bio}</p>
                                    <div className="w-full flex justify-center pt-5 pb-5">
                                     
                                    <a href="/" className="mx-5">
                                            <div>
                                            <img src="/linkedin.svg"/>
                                            </div>
                                        </a>
                                        
                                        {info.contributer?.twitter === null ? ("") : (
                                       
                                        <a href="/" className="mx-5">
                                            <div>
                                              <img src="/twitter.svg" />
                                            </div>
                                        </a>
                                        )
                                      
                                        }
                                        
                                        {info.contributer?.github === null ? ("") : (
                                        <a href="/" className="mx-5">
                                            <div>
                                            <img src="/github.svg" />
                                            </div>
                                        </a>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
       
    );
}

