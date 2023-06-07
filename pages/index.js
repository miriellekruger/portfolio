import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
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
      <Section className={utilStyles.headingMd}>
        
        <h3>It's me. Hi. I'm Mirielle Kruger.  It's me! </h3>
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
          <Image
            priority
            src="/images/aqua-2-flowers.jpeg"
            height={500}
            width={500}
            alt="plant"
          />
        </p>

      </Section>
      <section>


      </section>
{/* 
      <Section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Blog</h2>
        <ul className={utilStyles.list}>
          {allBlogData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/blog/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
      </Section> */}
      <Section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Experiences</h2>
        <ul className={utilStyles.list}>
          {allExpData.map(({ id, date, title }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/posts/experiences/${id}`}>{title}</Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>
            </li>
          ))}
        </ul>
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
