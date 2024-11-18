import React, { useEffect } from 'react'
import ProductCard from '../ProductCard'
import Vegies from "../../assets/Vegies";
const Vegetable = () => {
  return (
    <div className="px-10 py-4 ">
        <div className="text-xl font-bold mb-4">Organic Vegetable</div>
        <div className='flex justify-between'>
            {
                Vegies.map((item,i)=>{
                    return <ProductCard key={i} id={item.id} discount={item.discount} img={item.img} newPrice={item.new_price} oldPrice={item.old_price} name={item.name} weight={item.weight} />
                })
            }
        </div>
    </div>
  )
}

export default Vegetable;