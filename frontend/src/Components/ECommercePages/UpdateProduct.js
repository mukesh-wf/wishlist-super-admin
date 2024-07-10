import React from 'react';
import AddProduct from './AddProduct';
import imageUrl from '../Image/Dinnerplate.png';


const UpdateProduct = () => {

  const addReset = {
    name: "Web Framez",
    subText: "Web",
    category: "Clothing",
    price: "1500",
    discount: "30",
    status: "Published",
    textArea: " all",
    meta: "Meta",
    metaKeyword: "Meta Keyword"
  };
  const heading = "Edit Product";
  const title = 'Product Updated Successfully';

  return (
    <>
      <AddProduct
        addReset={addReset}
        headings={heading}
        title={title}
        imageUrl={imageUrl}
      />
    </>
  )
}

export default UpdateProduct;