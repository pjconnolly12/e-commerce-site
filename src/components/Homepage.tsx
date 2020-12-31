import React, { useEffect } from 'react';
import { Searchbar } from './featureComponents/Searchbar';  
import axios from 'axios'

export const Homepage = (): JSX.Element => {

  useEffect(() => {
    axios.get(`https://fakestoreapi.com/products`)
      .then(res => {
        console.log(res.data)
      })
}, [])

  return (
    <div className="flex h-screen justify-items-center items-center overflow-hidden">
    <div className="pt-2 relative mx-auto text-gray-600 ">
    <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
      type="search" name="search" placeholder="Search"></input>
    <button type="submit" className="absolute right-0 top-0 mt-5 mr-4"></button>
    </div>
    </div>
  );
};