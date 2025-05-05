import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaGamepad, FaShoppingCart, FaUser, FaSearch, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle search functionality
    console.log('Searching for:', searchQuery);
    setSearchQuery('');
  };

  return (
    <nav className="bg-gray-900 text-white shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          {/* Logo and main nav */}
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <FaGamepad className="h-8 w-8 text-purple-500" />
              <span className="ml-2 text-xl font-bold">GameHub</span>
            </Link>
            
            <div className="hidden md:block ml-10">
              <div className="flex space-x-4">
                <NavLink 
                  to="/" 
                  className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-purple-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                >
                  Home
                </NavLink>
                <NavLink 
                  to="/games" 
                  className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-purple-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                >
                  Games
                </NavLink>
                <NavLink 
                  to="/consoles" 
                  className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-purple-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                >
                  Consoles
                </NavLink>
                <NavLink 
                  to="/accessories" 
                  className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-purple-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                >
                  Accessories
                </NavLink>
                <NavLink 
                  to="/deals" 
                  className={({isActive}) => `px-3 py-2 rounded-md text-sm font-medium ${isActive ? 'bg-purple-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'}`}
                >
                  Hot Deals
                </NavLink>
              </div>
            </div>
          </div>

          {/* Search bar */}
          <div className="hidden md:flex items-center flex-1 max-w-md mx-4">
            <form onSubmit={handleSearch} className="w-full">
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FaSearch className="text-gray-400" />
                </div>
                <input
                  type="text"
                  placeholder="Search games..."
                  className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-gray-600 focus:text-white sm:text-sm"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
            </form>
          </div>

          {/* Right side icons */}
          <div className="hidden md:flex items-center">
            <Link to="/cart" className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700">
              <FaShoppingCart className="h-6 w-6" />
              <span className="sr-only">Cart</span>
            </Link>
            <Link to="/account" className="ml-2 p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700">
              <FaUser className="h-6 w-6" />
              <span className="sr-only">Account</span>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              {isMenuOpen ? (
                <FaTimes className="block h-6 w-6" />
              ) : (
                <FaBars className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <NavLink 
              to="/" 
              className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gray-900"
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink 
              to="/games" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={toggleMenu}
            >
              Games
            </NavLink>
            <NavLink 
              to="/consoles" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={toggleMenu}
            >
              Consoles
            </NavLink>
            <NavLink 
              to="/accessories" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={toggleMenu}
            >
              Accessories
            </NavLink>
            <NavLink 
              to="/deals" 
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
              onClick={toggleMenu}
            >
              Hot Deals
            </NavLink>
          </div>
          <div className="pt-4 pb-3 border-t border-gray-700">
            <div className="flex items-center px-5">
              <form onSubmit={handleSearch} className="w-full">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <FaSearch className="text-gray-400" />
                  </div>
                  <input
                    type="text"
                    placeholder="Search games..."
                    className="block w-full pl-10 pr-3 py-2 border border-transparent rounded-md leading-5 bg-gray-700 text-gray-300 placeholder-gray-400 focus:outline-none focus:bg-gray-600 focus:text-white sm:text-sm"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                </div>
              </form>
            </div>
            <div className="mt-3 px-2 flex space-x-4">
              <Link 
                to="/cart" 
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700"
                onClick={toggleMenu}
              >
                <FaShoppingCart className="h-6 w-6" />
                <span className="sr-only">Cart</span>
              </Link>
              <Link 
                to="/account" 
                className="p-2 rounded-full text-gray-400 hover:text-white hover:bg-gray-700"
                onClick={toggleMenu}
              >
                <FaUser className="h-6 w-6" />
                <span className="sr-only">Account</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;