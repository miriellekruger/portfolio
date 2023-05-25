export async function getStaticProps() {
    const filePath = path.join(process.cwd(), 'public', '/content/databases.json');
    const jsonData = await fetch(filePath);
    const data = JSON.parse(jsonData.default);
  
    return {
      props: {
        data
      }
    };
  }