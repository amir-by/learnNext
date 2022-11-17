import '../styles/globals.css'
import Layouts from "../layouts/layouts";

function MyApp({ Component, pageProps }) {
  return(
        <Layouts>
           <Component {...pageProps} />
        </Layouts>
    )
    
}

export default MyApp
