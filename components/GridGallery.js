import Image from "next/image";
import { useState } from "react";


export default function GridGallery({ imageData }) {
  return (
    <div className=" relative columns-3xs gap-2 p-4">
      {imageData.map(({id, fullPath}) => (
            <GridGalleryCard
              id={id}
              fullPath={fullPath}
              show={true}
            />
        ))}
    </div>
  );
}

function GridGalleryCard({ id, fullPath, show }) {
  const [width, setWidth] = useState('0');
  const [aspectRatio, setAspectRatio] = useState('1/1')


  return (
    <div
      className={` my-2 transition ease-in duration-300 transform `}
    >
      <div className="absolute opacity-0 inset-0 z-10 flex transition duration-200 ease-in hover:opacity-70">
        <div className="absolute inset-0 bg-black opacity-70 "></div>
        <div className="mx-auto text-white z-10 px-4 self-center uppercase tracking-widest text-xs sm:text-sm text-center">
          {id}
        </div>
      </div>
      
      <div className={`aspect-[${aspectRatio}]`}>
        {/* <img src={fullPath} alt={id} className="-my-2 -z-1"/> */}
        <Image
            priority
            src={fullPath}
            width={width*100}
            height={0}
            className=" object-contain"
            onLoadingComplete={({ naturalWidth, naturalHeight }) => {
              setWidth(`${naturalWidth}`)
              setAspectRatio(`${naturalWidth}/${naturalHeight}`);
            }}
          />

      </div>
    </div>
  );
}