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
      <Section>
        <h1 className="text-xl">{postData.title}</h1>
        <div className="text-dark1">
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const folder = `resume`
  const paths = getAllPostIds({folder})
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const folder = `resume`
  const id = params.id
  const postData = await getPostData({id, folder})
  return {
    props: {
      postData
    }
  }
}
