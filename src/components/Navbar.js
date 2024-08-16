import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <div className='flex flex-row justify-between items-center px-3'>
           
           <Link to="/" className='flex flex-row items-center'>
            <img className='size-9 m-3' src={"https://www.ciim.in/wp-content/uploads/2021/02/flipkart.png"} alt="Flipkart" />
            <h1>FLIPKART</h1>
            </Link>

        <input className='border-2 border-gray-300 rounded-md p-2 m-3 w-96' type="text" placeholder='Search' />

            <div className='flex flex-row items-center'>
                <button className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 m-4'>Login</button>
                <button className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 my-4 mx-auto'>Signup</button>
            </div>
            <Link to="/cart"><i class="fa-solid fa-cart-shopping"></i> Cart</Link>
        </div>
    );
}

export default Navbar;