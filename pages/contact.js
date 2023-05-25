import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'

import Date from '../components/date'
import Link from 'next/link'

const Contact = () => {

  return (
  <Layout>
      <Head>
      <title>Contact Me</title>
      </Head>
      <article>
      <h1 className={utilStyles.headingXl}>Contact Me</h1>
      <div className={utilStyles.lightText}>
        <Link href="mailto:miriellekruger13@gmail.com">
          miriellekruger13@gmail.com
        </Link>  
      </div>
      
      </article>
  </Layout>
  )
}
export default Contact;