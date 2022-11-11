import '../styles/globals.css'
import Navbar from '../components/Navbar'
import {AnimatePresence} from 'framer-motion'

function MyApp({ Component, pageProps , router}) {
  
  return( 
     <div className='py-10 px-12 font-bold'>
      <Navbar/>
       <AnimatePresence initial={false} mode={"wait"}>
      <Component key={router.pathname} {...pageProps} />
      </AnimatePresence>
     </div>
  )
}

export default MyApp
