import React, { useEffect, useState } from 'react';
import { ProductBasic } from './featureComponents/ProductBasic';
import { AddToCart } from './featureComponents/AddToCart';
import Axios from 'axios';
import {
  useParams, Link
} from "react-router-dom";
import { CategoryOptions } from '../tools/Interfaces'

interface ParamTypes {
  category: string
}

export const CategoryPage = (): JSX.Element => {

  let { category } = useParams<ParamTypes>()

  const [options, setOptions] = useState<CategoryOptions[]>([])

useEffect(() => {
  const source = Axios.CancelToken.source()
  const fetchData = async () => {
    try{
      await Axios.get(`https://fakestoreapi.com/products/category/${category}`, {
        cancelToken: source.token
      }).then(res => {
        setOptions(res.data)
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

  const optionsMap = options.map(item => {
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