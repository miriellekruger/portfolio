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
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Section className="text-md mx-auto">
        
        <h3 className='flex text-3xl font-bold justify-center pb-3 text-dark1 '>it's me.  hi.  i'm mirielle kruger.   it's me! </h3>
        <p>
          <Emoji symbol="🚀" label="rocket-ship" />
          <Link href="/posts/blog/journey">
            {allBlogData.filter(({id})=> id=='journey')[0].title}
          </Link>
          </p>

        <h3>Current Interests</h3>
        <p>
          <Emoji symbol="🚃" label="music-notes" />
          <Link href="https://www.youtube.com/watch?v=y_SXXTBypIg&list=PLJp5q-R0lZ0_FCUbeVWK6OGLN69ehUTVa">
            Car-Free and Carefree
          </Link>
          </p>
        <p>
          <Emoji symbol="🎶" label="music-notes" />
          <Link href="https://open.spotify.com/playlist/2icttH00ddVX5THrCuAoL5?si=25110c8282a54ad2">
            Playlist
          </Link></p>
        <p>
          <Emoji symbol="📚" label="books" />
          <Link href='/posts/blog/reading'>
            Reading List
          </Link>
        </p>
        <p>
          <Emoji symbol="🪴" label="plant in pot" />
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

      </Section>
      
      <Section className="text-md p-1 m-2">
        <h2 className='text-2xl my-3 flex justify-center'>Experiences</h2>
        <div className='md:flex gap-10 overflow-x-scroll bg-background2 w-screen rounded-xl shadow-lg md:scroll-p-5 md:snap-x md:snap-mandatory p-6'>
          {allExpData.map(({ id, date, title, img }) => (
            <div className='text-center shadow-lg p-5 rounded-xl bg-background1 flex-1 snap-start' key={id}>   
                <Link href={`/posts/experiences/${id}`}>
                {img ? 
                <div className=' border-solid bg-background1 w-72 h-72 rounded-md mx-auto overflow-hidden items-center justify-center' >
                <Image className=''
                  priority
                  src={img}
                  height={300}
                  width={300}
                  alt={title}
                /></div>
                : <div className='bg-background1 w-72 h-72 rounded-md mx-auto'></div>
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
