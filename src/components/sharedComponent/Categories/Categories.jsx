import React from 'react'
import CategoriesCard from './CategoriesCard'
import categories from '../../assets/categories/categories'

const Categories = () => {
  return (
    
      <div className='px-10'>
        <div className='text-xl font-bold'>Explore Categories</div>
    <div className='flex items-center flex-wrap gap-4'>
        {
            categories.map((item,i)=>{
                return <CategoriesCard key={i} img={item.img} category={item.category} />
            })
        }
</div>
    </div>
  )
}

export default Categories