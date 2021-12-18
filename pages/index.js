import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Amundsen Vedkompani</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Amundsen Vedkompani" />        
        <p className="description">
          Knusk tørr ved!
        </p>
        <p className="log">🪵</p>
      </main>
    </div>
  )
}
