import { GraphQLClient } from 'graphql-request';
import {ScrollAnimation} from './ScrollAnimation/index'
import { useState, useEffect } from 'react';


export default function Events() {


  const getContent = async () => {

  const hygraph = new GraphQLClient(
    'https://api-us-east-1.hygraph.com/v2/cl86k20g8006201ta81uj0r2z/master'
  );
  
    const { liveEvents } = await hygraph.request(
      `
     {
        liveEvents {
          eventType
          eventDetails
          eventDateTime
          eventName
        }
      }
    `
    );

    console.log(liveEvents)
setContent(liveEvents[0])

  }


const [content, setContent] = useState();



useEffect(() => {
  getContent();
}, []);



    return (

     

<div className="text-[black] body-font flex flex-col justify-center items-center">
  <h1 className="text-[20px] laptop:text-[50px] text-center">Get involved with our upcoming events</h1>
  <div className="mobile:container px-0 py-0 laptop:container px-5 py-6 mx-auto">
    <div className="mobile:flex flex-col px-0 py-0 laptop:flex laptop:flex-row laptop:px-5 laptop:py-24 mx-auto">
      <div className="py-8 laptop:w-1/3">
      <ScrollAnimation
animation="fade-down">
        <div className="h-full flex items-start">
    
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">18</span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-green-500 mb-1">{content?.eventType}</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">404 Hackathon</h1>
            <p className="leading-relaxed mb-5">Come join us as we host our first hackathon with over $10,000 in prize money! This event is sponsored by Chainlink and Binance</p>
            <a className="inline-flex items-center">
              <img alt="blog" src="https://dummyimage.com/103x103" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-gray-900">Alper Kamu</span>
              </span>
            </a>
          </div>
        </div>
        </ScrollAnimation>
      </div>
  
      <div className="py-8  laptop:w-1/3">
      <ScrollAnimation
animation="fade-down">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">18</span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-green-500 mb-1">MEETUP</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">Shooting Stars</h1>
            <p className="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <a className="inline-flex items-center">
              <img alt="blog" src="https://dummyimage.com/102x102" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-gray-900">Holden Caulfield</span>
              </span>
            </a>
          </div>
        </div>
        </ScrollAnimation>
      </div>
      <div className="py-8 laptop:w-1/3">
          <ScrollAnimation
animation="fade-down">
        <div className="h-full flex items-start">
          <div className="w-12 flex-shrink-0 flex flex-col text-center leading-none">
            <span className="text-gray-500 pb-2 mb-2 border-b-2 border-gray-200">Jul</span>
            <span className="font-medium text-lg text-gray-800 title-font leading-none">18</span>
          </div>
          <div className="flex-grow pl-6">
            <h2 className="tracking-widest text-xs title-font font-medium text-green-500 mb-1">DEMO</h2>
            <h1 className="title-font text-xl font-medium text-gray-900 mb-3">Neptune</h1>
            <p className="leading-relaxed mb-5">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
            <a className="inline-flex items-center">
              <img alt="blog" src="https://dummyimage.com/101x101" className="w-8 h-8 rounded-full flex-shrink-0 object-cover object-center"/>
              <span className="flex-grow flex flex-col pl-3">
                <span className="title-font font-medium text-gray-900">Henry Letham</span>
              </span>
            </a>
          </div>
        </div>
        </ScrollAnimation>
      </div>
    </div>
  </div>
</div>

)
}