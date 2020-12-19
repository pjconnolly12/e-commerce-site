import React from 'react';
import { HomeButton } from './navbarComponents/HomeButton';
import { CategoriesDropdown } from './navbarComponents/CategoriesDropdown'
import { LoginButton } from './navbarComponents/LoginButton';
import { CartButton } from './navbarComponents/CartButton';

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