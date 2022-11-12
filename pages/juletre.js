import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'
import { Navbar } from '@components/Navbar'

export default function Juletre() {

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
        <Header title="Juletre" />        
        <p className="description">
          Hurra!
        </p>
        <Footer></Footer>
      </main>
    </div>
  )
}