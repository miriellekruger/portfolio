import Layout from '../../../components/layout'
import { getAllPostIds, getPostData } from '../../../lib/posts'
import Head from 'next/head'
import Image from 'next/image'
import Date from '../../../components/date'
import Section from "../../../components/section"
import { getImages } from '../../../lib/getImages'
import GridGallery from '../../../components/GridGallery'


export default function Post({ postData, imageData }) {
  console.log(imageData)

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
        <div className="text-justify" dangerouslySetInnerHTML={{ __html: postData.contentHtml }}></div>
        </div>
      </Section>
      {postData.id == "plants" ?
          <div className="text-justify" >
            <GridGallery imageData={imageData} />
          </div>
          : <></>
        }
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
  const folder2 = `public/images/plants` 
  const imageData = await getImages({folder: folder2})
  return {
    props: {
      postData,
      imageData
    }
  }
}
