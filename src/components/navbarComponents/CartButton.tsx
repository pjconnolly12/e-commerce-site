import React from 'react';
import { Link } from 'react-router-dom'

export const CartButton = (): JSX.Element => {
  return (
    <div>
      <Link to="/">Cart</Link>
    </div>
  );
};