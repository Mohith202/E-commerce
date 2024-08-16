import { Link } from 'react-router-dom';
import './Navbar.css';



function Navbar() {
    return (
        <div className='Navbar flex flex-row justify-between items-center px-3 w-11/12 mx-auto'>

            {/* <div className='Navbar-small-container flex flex-row items-center'>
                <Link to="/" className='logo flex flex-row items-center sm:flex-col md:flex-col lg:flex-row xl:flex-row'>
                    <img className='size-9 m-3' src={"https://www.ciim.in/wp-content/uploads/2021/02/flipkart.png"} alt="Flipkart" />
                    <h1>FLIPKART</h1>
                </Link>
                <div className='Navbar-small-container flex flex-row items-center'>
                    <button className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 m-4'>Login</button>
                    <button className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 my-4 mx-auto'>Signup</button>
                </div>

            </div> */}



            <div className='small-container  '>
                <span className='border-2 border-black-300  m-1  w-5 h-1'></span>
                <span className='border-2 border-black-300 m-1 w-5 h-1'></span>
                <span className='border-2 border-black-300  m-1 w-5 h-1'></span>
            </div>

            <Link to="/" className='logo flex flex-row items-center '>
                <img className='size-9 m-3' src={"https://www.ciim.in/wp-content/uploads/2021/02/flipkart.png"} alt="Flipkart" />
                <h1>FLIPKART</h1>
            </Link>

            <input className='search-bar border-2 border-gray-300 rounded-md p-2 m-3 w-96' type="text" placeholder='Search' />

            <div className='Navbar-small-container flex flex-row items-center'>
                <button className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 m-4'>Login</button>
                <button className='bg-blue-500 text-white p-2 rounded-md hover:bg-blue-700 my-4 mx-auto'>Signup</button>
            </div>
            <Link to="/cart"><i class="fa-solid fa-cart-shopping"></i> Cart</Link>
        </div>
    );
}

export default Navbar;