import { useNavigate } from "react-router-dom";
import logo from "../assets/logo.jpg";
import { useLocation } from 'react-router-dom';

export const Navbar = () => {
  let navigate = useNavigate();
  const location = useLocation();
  const hideButtons = ['/login', '/signup', '/editor'];

  return (
    <header className="bg-white shadow-md">
      <nav className="flex items-center justify-between p-4 max-w-6xl mx-auto">
        <img src={logo} alt="Logo" className="h-10" />

        <div className="space-x-4">
          <button 
            onClick={() => { navigate("/") }} 
            className="text-blue-500 hover:underline"
          >
            Home
          </button>
          {!hideButtons.includes(location.pathname) && (
            <>
              <button 
                onClick={() => { navigate("/signup") }} 
                className="text-blue-500 hover:underline"
              >
                Signup
              </button>
              <button 
                onClick={() => { navigate("/login") }} 
                className="text-blue-500 hover:underline"
              >
                Login
              </button>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};
