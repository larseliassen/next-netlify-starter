import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Navbar } from '@components/Navbar'

export default function Home() {

  return (
    
       
    <div className="container">
      {
        [...Array(50)].map((_, i) => (
          <div className="snowflake"/>
          ))
      }
      <Head>
        <title>Amundsen Vedkompani</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Amundsen Vedkompani" />        
        <p className="description">
          Knusk tørr ved!
        </p>
        <Footer></Footer>
      </main>
    </div>
  )
}
