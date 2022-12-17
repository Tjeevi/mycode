
import './App.css';
import Navbar from "./Component/Navbar"
import Home from './Component/Home';
import About from "./Component/About"
import Product from "./Component/Product"
import Contact from "./Component/Contact"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Route,Routes} from "react-router-dom"



function App() {
  return (
    <div >
          <Navbar/>
          {/* <Home/>
          <About/>
          <Product/>
          <Contact/>       */}
       <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='aboutpage' element={<About/>}/>
        <Route path='productpage' element={<Product/>}/>
        <Route path='contactpage' element={<Contact/>}/>

      </Routes>   
        

    </div>
      )
}

export default App;
