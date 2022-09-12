import Head from 'next/head'
import Footer from '../components/footer'
import Team from '../components/teampage'
// import Simple from '../components/navbar'
// import Image from 'next/image'

export default function team() {
  return (
    <div className=''>
      <Head>
        <title>404 DA0</title>
        <meta name="description" content="" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
    
     <Team/>
    
    <Footer/>
    </div>
  )
}
