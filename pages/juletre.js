import Head from 'next/head'
import Footer from '@components/Footer'

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
        <p className="description">
          Hurra!
        </p>
        <Footer></Footer>
      </main>
    </div>
  )
}