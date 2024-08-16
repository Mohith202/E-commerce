import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import data from '../data.json';
import Card from '../utility/Card';
import './productList.css';



function ProductList({ addToCart }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  const handleAddToCart = (product) => {
    addToCart(product);
    setCart(prevCart => [...prevCart, product]);
    setCartTotal(prevTotal => prevTotal + product.price);
    toast.success(`Added ${product.title} to cart!`);
  };


  useEffect(() => {
    // fetch('https://fakestoreapi.com/products')
    //   .then(res => res.json())
    //   .then(data => setProducts(data))
    //   .catch(error => console.error('Error fetching products:', error));
    setProducts(data);


  }, []);

  return (
    <div>
      <h2 className='text-2xl font-bold m-4 '>Products</h2>
      <ToastContainer />
      <div className="product-list">
        {products.map(product => (
          <Card key={product.id}>

            <div className='flex flex-col items-center justify-center'>
              <img className='size-1/2 m-4 p-auto object-contain hover:scale-105 transition-transform duration-300' src={product.image} alt={product.title} style={{ objectFit: 'contain' }} />
            </div>

            <h3 className='text-md font-bold m-3 '>{product.title}</h3>
            <p className='text-lg font-bold '>${product.price}</p>
            <p className='text-sm font-bold line-clamp-3'>{product.description}</p>
            <button className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 my-4 mx-auto' onClick={() => handleAddToCart(product)}>Add to Cart</button>
          </Card>
        ))}
      </div>
    </div>
  );
}

export default ProductList;