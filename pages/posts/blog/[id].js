import Layout from '../../../components/layout'
import { getAllPostIds, getPostData } from '../../../lib/posts'
import Head from 'next/head'
import Date from '../../../components/date'
import Section from "../../../components/section"

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Section className=''>
        <div className='mx-10 text-center justify-center'>
        <h1 className="flex text-3xl justify-center">{postData.title}</h1>
        <span className="flex text-s justify-center text-dark1 -mt-4" >{postData.description}</span>
        <div className="flex text-dark1_lighter justify-center">
          <Date dateString={postData.date} />
        </div>
        <div className="text-justify" dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
        </div>
      </Section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const folder = `blog`
  const paths = getAllPostIds({folder})
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const folder = `blog`
  const id = params.id
  const postData = await getPostData({id, folder})
  return {
    props: {
      postData
    }
  }
}
