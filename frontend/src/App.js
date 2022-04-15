import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Footer from './Comp/Footer/Footer';
import Header from './Comp/Header/Header';
import Home from './Comp/Home';
import Login from './Pages/Login/Login';
import SingleOrder from './Pages/Order/Single Order/SingleOrder';
import SingleProduct from './Pages/Product/SingleProduct/SingleProduct';
import Signup from './Pages/Signup/Signup';
import Help from './Pages/Single pages/Help';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/Products/:id' element={<SingleProduct/>} />
        <Route path='/singleorder' element={<SingleOrder />}/>
        <Route path='/Help' element={<Help/>}/>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
