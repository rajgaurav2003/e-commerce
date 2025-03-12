import { FaSearch, FaHeart, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-3 bg-white shadow-md">
      <div className="flex items-center space-x-2">
        <div>
          <h1 className="text-lg font-bold text-green-600"> E-COMMERCE</h1>
          <p className="text-xs text-gray-500">BIG MEGA SHOP</p>
        </div>
      </div>

      <div className="flex items-center border rounded-md overflow-hidden w-96">
        <input
          type="text"
          placeholder="Search for items..."
          className="px-4 py-2 w-full focus:outline-none"
        />
        <button className="px-3 bg-gray-100">
          <FaSearch className="text-gray-600" />
        </button>
      </div>

      <div className="flex items-center space-x-6">
        <div className="relative flex items-center space-x-1 cursor-pointer">
          <div className="relative">
            <FaHeart className="text-gray-600 text-xl" />
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-1 rounded-full">
              0
            </span>
          </div>
          <span className="text-sm">Wishlist</span>
        </div>

        <div className="relative flex items-center space-x-1 cursor-pointer">
          <div className="relative">
            <FaShoppingCart className="text-gray-600 text-xl" />
            <span className="absolute -top-2 -right-2 bg-green-600 text-white text-xs px-1 rounded-full">
              0
            </span>
          </div>
          <span className="text-sm">Cart</span>
        </div>

       
        <Link to="/signup">
          <button className="px-4 py-2 bg-green-600 text-white rounded-md">
            Sign Up
          </button>
        </Link>
      </div>
    </header>
  );
}
