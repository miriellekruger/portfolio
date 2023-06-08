import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Section from "../components/section"

import Date from '../components/date'
import Link from 'next/link'

const Contact = () => {

  return (
  <Layout >
      <Head >
        <title>Contact Me</title>
      </Head>
      <Section>
      <h1 className="flex text-3xl font-bold justify-center pb-3 text-dark1 ">CONTACT</h1>
      <div className="text">
        <Link href="mailto:miriellekruger13@gmail.com">
          miriellekruger13@gmail.com
        </Link>  
      </div>
      
      </Section>
  </Layout>
  )
}
export default Contact;