import '@styles/globals.css'
import '@styles/snowfall.css'

function Application({ Component, pageProps }) {
  return (
    <div>
    {
        [...Array(50)].map((_, i) => (
          <div className="snowflake"/>
          ))
      }
  <Component {...pageProps} />
  </div>
  )
}

export default Application
