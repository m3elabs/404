import Head from "next/head";
import About from "../components/about";
import Events from "../components/events";
import Faqs from "../components/faqs";
import Footer from "../components/footer";
import Navbar from "../components/navbar";
import Team from "../components/teampage";

export default function Home() {
  return (
    <div>
      <Head>
        <title>404 DAO</title>
        <meta property="og:image" content="/logo.jpeg"/>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="bg-gray-100 font-ATL">
        <Navbar />
        <div className="mobile:h-screen bg-cover bg-center bg-[url('/birdseye.jpeg')] leading-none text-[140px] laptop:text-[300px] laptop:bg-[url('/birdseye.jpeg')]">
          <span className="text-gray-800 h-full w-full bg-gradient-to-t from-blue-300 to-white bg-cover mix-blend-overlay font-bold flex flex-col justify-center items-center relative">
            <h1 className="laptop:hidden mobile:text-center">
              404
              <br />
              DAO
            </h1>
            <h1 className="mobile:hidden laptop:block text-[300px]">404 DAO</h1>

            <img className="animate-bounce absolute bottom-5" src="/down.svg" />
          </span>
        </div>

        <div id="section1">
         
            <About/>
           
        </div>
        <div id="section2" className="my-20">
          <Events />
        </div>
        <div id="section3" className="my-20">
          <Team />
        </div>


        <div id="section4" className="">
          <Faqs />
        </div>
      </main>

      <Footer />
    </div>
  );
}
