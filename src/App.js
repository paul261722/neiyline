import './App.css';
import { BrowserRouter as Router , Routes,Route,Link } from 'react-router-dom';
import Signup from './components/Signup'
import Signin from './components/Signin'
import 'bootstrap/dist/css/bootstrap.css'
import GetProducts from './components/Getproducts'
import Home from './components/Home'
import Payments from './components/payments'
import Viewdetails from "./components/Viewdetails"
import ContactUs from './components/Contactus';
import AboutUs from './components/Aboutus';
import Controler from './components/Controler'
import SingleProducts from './components/SingleProducts';

function App() {
  return (
    <Router>
      
      <div className='App'>
        <header className='App-header'>
        <header className="header-container">
          <div className="logo">
        <h1>Neiyline</h1>
      </div>
    </header>
      <div className="contact-info row justify-content-center mt-4">
        <p>(254)75720-7717</p>
        <p>Available Daily from 7am to 10pm</p>
        <a href="mailto:contact@neiyline.com" className="contact-link">Contact Us</a>
        <Link to ='/Signin'>Signin</Link>
        <Link to ='/Signup'>Signup</Link>
        <Link to ='/getproducts'>Getproducts</Link>
        <Link to ='/'>Home</Link>
        <Link to ='/Controler'>Controller</Link>

    

        
      </div>
    </header>
        <Routes>
          <Route path='/Signup' Component={Signup}></Route>
          <Route path='/Signin' Component={Signin}></Route>
          <Route path='/Getproducts' Component={GetProducts}></Route>
          <Route path='/' Component={Home}></Route>
          <Route path='/payments' Component={Payments}></Route>
          <Route path='/Viewdetails' Components={Viewdetails}></Route>
          <Route path='/Contactus' Components={ContactUs}></Route>
          <Route path='/Aboutus' Component={AboutUs}></Route>
          <Route path='/Controler' Component={Controler}></Route>
          <Route path='/SingleProducts' Component={SingleProducts}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
