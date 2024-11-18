import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../store/slices/cart';

const ProductCard = ({ id, discount, img, newPrice, oldPrice, name, weight }) => {
    const dispatch = useDispatch();
  
    return (
        <div className="bg-gray-100 p-[4px] hover:scale-[1.1] transition-transform duration-1000 rounded-md w-56">
            <div className='bg-white rounded-md'>
                <div className="bg-green-600 text-white w-[65%] rounded-e-2xl mb-4 py-1">{discount}%</div>
                <div className='flex justify-center overflow-hidden hover:scale-[1.2] transition-transform duration-500'>
                    <img className='h-24' src={img} alt={name} />
                </div>
                <div className='px-2 mt-2'>
                    <b>{name}</b>
                    <div className="flex gap-4 items-center">
                        <div className='text-xl font-bold'>{newPrice}</div>
                        <div className="line-through text-xl font-semibold text-gray-500">{oldPrice}</div>
                    </div>
                    <div className="flex justify-between">
                        <span className='mt-1'>{weight} g</span>
                        <div className='w-20 pb-1 mb-3 bg-green-200 rounded-xl flex justify-center items-center' onClick={() => dispatch(addToCart({ id, discount, img,oldPrice, newPrice, name, weight }))}>
                            <button 
                                className='text-green-600 text-lg font-bold' 
                                >
                                +
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;
