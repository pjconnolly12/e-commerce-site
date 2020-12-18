import React from 'react';
import { Content } from './Content'
import { Navbar } from './Navbar'

export const App = (): JSX.Element => {
  return (
  <div>
    <Navbar />
    <Content />
  </div>
  )
}