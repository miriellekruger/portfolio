import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import utilStyles from '../styles/utils.module.css'
import Section from "../components/section"

import Date from '../components/date'
import Link from 'next/link'

const Contact = () => {

  return (
  <Layout>
      <Head>
      <title>Contact Me</title>
      </Head>
      <Section>
      <h1 className={utilStyles.headingXl}>Contact Me</h1>
      <div className={utilStyles.lightText}>
        <Link href="mailto:miriellekruger13@gmail.com">
          miriellekruger13@gmail.com
        </Link>  
      </div>
      
      </Section>
  </Layout>
  )
}
export default Contact;