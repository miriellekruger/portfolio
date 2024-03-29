import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'
import Section from "../components/section"


export default function Blog({ allBlogData }) {
  return (
    <Layout >
      <Head>
        <title>Blog</title>
      </Head>
      
      <Section>
        <div className='px-4'>
        <h1 className="flex text-3xl font-bold justify-center pb-3 text-dark1">BLOG</h1>
        <div>
          {allBlogData.map(({ id, date, title, description }) => (
            <div className='my-5' key={id}>
              <Link className="text-xl" href={`/posts/blog/${id}`}>{title}</Link>
              <br />
              <small className="text-dark1">
                <Date dateString={date} />
              </small> 
              <span className='text-s ml-3 text-dark1'>{description}</span>
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

  return {
    props: {
      allBlogData
    }
  }
}
