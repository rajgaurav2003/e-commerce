import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaPhone, FaEnvelope, FaClock, FaMapMarkerAlt } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-5">
          <div>
            <h2 className="text-2xl font-bold text-green-700">E-COMMERCE</h2>
            <p className="text-gray-600 mt-2">Awesome grocery store website template</p>
            <div className="mt-4 space-y-2 text-gray-600">
              <p className="flex items-center"><FaMapMarkerAlt className="mr-2 text-green-600" /> Kolkata, India</p>
              <p className="flex items-center"><FaPhone className="mr-2 text-green-600" /> (+91) - 540-025-124553</p>
              <p className="flex items-center"><FaEnvelope className="mr-2 text-green-600" /> rajgaurav2028@gmail.com</p>
              <p className="flex items-center"><FaClock className="mr-2 text-green-600" /> 10:00 - 18:00, Mon - Sat</p>
            </div>
          </div>

         
          {["Company", "Corporate", "Popular"].map((title, idx) => (
            <div key={idx}>
              <h3 className="font-semibold text-gray-800">{title}</h3>
              <ul className="mt-2 space-y-2 text-gray-600">
                <li><a href="#">About Us</a></li>
                <li><a href="#">Delivery Information</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Terms & Conditions</a></li>
                <li><a href="#">Contact Us</a></li>
                <li><a href="#">Support Center</a></li>
                <li><a href="#">Careers</a></li>
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-10 border-t pt-5 flex flex-col md:flex-row items-center justify-between text-gray-600 text-sm">
          <p>© 2025, Ecommerce Template. All rights reserved</p>
          <div className="flex space-x-4 mt-3 md:mt-0">
            <a href="#" className="bg-green-500 text-white p-2 rounded-full"><FaFacebookF /></a>
            <a href="#" className="bg-green-500 text-white p-2 rounded-full"><FaTwitter /></a>
            <a href="#" className="bg-green-500 text-white p-2 rounded-full"><FaInstagram /></a>
            <a href="#" className="bg-green-500 text-white p-2 rounded-full"><FaYoutube /></a>
          </div>
        </div>
      </div>
    </footer>
  );
}
