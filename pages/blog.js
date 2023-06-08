import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'
import Image from 'next/image'
import Section from "../components/section"


export default function Blog({ allBlogData }) {
  return (
    <Layout home>
      <Head>
        <title>Blog</title>
      </Head>
      
      <Section className="">
        <h2 className="flex text-3xl font-bold justify-center pb-3 text-dark1 ">BLOG</h2>
        <ul className="list-none">
          {allBlogData.map(({ id, date, title }) => (
            <li  key={id}>
              <Link className="" href={`/posts/blog/${id}`}>{title}</Link>
              <br />
              <small className="">
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

  return {
    props: {
      allBlogData
    }
  }
}
