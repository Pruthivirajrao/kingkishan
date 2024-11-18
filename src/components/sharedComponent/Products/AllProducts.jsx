import React from 'react'
import Vegetable from './Vegetable'
import Fruits from './Fruits'
import BestSeller from './BestSeller'
import HotProducts from './HotProducts'
import Categories from '../Categories/Categories'

const AllProducts = () => {
  return (
    <div>
        <Vegetable/>
        <Fruits/>
        <BestSeller/>
        <Categories/>
        <HotProducts/>
    </div>
  )
}

export default AllProducts