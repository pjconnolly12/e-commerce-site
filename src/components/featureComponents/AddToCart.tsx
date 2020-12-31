import React from 'react';
import { CategoryOptions } from '../../tools/Interfaces'

export const AddToCart: React.FC<CategoryOptions> = ({ category, description, id, image, price, title }): JSX.Element => {
  return (
    <>
      <button className='bg-gray-800 rounded text-white p-2'>
        Add to Cart
      </button>
    </>
  );
};