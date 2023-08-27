import React from "react";

const ProductDetail = ({ selectedProduct }) => {
  if (!selectedProduct) {
    return null;
  }

  return (
    <div className="product-detail">
      <h2>{selectedProduct.name}</h2>
      <img src={selectedProduct.image} alt={selectedProduct.name} />
      <p>{selectedProduct.description}</p>
      <p>{selectedProduct.price}</p>
    </div>
  );
};

export default ProductDetail;
