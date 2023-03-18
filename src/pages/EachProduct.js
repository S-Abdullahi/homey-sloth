import React, { useEffect, useState } from "react";
import { useProductContext } from "../context/Products_Context";
import { Link, useParams } from "react-router-dom";
import { Loading } from "../components";
import axios from "axios";

const EachProduct = () => {
  const { id } = useParams();
  const { productData, isLoading, setIsLoading } = useProductContext();
  const [singleProduct, setSingleProduct] = useState({images: [0]});

  const getSingleProduct = async () => {
    try {
      setIsLoading(true);
      const res = await axios.get(
        `https://course-api.com/react-store-single-product?id=${id}`
      );
      //   console.log(res.data);

      setSingleProduct(res.data);
      setIsLoading(false);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getSingleProduct();
  }, [id]);


  if (isLoading) {
    return <Loading />;
  }

  const { images } = singleProduct;
  console.log(singleProduct);
  console.log(images[0]?.thumbnails?.small?.url)

  return (
    <div>
      <Link to="/products">
        <button className="btn px-40">BACK TO PRODUCTS</button>
      </Link>
      <div>
        <div>
          <div>
            <img src={images[0]?.url} alt={images[0]?.filename} />
          </div>
          <div>
            {images.map((image) => {
                <img key={image.filename} src={image?.url} alt={image?.filename} />;
              })}
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default EachProduct;
