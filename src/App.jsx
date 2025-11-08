import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import SignIn from "./components/SignIn";
import SignUp from "./components/SignUp";
import AboutUs from "./components/AboutUs";
import Dashboard  from "./components/dashboard"; 

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard />} ></Route>
        <Route path="/signin" element={<SignIn />} ></Route>
        <Route path="/signup" element={<SignUp />} ></Route>
        <Route path="/aboutus" element={<AboutUs />} ></Route>

      </Routes>
    </Router>
  );
}

export default App;