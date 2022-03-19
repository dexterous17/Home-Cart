import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Footer from './Comp/Footer';
import Header from './Comp/Header';
import Product from './Comp/Product';
import Login from './Comp/Login';

function App() {

  return (
    <Router>
      <Header />
      <Routes>
          <Route exact path='/' element={<Product/>}/>
          <Route path='/login' element={<Login/>}></Route>
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
