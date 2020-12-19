import React from 'react';
import { Link } from 'react-router-dom'


export const HomeButton = (): JSX.Element => {
  return (
    <div>
      <Link to="/">Home</Link>
    </div>
  );
};