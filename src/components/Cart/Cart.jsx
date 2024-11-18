import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, clearCart, removeFromCart } from "../../store/slices/cart";
import Header from "../Header/Header"
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch()
  console.log(cart);
  return (
    <div>
      <Header/>
      {cart.length == 0 ? (
        <div className="flex justify-center flex-col items-center">
          <h2 className="mb-4">Your cart is Empty</h2>
          <img src="https://cdn-icons-png.flaticon.com/128/10423/10423297.png" alt="" />
        </div>
      ) : (
        <div className=" px-3">
          {cart.map((e, i) => (
            <div key={i} className="flex justify-between bg-gray-100 mt-2 items-center">
                <div className="flex gap-3">
                  <div className="overflow-hidden">
                    <img
                      src={e.img}
                      alt={e.name}
                      className="transition-transform hover:scale-[1.1] duration-700 h-20 w-20"
                    />
                  </div>
                  <div>
                    <p>{e.name}</p>
                    <p>Sold By:</p>
                    <p>Quantity -{e.weight} g</p>
                  </div>
                </div>
              <div>
                <p>Price</p>
                <p>&#8377;{e.newPrice} <span className="line-through font-bold text-gray-500 pl-2">&#8377;{e.oldPrice}</span> </p>
                <p className="text-green-600 text-md">You Save : &#8377;{e.oldPrice-e.newPrice}</p>
              </div>
              <div>
                <p className="text-gray-600">Qty</p>
                <div className="flex gap-5 items-center mt-2">
                  <div className="p-2 w-6 h-6 flex justify-center items-center bg-gray-200 rounded-full"><button onClick={()=>dispatch(removeFromCart(e))}>-</button></div>
                  <p>{e.quantity}</p>
                  <div className="p-2 w-6 h-6 flex justify-center items-center bg-gray-200 rounded-full"><button onClick={()=>dispatch(addToCart(e))}>+</button></div>
                </div>
              </div>
              <div>
                <p className="text-gray-600">Total</p>
                <p>&#8377;{e.newPrice * e.quantity}</p>
              </div>
              <div>
                <div className="text-gray-600">Action</div>
                <button onClick={()=>dispatch(clearCart(e))}>Remove</button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Cart;