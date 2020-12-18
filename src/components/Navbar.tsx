import React from 'react';
import { HomeButton } from './HomeButton';
import { CategoriesDropdown } from './CategoriesDropdown'
import { LoginButton } from './LoginButton';
import { CartButton } from './CartButton'

export const Navbar = (): JSX.Element => {
  return (
    <div>
      <HomeButton />
      <CategoriesDropdown />
      <LoginButton />
      <CartButton />
    </div>
      
      );
}; 