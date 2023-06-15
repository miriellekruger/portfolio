import fs from 'fs'
import path from 'path'

// modified from https://codesandbox.io/s/image-gallery-with-react-tailwindcss-nextjs-71f3j?file=/components/grid-gallery.js:0-1570

const currPath = process.cwd()
export function getImages({folder}) {
  const imgDirectory = path.join(currPath, `${folder}`)

  // Get file names under /posts
  const fileNames = fs.readdirSync(imgDirectory)
  // console.log(fileNames)
  const allImageData = fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id1 = fileName.replace(/\.jpeg$/, '')
    const id2 = id1.charAt(0).toUpperCase() + id1.slice(1)
    const idList = id2.split("-")
    const id = idList.join(" ")

    // Read markdown file as string
    const fullPath = path.join(folder.slice(6), fileName)

    // Combine the data with the id
    return {
      id,
      fullPath
    }
  })
  return (
    allImageData
  )
}
