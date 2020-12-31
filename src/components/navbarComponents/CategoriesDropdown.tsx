import React, { useState } from 'react';
import { Link } from 'react-router-dom'

export const CategoriesDropdown = (): JSX.Element => {

  const [ showDropdown, updateDropdown] = useState(false)

  const buttonClick = () => {
    if (showDropdown) {
      updateDropdown(false)
    } else {
      updateDropdown(true)
    }
  }

  const dropdownStyle = showDropdown ? "py-1" : "py-1 hidden";

  return (
    <div className="relative inline-block text-left">
  <div>
    <button type="button" onClick={buttonClick} className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500" id="options-menu" aria-haspopup="true" aria-expanded="true">
      Categories
      <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
      </svg>
    </button>
  </div>
  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
    <div className={dropdownStyle} role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
      <Link to='/categories/men clothing' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Men's Clothing</Link>
      <Link to='/categories/women clothing' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Women's Clothing</Link>
      <Link to='/categories/jewelery' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Jewelery</Link>
      <Link to='/categories/electronics' className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900" role="menuitem">Electronics</Link>
    </div>
  </div>
</div>
  );
};