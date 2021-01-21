import React, { useState, useEffect } from 'react';
import { SearchResults } from './featureComponents/SearchResults';
import Axios from 'axios'
import { CategoryOptions } from '../tools/Interfaces'
import { Link } from "react-router-dom";


export const Homepage = (): JSX.Element => {
  const [ products, setProducts] = useState<CategoryOptions[]>([])
  const [ searchResults, updateSearchResults] = useState<CategoryOptions[]>([])
  const [ searchInput, updateSearchInput] = useState('')
  const [ results, updateResults] = useState<JSX.Element>()
  const [ submitted, wasSubmitted] = useState<Boolean>(false)

  useEffect(() => {
    const source = Axios.CancelToken.source()
    const fetchData = async () => {
      try{
        await Axios.get(`https://fakestoreapi.com/products`, {
          cancelToken: source.token
        }).then(res => {
          setProducts(res.data)
        })
      } catch (error) {
        if (Axios.isCancel(error)) {
        } else {
            throw error
        }
      }
    }
    fetchData()
    return () => {
      source.cancel()
    }
}, [])

  const onSubmit = (e: React.SyntheticEvent<EventTarget>) => {
    console.log(products)
    const searchResults = products.filter((item: CategoryOptions) => {
    const itemTitle = item.title
    const itemDescription = item.description
    console.log(itemTitle?.indexOf(searchInput))
    if (itemTitle !== undefined && itemDescription !== undefined) {
      return (itemTitle.indexOf(searchInput) >= 0 || itemDescription.indexOf(searchInput) >= 0)
    }
    })
    updateSearchResults(searchResults)
    updateSearchInput('')
    wasSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchInput(e.target.value);
  };

  if(submitted) {
    console.log(searchResults)
    if (searchResults.length > 0){
     updateResults(<SearchResults {...searchResults} />)
    } else {
      updateResults(<div>No Results, Please Search again</div>)
    }
    wasSubmitted(false)
  }

  return (
    <>
    <div className="flex justify-items-center items-center overflow-hidden">
    <div className="pt-2 relative mx-auto text-gray-600 ">
    <input className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
      type="search" name="search" placeholder="Search" onChange={handleChange} value={searchInput} ></input>
    <button onClick={(e) => onSubmit(e)} className="absolute right-0 top-0 mt-5 mr-4">Submit</button>
    </div>
    </div>
    {results}
    </>
  );
};