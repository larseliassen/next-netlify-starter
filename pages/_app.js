import Footer from '@components/Footer'
import SideBar from "../components/Sidebar";
import React from "react";
import { useRouter } from 'next/router'

import '@styles/globals.css'
import '@styles/snowfall.css'

function Application({ Component, pageProps }) {

  const router = useRouter()

  return (
    
    <div id="App" className={router.pathname.substring(1)}>
    <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} width={"100%"} />
    {
        [...Array(50)].map((_, i) => (
          <div className="snowflake"/>
          ))
      }
  <Component {...pageProps} />
  <Footer></Footer>
  </div>
  )
}

export default Application
