import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Cart({ cartItems, removeFromCart, setCartItems }) {
  const [subtotal, setSubtotal] = useState(0);

  const navigate = useNavigate();
  let total = 0;


  useEffect(() => {
    cartItems.forEach((item) => {
      total += item.price * item.quantity; // Multiply price by quantity
    });
    setSubtotal(total);
  });



  const increaseQuantity = (productId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === productId) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    console.log(updatedCartItems);
    setCartItems(updatedCartItems); // Update the state to trigger re-render
  };

  const decreaseQuantity = (productId) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === productId ) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    }).filter(item => item.quantity > 0); // Remove the item if quantity is 0
    setCartItems(updatedCartItems); // Update the state to trigger re-render
  };




  console.log(cartItems);

  
if (cartItems.length === 0) {
  return <div className='flex flex-col justify-center items-center m-10'>
    <h6 className='text-2xl font-bold m-4'>
    No items in the cart! Please add some items to the cart.
    </h6>
    <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => navigate('/')}>
    Go to Home
    </button>
    </div>;
}else{  
    return (
      <div>
      <h2 className='text-2xl font-bold m-4'>Cart</h2>
      
        {cartItems.map((product, index) => (

          <div className='w-1/2 m-4 p-4 border-4 border-black-600 rounded-md border-solid  mx-auto flex flex-row text-base cartcard' key={product.id}>
            <img className='size-1/4 border-2 border-black rounded-md border-solid hover:scale-105 transition-transform duration-300' src={product.image} alt={product.title} style={{ objectFit: 'contain' }} />
            <div className='flex flex-col justify-around items-start align-middle w-3/4'>
              <h4 className='text-lg font-bold m-3'>{product.title}</h4>
              <div className='quantity-selector flex flex-row justify-around m-1 w-full'>

                <div className='flex flex-row justify-around w-8/2 '>

                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => decreaseQuantity(product.id)}>-</button>

                  <span className='text-lg font-bold px-4'>{product.quantity}</span>

                  <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' onClick={() => increaseQuantity(product.id)}>+</button> {/* Increase button */}
                </div>

                <p className='price font-bold text-lg align-middle sm:text-base'>${(product.quantity * product.price).toFixed(2)}</p>
              </div>
            </div>
          </div>
        ))}
        )
      
      

          <div className='flex flex-col justify-center items-center'>
            <button className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded' >Buy Now
            </button>
            <h2 className='text-2xl font-bold m-4'>Subtotal:${subtotal.toFixed(2)}</h2>
          </div>
        
      
    </div>
  );
}
}

export default Cart;