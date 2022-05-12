// import logo from './logo.svg';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import About from './pages/About';
import Home from './pages/Home';
import Projects from './pages/Projects';
import { Route, Routes } from "react-router-dom";

function App() {
const URL = "https://express-react-rk.herokuapp.com/";
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/projects">
          <Projects URL={URL} />
        </Route>
        <Route path="/about">
          <About URL={URL} />
        </Route>
      </Routes>
      <Footer />
    </div>
  );
  }


export default App;
