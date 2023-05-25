import Link from 'next/link'
import ProjectPage from './projects'

export default function IndexPage() {
  return (
    <div>
      Hello World. <Link href="/about">About</Link>
      <ProjectPage project="/day/content/databases.json"/>
    </div>
  )
}
