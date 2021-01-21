import React, { useContext, useEffect } from 'react';
import { AddToCart } from './AddToCart';
import ThemeContext from '../../themeContext';
import { Link } from "react-router-dom";
import { CategoryOptions } from '../../tools/Interfaces'


export const SearchResults: React.FC<CategoryOptions[]> = (products: CategoryOptions[]) : JSX.Element => {

  useEffect(() => {
    console.log(products)
  })

  // const searchResults = products.map(item => {
  //   console.log(item)
  //   let productUrl = `/product/${item.id}`
  //   return (
  //     <Link to={productUrl} key={item.id}>
  //       <div>{item.title}</div>
  //       <div>{item.price}</div>
  //     </Link>
  //   )
  // })

  return (
    <div>
      {/* {searchResults} */}
    </div>
  );
};