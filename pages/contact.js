import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import ContactForm from '../components/ContactForm'
import Section from '../components/Section'

import Date from '../components/date'
import Link from 'next/link'

const Contact = () => {

  return (
  <Layout >
      <Head >
        <title>Contact Me</title>
      </Head>
      <Section>
      <h1 className="flex text-3xl font-bold justify-center text-dark1 ">CONTACT ME</h1>

      <ContactForm />

      
      </Section>
  </Layout>
  )
}
export default Contact;