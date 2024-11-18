import React from 'react'
import Header from '../components/Header/Header'
import Banner from '../components/Banner/Banner'
import AllProducts from '../components/sharedComponent/Products/AllProducts'

const Home = () => {
  return (
    <div>
        <Header/>
        <Banner/>
        <AllProducts/>
    </div>
  )
}

export default Home