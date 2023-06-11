import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import Section from '../components/section'
import Link from 'next/link'
import Date from '../components/date'
import { getPostData } from '../lib/posts'

export default function Resume({ postData }) {

    const splitMap = ({strList, className}, split=", ") => {
      return (
        strList.split(split).map((item) => {return (<p className={className} key={item}>{item}</p>)})
      )
    }
    const splitMapLi = ({strList, className}, split=", ") => {
      return (
        strList.split(split).map((item) => {return (<li className={className} key={item}>{item}</li>)})
      )
    }
    const languageList = "Python, Javascript, SQL, HTML/CSS, MATLAB"
    const languages = splitMap({strList:languageList, className:'-m-0.5'})

    const frameworksList  = "scikit-learn, pandas, matplotlib, React, React Native, Node.js, Express.js, Spark, Hadoop, Databricks, D3, Seaborn, Plotly";
    const frameworks = splitMap({strList:frameworksList, className:'-m-0.5'})

    const toolsList  = "Git/Github, Docker, PostGresSQL, AWS, GCP, Tableau, SolidWorks, Microsoft Suite";
    const tools = splitMap({strList:toolsList, className:'-m-0.5'})

    const coursesList = "Machine Learning, Deep Learning, Data and Visual Analytics, Database Design, Simulation, Human Computer Interaction"
    const courses = splitMap({strList:coursesList, className:'-m-0.5'})

    const honorsList = "Highest Honors, Provost Scholar, Honors Program"
    const honors = splitMap({strList:honorsList, className:'mx-5 -my-0.5 '})

    const fig1Content = "Authored, filed, and prosecuted multiple patent applications concurrently, primarily in the software and machine learning field.. Created compelling visual representations to illustrate complex inventions of patent applications.. Advocated for patent application allowance by planning and conducting interviews with patent examiners."
    const fig1 = splitMapLi({strList:fig1Content, className:'mx-5 my-1 '},  ". ")

    const nasaContent = "Designed and characterized critical subsystems and conducted experiments to optimize performance and advance the waste gasification reactor system (OSCAR) towards a technology demonstration in Low Earth Orbit.. Constructed a data-driven modular fluid, heat, and kinetic model of OSCAR subsystems using Cantera and SciPy in Python, enabling accurate predictions of overall products and behaviors.. Conducted thorough chemical analysis of reaction products utilizing advanced techniques such as infrared spectroscopy (FTIR), gas chromatography (GC), and scanning electron microscopy (SEM).. Developed custom automatic data analysis and visualization tools using Python, resulting in a remarkable 100-fold increase in analysis efficiency, enabling rapid processing of raw data and identification of key performance trends."
    const nasa = splitMapLi({strList:nasaContent, className:'mx-5 my-1 '},  ". ")


    return (
    <Layout>
        <Head>
        <title>{postData.title}</title>
        </Head>
        <Section>
          <div className='px-4'>
            <h1 className="flex text-3xl font-bold justify-center pb-3 text-dark1">RESUME</h1>
            {/* header */}
            <div className='flex flex-col sm:flex-row justify-center text-center'>
            <div className='mx-2 flex-grow'>
              <h3>Languages</h3>
              <div className='grid'>
                {languages}
              </div>
            </div>
            <div className=' mx-2 flex-grow'>
              <h3>Frameworks / Libraries</h3>
              <div className='grid grid-cols-2 gap-x-3 gap-y-0'>
                {frameworks}
              </div>
            </div>
            <div className='mx-2 flex-grow'>
              <h3>Tools</h3>
              <div className='grid'>
                {tools}
              </div>
            </div>
            </div>
          
            <div>
              <h2 className='flex justify-center'>EDUCATION</h2>
              {/* MS */}
              <div className=''>
              <h3 className='flex justify-center'>M.S. in Computer Science</h3>
              <div className='flex flex-col sm:flex-row  text-center '>
                <p className='-my-0.5 flex-grow'>Georgia Institiute of Technology (Georgia Tech)</p>
                <p className='-my-0.5 flex-grow'><Date dateString='2022-08-20' /> - Present</p>
              </div>
              <h4 className='flex justify-center'>Relevant Courses</h4>
              <div className='flex flex-col sm:flex-row justify-center text-center'>{courses}</div>

              </div>
              {/* BS */}
                <div className=''>
                <h3 className='flex justify-center'>B.S. in Chemical and Biomolecular Engineering</h3>
                <div className='flex flex-col sm:flex-row  text-center '>
                  <p className='-my-0.5 flex-grow'>Georgia Institiute of Technology (Georgia Tech)</p>
                  <p className='-my-0.5 flex-grow'><Date dateString='2017-08-20' /> - <Date dateString='2021-05-10' /></p>
                </div>
                <h4 className='flex justify-center'>Honors</h4>
                <div className='flex flex-col sm:flex-row justify-center text-center'>{honors}</div>

                </div>

            </div>
            {/* Work Experience */}
            <div>
              <h2 className='flex justify-center'>WORK EXPERIENCE</h2>
              {/* fig1 */}
              <div>
                <h3 className='flex justify-center'><Link href={'/posts/experiences/patents'}>FIG. 1 Patents</Link></h3>
                  <div className='flex flex-col sm:flex-row  text-center '>
                    <p className='-my-0.5 flex-grow'>Spokane, Washington</p>
                    <p className='-my-0.5 flex-grow'><Date dateString='2021-06-10' /> - <Date dateString='2022-05-13' /></p>
                  </div>
                <h4 className='flex justify-center'></h4>
                <ul className=' justify-center text-justify'>{fig1}</ul>
              </div>
              {/* Nasa */}
              <div>
                <h3 className='flex justify-center'><Link href={'/posts/experiences/NASA'}>National Aeronautics and Space Administration (NASA)</Link></h3>
                  <div className='flex flex-col sm:flex-row  text-center '>
                    <p className='-my-0.5 flex-grow'>Kennedy Space Center, Florida</p>
                    <p className='-my-0.5 flex-grow'><Date dateString='2020-01-13' /> - <Date dateString='2020-08-13' /></p>
                  </div>
                <h4 className='flex justify-center'></h4>
                <ul className=' justify-center '>{nasa}</ul>
              </div>
            </div>

            {/* Projects */}
            <div>
              <h2 className='flex justify-center'>PROJECTS</h2>
              {/* DVA */}
              <div>
                <h3 className='flex justify-center'><Link href={'/posts/experiences/dva'}>Extreme Precipitation Data Analysis Project</Link></h3>
                  <div className='flex flex-col sm:flex-row  text-center '>
                    <p className='-my-0.5 flex-grow'>Georgia Tech</p>
                    <p className='-my-0.5 flex-grow'><Date dateString='2023-01-10' /> - <Date dateString='2023-05-13' /></p>
                  </div>
                <h4 className='flex justify-center'></h4>
                <div className=' justify-center text-justify'>
                  <ul>
                  <li className='mx-5 my-1 text-justify'>Leaded the development of a map-style interface based on time-series data models to identify and analyze environmental factors influencing extreme precipitation sensitivity across the U.S. Leveraging plotly in Python and GIS data, to provide comprehensive insights.</li>
                  </ul>
                </div>
              </div>
              {/* Databases */}
              <div>
                <h3 className='flex justify-center'><Link href={'/posts/experiences/databases'}>Full-Stack Database Project</Link></h3>
                  <div className='flex flex-col sm:flex-row  text-center '>
                    <p className='-my-0.5 flex-grow'>Georgia Tech</p>
                    <p className='-my-0.5 flex-grow'><Date dateString='2023-01-10' /> - <Date dateString='2023-05-13' /></p>                  </div>
                <h4 className='flex justify-center'></h4>
                <div className=' justify-center text-justify '>
                  <ul>
                    <li className='mx-5 my-1'>Spearheading the construction of a robust full-stack web interface incorporating dynamic form input and comprehensive database reports, utilizing Postgres, Docker, Node.js, SQL, and HTML/CSS to create a seamless user experience.</li>
                  </ul>
                  </div>
              </div>
              <div>
                <h2 className='flex justify-center'>PUBLICATIONS</h2>
                {/* Links */}
                <div>
                  <div className=' justify-center text-justify'>
                  <ul>
                    <li><Link href="https://ttu-ir.tdl.org/handle/2346/87234">A Comparison of Potential Trash-to-Gas Waste Processing Systems for Long-Term Crewed Spaceflight</Link></li>
                    <li><Link href="https://doi.org/10.2478/gsr-2021-0006">Pioneering the Approach to Understand a Trash-to-Gas Experiment in a Microgravity Environment</Link></li>
                    <li><Link href="https://doi.org/10.2478/gsr-2021-0011">Reviewing Plasma Seed Treatments for Advancing Agriculture Applications on Earth and Into the Final Frontier</Link></li>
                    </ul>
                  </div>
                </div>
              </div>
            
            </div>


            {/* <div className='text-dark1_lighter' dangerouslySetInnerHTML={{ __html: postData.contentHtml }} /> */}
            <div>
              <h2 className='flex justify-center'><Link href={"/contact"}>Like what you see? Contact Me Here!</Link></h2>
            </div>
          </div>
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

function parseLists(contentHtml) {

}