import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Section from '../components/section'
import utilStyles from '../styles/utils.module.css'
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
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
            <Date dateString={postData.date} />
        </div> 
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
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
