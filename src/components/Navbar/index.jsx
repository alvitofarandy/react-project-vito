import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-blue-500 p-3 shadow-lg flex justify-between items-center px-6 md:px-20">
      <div className="flex space-x-3 items-center">
        <div className="rounded-full border-white border w-5 h-5 shadow-lg flex items-center justify-center">
          <div className="rounded-full border-white border w-4 h-4 flex items-center justify-center">
            <div className="rounded-full border-white border w-1 h-1 bg-white"></div>
          </div>
        </div>
        <div className="text-white text-lg font-semibold">Alvito Corp</div>
      </div>
      <div>
        <div className="flex space-x-3 md:space-x-5 text-white">
          <Link to="/" className="hover:underline">
            <p>About Us</p>
          </Link>
          <Link to="/menu-page" className="hover:underline">
            <p>Menu</p>
          </Link>
          <Link to="/login" className="hover:underline">
            <p>Login</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
