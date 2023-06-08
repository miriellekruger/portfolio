import '../styles/global.css'
import {Noto_Sans} from "next/font/google"

const noto_sans = Noto_Sans({
  weight: '400',
  subsets: ['latin'],
  variable: "--font-noto_sans"
})

export default function App({ Component, pageProps }) {
  return (

      <Component {...pageProps} />
    
  )
}
