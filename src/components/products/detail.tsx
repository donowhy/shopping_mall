import React from "react";
import {Product} from "../../types.ts";

const ProductDetail = ({
   item: {
       category,
       description,
       image,
       price,
       rating: {
           rate
       },
       title
   },}: {
    item : Product
   }) =>
(
    <div className="product-detail">
        <p className="product-detail__category">{category}</p>
        <p className="product-detail__title">{title}</p>
        <p className="product-detail__description">{description}</p>
        <img className="product-detail__image" src={image}/>
        <span className="product-detail__price">${price}</span>
        <span className="product-detail__rating">{rate}</span>
    </div>
)

export default ProductDetail