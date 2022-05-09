import { BrowserRouter as Router, Routes, Route, Link, Switch, Redirect } from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
// import Navbar from './components/Navbar';
// import Header from './components/Header';
// import SomeInfo from './components/SomeInfo';
// import AboutUs from './components/AboutUs';
// import Footer from './components/Footer';
import Home from './components/Home';
// import About from './Pages/About';
import Info from './Pages/Info';
import AboutUs from './components/AboutUs';




function App() {
  return (

    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/info" element={<Info/>}/>
        </Routes>
      </Router>
  <h3>Bwire wants to understand....</h3>
    </div>


  );
}

export default App;
