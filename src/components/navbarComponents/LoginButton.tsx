import React from 'react';
import { Link } from 'react-router-dom'


export const LoginButton = (): JSX.Element => {
  return (
    <div>
      <Link to="/">Login</Link>
    </div>
  );
};