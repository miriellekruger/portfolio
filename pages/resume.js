import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Section from '../components/section'
import Link from 'next/link'
import Date from '../components/date'
import { getPostData } from '../lib/posts'

export default function Resume({ postData }) {
    return (
    <Layout>
        <Head>
        <title>{postData.title}</title>
        </Head>
        <Section>
        <h1 className="flex text-3xl font-bold justify-center pb-3 text-dark1">RESUME</h1>
        <div className="text-dark1">
            {/* <Date dateString={postData.date} /> */}
        </div> 
        <div className='text-dark1_lighter' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        {/* {console.log(postData.contentHtml)} */}
        </Section>
    </Layout>
    )
}

export async function getStaticProps({ params }) {
  const folder = `resume`
  const id = 'resume'
  const postData = await getPostData({id, folder})
  return {
    props: {
      postData
    }
  }
}
