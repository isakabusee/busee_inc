import { BrowserRouter as Router, Routes, Route, Link, Switch, Redirect } from 'react-router-dom'
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
// import Navbar1 from './components/Navbar';
// import Header from './components/Header';
// import SomeInfo from './components/SomeInfo';
// import AboutUs from './components/AboutUs';
import Footer from './components/Footer';
import Home from './components/Home';
// import About from './Pages/About';
import Info from './components/Info';
import AboutUs from './components/AboutUs';
import Navbar1 from './components/Navbar1';
import SomeInfo from './components/SomeInfo';




function App() {
  return (

    <div className="App">
      <div className="wrapper">
      <Router>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<AboutUs/>}/>
          <Route path="/info" element={<Info/>}/>
        </Routes>
      </Router>
      </div>
    </div>


  );
}

export default App;
