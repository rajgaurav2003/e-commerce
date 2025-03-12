import { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaChevronDown, FaHeadphones } from "react-icons/fa";

const categories = [
  { name: "Fashion", subcategories: [{ label: "Men", path: "/men" }, { label: "Women", path: "/women" }, { label: "Kids", path: "/kids" }] },
  { name: "Electronics", subcategories: [{ label: "Mobiles", path: "/mobiles" }, { label: "Laptops", path: "/laptops" }, { label: "Accessories", path: "/accessories" }] },
  { name: "Bags", subcategories: [{ label: "Backpacks", path: "/backpacks" }, { label: "Handbags", path: "/handbags" }, { label: "Travel Bags", path: "/travel-bags" }] },
  { name: "Footwear", subcategories: [{ label: "Sneakers", path: "/sneakers" }, { label: "Boots", path: "/boots" }, { label: "Sandals", path: "/sandals" }] },
  { name: "Groceries", subcategories: [] },
  { name: "Beauty", subcategories: [] },
  { name: "Shop", subcategories: [{ label: "Offers", path: "/offers" }, { label: "New Arrivals", path: "/new-arrivals" }, { label: "Best Sellers", path: "/best-sellers" }] },
];

export default function Navbar() {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [browseOpen, setBrowseOpen] = useState(false);
  const [navDropdownOpen, setNavDropdownOpen] = useState(null);

  const handleBrowseClick = () => {
    setBrowseOpen(!browseOpen);
    setNavDropdownOpen(null); 
    setOpenDropdown(null); 
  };

  const handleNavClick = (category) => {
    setNavDropdownOpen(navDropdownOpen === category ? null : category);
    setBrowseOpen(false); 
  };

  return (
    <nav className="flex justify-between items-center bg-white mt-1 shadow-md p-4 relative">
      <div className="relative">
        <button
          className="bg-green-500 text-white px-4 py-2 flex items-center rounded-lg"
          onClick={handleBrowseClick}
        >
          <FaBars className="mr-2" /> Browse All Categories <FaChevronDown className="ml-2" />
        </button>

        {browseOpen && (
          <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg w-52 z-10 p-2">
            {categories.map((category, index) => (
              <li key={index} className="relative group">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-200 flex justify-between items-center"
                  onClick={() =>
                    setOpenDropdown(openDropdown === category.name ? null : category.name)
                  }
                >
                  {category.name} {category.subcategories.length > 0 && <FaChevronDown />}
                </button>
                {category.subcategories.length > 0 && openDropdown === category.name && (
                  <ul className="absolute left-full top-0 mt-0 bg-white shadow-lg rounded-lg w-40 z-10 p-2">
                    {category.subcategories.map((sub, subIndex) => (
                      <li key={subIndex}>
                        <Link
                          to={sub.path}
                          className="block px-4 py-2 hover:bg-gray-200 rounded"
                          onClick={handleBrowseClick}
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        )}
      </div>
      <ul className={`hidden md:flex space-x-6 ${browseOpen ? "hidden" : ""}`}>
        {categories.map((category, index) => (
          <li key={index} className="relative group">
            <button
              className="flex items-center space-x-1 hover:text-green-500"
              onClick={() => handleNavClick(category.name)}
            >
              {category.name} {category.subcategories.length > 0 && <FaChevronDown />}
            </button>

            {category.subcategories.length > 0 && navDropdownOpen === category.name && (
              <ul className="absolute left-0 mt-2 bg-white shadow-lg rounded-lg p-2 w-40 z-10">
                {category.subcategories.map((sub, subIndex) => (
                  <li key={subIndex}>
                    <Link
                      to={sub.path}
                      className="block px-4 py-2 hover:bg-gray-200 rounded"
                      onClick={() => setNavDropdownOpen(null)}
                    >
                      {sub.label}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>

      {/* Right Section */}
      <div className="flex items-center md:text-s space-x-2">
        <FaHeadphones className="text-gray-600 text-xl" />
        <div>
          <p className="text-green-500 font-bold">1900 - 888</p>
          <p className="text-xs text-gray-500">24/7 Support Center</p>
        </div>
      </div>
    </nav>
  );
}
