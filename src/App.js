import './App.css';
import Home from "./Components/Home";
import Login  from "./Components/Login";
import Signup from './Components/Signup';
import Contact  from "./Components/Contact";
import About from './Components/About';
import Blog from "./Components/Blog";
import Navbar from './Components/Navbar';
import Shopping from "./Components/Shopping";


import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App"> 
    
      <BrowserRouter>
      <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Shopping" element={<Shopping />}></Route>
          <Route path="/Blog" element={<Blog />}></Route>
          
          

           
        </Routes>
      </BrowserRouter>
    </div>
  );
}


export default App;
