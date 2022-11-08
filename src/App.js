import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from './Pages/Home';
import Rent from './Pages/Rent';
import Buy from './Pages/Buy';
import Sell from './Pages/Sell';
import Error from './Error';
import Navbar from './Components/Navbar'
function App() {
  return (
    
     <BrowserRouter >
      <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/rent" element={<Rent />} />
          <Route path="/buy" element={<Buy />} />
          <Route path="/sell" element={<Sell/>} />

          <Route path="*" element={<Error />} />
       
      </Routes>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
