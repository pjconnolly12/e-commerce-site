import React from 'react';
import { CategoryOptions } from '../../tools/Interfaces';

export const ProductDetail: React.FC<CategoryOptions> = ({ category, description, id, image, price, title }): JSX.Element => {

  return (
    <div>
      <div>
        <img className='w-32 h-32 p-2' src={image} />
      </div>
      <div>
        <h1>{title}</h1>
        <div>{description}</div>
        <div>{price}</div>
      </div>
    </div>
  );
};