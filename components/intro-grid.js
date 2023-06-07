export default function IntroGrid({postMetaData}) {
    return(
        <div className="grid grid-cols-3 gap-4">
            <ul>
                <li className="font-bold">Type</li>
                <li>{postMetaData.type}</li>
            </ul>
            <ul>
                <li className="font-bold">Tags</li>
                {postMetaData.tag.split(', ').map((str, i) => {
                    // console.log(str)
                   return <li key={i}>{str}</li>
                })}
            </ul>

            
        </div>
    )

} 