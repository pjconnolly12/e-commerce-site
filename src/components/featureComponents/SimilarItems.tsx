import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom";
import { CategoryOptions } from '../../tools/Interfaces'
import Axios from 'axios';

export const SimilarItems: React.FC<CategoryOptions> = ({ category, description, id, image, price, title }): JSX.Element => {

  const [products, setProduct] = useState<CategoryOptions[]>([])

  useEffect(() => {
    const source = axios.CancelToken.source()
    const fetchData = async () => {
      try{
        await Axios.get(`https://fakestoreapi.com/products/category/${category}`, {
          cancelToken: source.token
        }).then(res => {
          setProduct(res.data)
        })
      } catch (error) {
        if (Axios.isCancel(error)) {
        } else {
            throw error
        }
      }
    }
    fetchData()
    return () => {
      source.cancel()
    }
  })

  const optionsLimit = products.filter(item => item.id != id).slice(0,3)
  const optionsMap = optionsLimit.map(item => {
    let productUrl = `/product/${item.id}`
    return (
      <Link to={productUrl} key={item.id}>
        <div>{item.title}</div>
        <div>{item.price}</div>
      </Link>
    )
  } )

  return (
    <div>
      {optionsMap}
    </div>
  );
};