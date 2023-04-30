import React, {useState} from 'react'

const SingleProductImages = ({images = []}) => {
    const [main, setMain] = useState(images[0])
  return (
    <div className="md:w-1/2">
          <div className="mb-10 w-full h-60">
            <img
              src={main?.url}
              alt={main?.filename}
              className="rounded w-full h-full object-cover"
            />
          </div>
          <div className="flex justify-between gap-2 mt-[-30px]">
            {images.map((image,index) => {
              return (
                <div className="w-20 h-12" key={index}>
                  <img
                    src={image?.thumbnails?.small?.url}
                    key={image.filename}
                    alt={image?.filename}
                    className="rounded w-full h-full object-cover"
                    onClick={()=>{
                        setMain(image)
                    }}
                  />
                </div>
              );
            })}
          </div>
        </div>
  )
}

export default SingleProductImages