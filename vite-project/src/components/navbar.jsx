import {useNavigate} from "react-router-dom"
import logo from "../assets/logo.jpg"
import { useLocation } from 'react-router-dom';


export const Navbar=()=>
{
    let navigate=useNavigate()
    const location = useLocation();
    const hideButtons = ['/login', '/signup', '/editor'];
    return(
        <header className="rs">
        <nav>
          <img src={logo} alt="" />

          <div>
          <button onClick={()=>{navigate("/")}}>Home</button>
          {!hideButtons.includes(location.pathname) && (
        <>
          <button onClick={()=>{navigate("/signup")}}>Signup</button>
          <button onClick={()=>{navigate("./login")}}>Login</button>
        </>
      )}
            
          </div>
        </nav>
      </header>
    )
}