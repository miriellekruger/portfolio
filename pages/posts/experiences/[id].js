import Layout from '../../../components/layout'
import { getAllPostIds, getPostData } from '../../../lib/posts'
import Head from 'next/head'
import Date from '../../../components/date'
// import IntroGrid from '../../../components/intro-grid'
import Section from "../../../components/Section"

export default function Post({ postData }) {
  return (
    <Layout>
      <Head>
        <title>{postData.title}</title>
      </Head>
      <Section>
        <h1 className="text-xl text-center">{postData.title}</h1>
        <div className="text-dark1">
          <Date dateString={postData.date} /> 
          {/* <IntroGrid postMetaData={{type: postData.type, tag: postData.tag}}/> */}
        </div>

        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </Section>
    </Layout>
  )
}

export async function getStaticPaths() {
  const folder = `experiences`
  const paths = getAllPostIds({folder})
  return {
    paths,
    fallback: false
  }
}

export async function getStaticProps({ params }) {
  const folder = `experiences`
  const id = params.id
  const postData = await getPostData({id, folder})
  return {
    props: {
      postData
    }
  }
}
