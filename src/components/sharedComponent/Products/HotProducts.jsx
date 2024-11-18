import React, { useEffect } from 'react'
import ProductCard from '../ProductCard'
import hotProducts from "../../assets/hotProducts";
const HotProducts = () => {
    useEffect(()=>{
        hotProducts.map(item=>{
            console.log(item)
        })
    },[])
  return (
    <div className="px-10 py-4 ">
        <div className="text-xl font-bold mb-4">Hot Products</div>
        <div className='flex justify-between'>
            {
                hotProducts.map((item,i)=>{
                    return <ProductCard key={i} discount={item.discount} img={item.img} newPrice={item.new_price} oldPrice={item.old_price} name={item.name} weight={item.weight} />
                })
            }
        </div>
    </div>
  )
}

export default HotProducts;