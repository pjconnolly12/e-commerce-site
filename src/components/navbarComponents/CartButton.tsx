import React from 'react';
import { Link } from 'react-router-dom'

export const CartButton = (): JSX.Element => {
  return (
    <div className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
      <Link to="/">Cart</Link>
    </div>
  );
};