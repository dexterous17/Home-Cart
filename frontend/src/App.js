import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Footer from './Comp/Footer/Footer';
import Header from './Comp/Header/Header';
import Home from './Comp/Home';
import Login from './Comp/Login';
import Signup from './Pages/Signup/Signup';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/signup' element={<Signup/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
