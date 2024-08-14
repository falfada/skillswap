import { Link } from 'react-router-dom';
import logo from '../assets/img/SkillSwapLOGO.png';

const Nav = () => {
  return (
    <nav className="flex justify-between items-center p-2 bg-cyan-900">
      <img src={logo} alt="Skillswap's Logo" className="logo " style={{ width: '100px', height: 'auto' }} />
      <Link to="/"><div className="text-2xl text-lime-500	font-bold"></div></Link>
      
      <div className="space-x-4">
        <Link to="/signup" className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-cyan-950 shadow-md transition duration-150 ease-in-out bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 hover:text-white disabled:opacity-50">Sign up</Link>
        <Link to="/login" className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal bg-cyan-950 shadow-md transition duration-150 ease-in-out bg-gradient-to-r from-cyan-400 to-cyan-500 hover:from-cyan-600 hover:to-cyan-700 focus:outline-none focus:ring-2 focus:ring-cyan-700 hover:text-white disabled:opacity-50">Login</Link>
      </div>
    </nav>
  );
};

export default Nav;
