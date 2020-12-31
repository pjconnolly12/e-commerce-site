import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { ProductDetail } from './featureComponents/ProductDetail';
// import { SimilarItems } from './featureComponents/SimilarItems';
// import { AddToCart } from './featureComponents/AddToCart';
import { CategoryOptions } from '../tools/Interfaces'
import { useParams } from "react-router-dom";
import { SimilarItems } from './featureComponents/SimilarItems';
import { AddToCart } from './featureComponents/AddToCart';

interface ParamTypes {
  id: string;
}

export const ProductPage = (): JSX.Element => {

  let { id } = useParams<ParamTypes>()

  const [product, setProduct] = useState<CategoryOptions>()

  useEffect(() => {
      axios.get(`https://fakestoreapi.com/products/${id}`)
      .then(res => {
        setProduct(res.data)
      })
  }, [])

  return (
    <div>
      <ProductDetail {...product} />
      <AddToCart {...product} />
      <SimilarItems {...product} />
    </div>
  );
};