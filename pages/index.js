import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'
import { FaMusic } from 'react-icons/fa';
import Emoji from "../components/emoji"
import Section from '../components/section'

export default function Home({ allBlogData,allExpData }) {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <div className='flex justify-center'>
          <Image
            priority
            src="/images/profile.jpg"
            className="overflow-hidden  w-100 h-100 rounded-full"
            height={300}
            width={300}
            alt={"profile"}
          />
        </div>
      <Section>
        <div className="mx-auto max-w-screen-md px-4">
        <h1 className='flex text-3xl font-bold justify-center text-center text-dark1 '>it's me.  hi.  i'm mirielle kruger.   it's me! </h1>
        <p className='flex text-xs sm:text-base md:text-xl justify-center pb-3 text-dark1_lighter break-all'> 
          mere(<Emoji className="text-base sm:text-lg md:text-2xl -m-0.5" symbol="🪞" label="mirror"/>)-E-L crew(<Emoji className="text-base sm:text-lg md:text-2xl" symbol="🚣🏻‍♀️" label="rowing crew"/>)-grr(<Emoji className="text-base sm:text-lg md:text-2xl" symbol="🐯" label="tiger grr"/>)
        </p>
        <p>
          <Emoji className="mr-2" symbol="🚀" label="rocket-ship" />
          <Link href="/posts/blog/journey">
            {allBlogData.filter(({id})=> id=='journey')[0].title}
          </Link>
          </p>

        <h3>Current Interests</h3>
        <p>
          <Emoji className="pr-2" symbol="🚃" label="music-notes" />
          <Link href="https://www.youtube.com/watch?v=y_SXXTBypIg&list=PLJp5q-R0lZ0_FCUbeVWK6OGLN69ehUTVa">
            Car-Free and Carefree
          </Link>
          </p>
        <p>
          <Emoji className="pr-2" symbol="🎶" label="music-notes" />
          <Link href="https://open.spotify.com/playlist/2icttH00ddVX5THrCuAoL5?si=25110c8282a54ad2">
            Playlist
          </Link></p>
        <p>
          <Emoji className="pr-2" symbol="📚" label="books" />
          <Link href='/posts/blog/reading'>
            Reading List
          </Link>
        </p>
        <p>
          <Emoji className="pr-2" symbol="🪴" label="plant in pot" />
          <Link href='/posts/blog/plants'>
            Fan Page for My Plants
          </Link>
        </p>
        {/* <p>
          <Image 
            priority
            src="/images/aqua-2-flowers.jpeg"
            height={500}
            width={500}
            alt="plant"
          />
          
        </p> */}
        </div>

      </Section>
      
      <Section >
        <div className="text-base p-1 mx-2 mb-3">
        <h2 className='text-2xl my-3 justify-center text-dark1'>Experiences</h2>
        <div className='grid sm:grid-cols-1 md:grid-cols-2 gap-5 overflow-auto bg-background2  rounded-xl shadow-lg sm:scroll-p-5 sm:snap-x sm:snap-mandatory p-6'>
          {allExpData.map(({ id, date, title, img }) => (
            <div className='text-center items-center shadow-lg p-5 rounded-xl bg-background1 sm:snap-start' key={id}>   
                <Link href={`/posts/experiences/${id}`}>
                {img ? 
                <div className='bg-background1 w-72 h-72 rounded-md mx-auto overflow-hidden items-center justify-center' >
                  <Image className=''
                    priority
                    src={img}
                    height={300}
                    width={300}s
                    alt={title}
                  />
                </div>
                : <div className='bg-background1 sm:w-72 sm:h-72 rounded-md mx-auto'></div>
                }
                </Link>
              <Link className='min-w-72' href={`/posts/experiences/${id}`}>{title}</Link>
              <br />
              <small className="text-dark1">
                <Date dateString={date} />
              </small>
            </div>
          ))}
        </div>
        </div>
      </Section>
    </Layout>
  )
}

export async function getStaticProps() {
  var folder = "blog"
  const allBlogData = getSortedPostsData({folder})
  folder = "experiences"
  const allExpData = getSortedPostsData({folder})
  // folder = "interests"
  // const allIntData = getSortedPostsData({folder})
  return {
    props: {
      allBlogData,
      allExpData, 
      // allIntData
    }
  }
}
