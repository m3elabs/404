import React from "react";
import {ScrollAnimation} from "./ScrollAnimation";
import { GraphQLClient } from 'graphql-request';
import { useState, useEffect } from 'react';
import Contributers from "./teamContributer";


export default function Team() {



  const getContent = async () => {

    const hygraph = new GraphQLClient(
      'https://api-us-east-1.hygraph.com/v2/cl86k20g8006201ta81uj0r2z/master'
    );
    
      const { teamInfos } = await hygraph.request(
        `
        {
          teamInfos {
            image {
              url
            }
            bio
            name
            linkedIn
            title
            twitter
            github
          }
        }        
      `
      );
  
     
  setContent(teamInfos)
  
    }
  
  
  const [content, setContent] = useState();
  const [Member, setMember] = useState();

  
  useEffect(() => {
    getContent();
  }, []);
  
    return (
        <div>
            <div className="container flex justify-center mx-auto">
                <div className="mobile:flex flex-col justify-between w-screen items-center  laptop:flex flex-row justify-between w-screen items-center py-4">
                  <h1 className="text-4xl text-center text-gray-800 font-extrabold pb-6 w-1/3 mobile:text-[20px] w-screen">Meet our Core Contributers</h1>
                  <span className="w-1/3"></span>
                </div>
            </div>


            <div className="w-full px-10 pt-10 pb-10">
                <div className="container mx-auto">
                    <div className="lg:flex md:flex sm:flex items-center xl:justify-between flex-wrap md:justify-around sm:justify-around lg:justify-around">
                        <div className="xl:w-1/3 sm:w-3/4 md:w-2/5 relative mt-16 mb-32 sm:mb-24 xl:max-w-sm lg:w-2/5">
                        {content?.map((el) => (
                          
							<Contributers contributer={el} />
            
						))}
                                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

