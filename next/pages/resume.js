import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Link from 'next/link'
import Date from '../components/date'
import { getPostData_resume } from '../lib/resume'

export default function Resume({ resumeData }) {
    return (
    <Layout>
        <Head>
        <title>{resumeData.title}</title>
        </Head>
        <article>
        <h1 className={utilStyles.headingXl}>{resumeData.title}</h1>
        <div className={utilStyles.lightText}>
            <Date dateString={resumeData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: resumeData.contentHtml }} />
        </article>
    </Layout>
    )
}

export async function getStaticProps() {
  const resumeData = await getPostData_resume()
  return {
    props: {
      resumeData
    }
  }
}
