import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='w-full bg-gray-800 text-white p-4 flex justify-between items-center fixed z-10'>
      <Link to="/">
        <div className='mx-3.5'>
            <h1 className='text-2xl font-medium'>Odin's Foodary</h1>
            <p>"Taste the magic of your kitchen"</p>
        </div> 
      </Link>
      <nav className='flex space-x-4 mr-3.5'>
          <Link to="/" className='hover:underline hover:text-shadow-[0_0_2px_1px_#000]'>Home</Link>
          <Link to="/community" className='hover:underline hover:text-shadow-[0_0_2px_1px_#000]'>Community</Link>
          <Link to="/recipe" className='hover:underline hover:text-shadow-[0_0_2px_1px_#000]'>Recipe</Link>
      </nav>
    </div>
  )
}

export default Header