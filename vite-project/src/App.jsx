import { Routes, Route } from "react-router-dom";
import { Home } from "./components/home";
import LoginForm from "./components/LoginForm";
import SignUpForm from "./components/SignUpForm";
import EditorPage from "./pages/EditorPage";
import Presentation from "./components/lastpresentaion";
import { Navbar } from "./components/navbar";
import "./styles/styles.css";

function App() {
  return (
    <>
      <Navbar />
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/editor" element={<EditorPage />} />
          <Route path="/slideshow" element={<Presentation />} />
          {/* Add a route for undefined paths */}
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
