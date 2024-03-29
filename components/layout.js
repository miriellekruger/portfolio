import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import NavBar from './NavBar'

export const name = 'Mirielle Kruger'
export const siteTitle = 'Mirielle Kruger Portfolio'

export default function Layout({ children, home }) {
  return (
    <div>
      <Head>
        <link rel="icon" href="/favicon.ico" />
  
        <meta
          name="description"
          content="Learn more about Mirielle Kruger!"
        />
        {/* <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.zeit.co%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        /> */}
        {/* <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" /> */}
      </Head>
      <header className="fixed z-30">
        {home ? <NavBar name='home' /> : <NavBar name='side' /> }
        
      </header>
      <main className=' pt-20'>{children}</main>
      {/* {!home && (
        <div className='pt-20'>
          <Link href="/">← Back to home</Link>
        </div>
      )} */}
    </div>
  )
}
