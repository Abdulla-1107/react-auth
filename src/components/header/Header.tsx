import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-[#3E3F5B] py-4 shadow-md rounded-[10px] mt-3">
      <div className="container mx-auto flex items-center justify-between px-4 flex-wrap">
        <h1 className="text-white text-2xl font-bold">MyApp</h1>
        <nav className="flex gap-6 flex-wrap mt-2 sm:mt-0">
          <Link
            to="/"
            className="text-white hover:text-yellow-300 transition duration-200 font-medium"
          >
            Home
          </Link>
          <Link
            to="/otp"
            className="text-white hover:text-yellow-300 transition duration-200 font-medium"
          >
            Register
          </Link>
          <Link
            to="/contact"
            className="text-white hover:text-yellow-300 transition duration-200 font-medium"
          >
            Contact
          </Link>
          <Link
            to="/statistic"
            className="text-white hover:text-yellow-300 transition duration-200 font-medium"
          >
            Statistic
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
