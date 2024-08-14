import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="flex justify-between items-center p-5 border-b bg-white shadow-md dark:bg-neutral-800">
      <Link to="/"><div className="text-2xl font-bold">SKILLSWAP</div></Link>
      
      <div className="space-x-4">
        <Link to="/signup" className="text-gray-600 hover:text-gray-900">Sign up</Link>
        <Link to="/login" className="text-gray-600 hover:text-gray-900">Login</Link>
        <Link to="/about" className="text-gray-600 hover:text-gray-900">About us</Link>

      </div>
    </nav>
  );
};

export default Nav;
