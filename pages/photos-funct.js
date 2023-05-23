import Image from 'next/image'
import fs from 'fs';
 
function getFilePaths(folderPath) {
  const fileNames = fs.readdirSync(folderPath);
  return fileNames.map((fileName) => ({
    params: {
      filePath: `${folderPath}/${fileName}`,
    },
  }));
}
function MyComponent() {
  const folderPath = './public/images';
  const filePaths = getFilePaths(folderPath);

  return (
    <div>
      {filePaths.map((filePath) => (
        <div key={filePath.params.filePath}>
          <Image src={filePath.params.filePath} alt="My Image" width={500} height={500} />
        </div>
      ))}
    </div>
  );
}
