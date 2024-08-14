import 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
  return (
    <nav className="flex justify-between items-center p-5 border-b bg-white shadow-md dark:bg-cyan-950">
      <div className="text-2xl font-bold">SKILLSWAP</div>
      <div className="space-x-4">
        <Link to="/signup" className="text-950 hover:text-950">Sign up</Link>
        <Link to="/login" className="text-950 hover:text-950">Login</Link>
      </div>
    </nav>
  );
};

export default Nav;
