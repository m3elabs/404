import React from "react"
import {ScrollAnimation} from "./ScrollAnimation";
import {Link} from 'react-scroll'




export default function Faqs() {
  return (
<div>
      <section className="text-gray-700">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
          <ScrollAnimation
animation="fade-down-right">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-900 mb-4">
              
              Frequently Asked Questions
            </h1>

            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              The most common questions about DAOs have been included to make sure everyone is up to speed 👍 
            </p>
            </ScrollAnimation>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="w-full lg:w-1/2 px-4 py-2">
              {/* <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                 What is a DAO?
                </summary>

                <span>
                A DAO is a business that is governed by smart contracts instead of people, which allow the business to operate autonomously. 
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold bg-gray-200 rounded-md py-2 px-4">
                How is a DAO different from a normal LLC?
                </summary>

                <span>
                A normal LLC is managed by one or more human owners, called “members”. These members will make all of the decisions for the business and have the final say on all business matters. A DAO is usually managed by an algorithm, though it can also have human members. 
                </span>
              </details>
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                What is a smart contract?
                </summary>

                <span>
                A smart contract is code that runs “on top” of a blockchain that executes when particular conditions are met. They can make decisions, distribute profits, and carry out other tasks. 
                </span>
              </details>
            */}
              
              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                  How can I join 404 DAO?
                </summary>
                <span >
                  <u><a href="https://discord.gg/v6GUGVqtvV" target="blank">Reach out in our discord!</a></u>
                </span>
              </details>

              <details className="mb-4">
                <summary className="font-semibold  bg-gray-200 rounded-md py-2 px-4">
                What is Web3 ATL and how does it relate to 404 DAO?
                </summary>
                <span> 
                  Web3 ATL is a conference geared towards advancing the blockchain space in Atlanta, which directly supports 404 DAOs mission and goals. <u><a href="https://www.web3atl.io">Check out our website for more information!</a></u>
                </span>
              </details> 
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}