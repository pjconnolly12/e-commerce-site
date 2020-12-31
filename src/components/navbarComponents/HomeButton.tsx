import React from 'react';
import { Link } from 'react-router-dom'


export const HomeButton = (): JSX.Element => {
  return (
    <div className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium">
      <Link to="/">Home</Link>
    </div>
  );
};