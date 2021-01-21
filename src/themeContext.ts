import React from 'react';
import { CategoryOptions } from './tools/Interfaces';

const SearchContext = React.createContext<CategoryOptions[]>([]);

export default SearchContext;