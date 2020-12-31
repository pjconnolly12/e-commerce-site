import React from 'react';
import { HomeButton } from './navbarComponents/HomeButton';
import { CategoriesDropdown } from './navbarComponents/CategoriesDropdown'
import { LoginButton } from './navbarComponents/LoginButton';
import { CartButton } from './navbarComponents/CartButton';

export const Navbar = (): JSX.Element => {
  return (
    <div className="bg-gray-800">
      <div className="relative flex items-center justify-between h-16 z-10">
        <div className="relative flex items-center justify-between h-16 w-2/4 m-4">
          <HomeButton />
          <CategoriesDropdown />
        </div>
        <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
          <LoginButton />
          <CartButton />
        </div>
      </div>
    </div>
      
      );
}; 