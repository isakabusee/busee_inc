
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from './components/Navbar';
import Header from './components/Header';
import SomeInfo from './components/SomeInfo';
// import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <SomeInfo />
      {/* <Footer /> */}
      <h2>This site is under contruction..</h2>
  
    </div>
  );
}

export default App;
