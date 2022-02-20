import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Layout from './Comp/Layout';
import Product from './Comp/Product';
import Login from './Comp/Login';

function App() {
  return (
    <Router>
      <Layout>
      <Routes>
          <Route exact path='/' element={<Product/>}/>
          <Route path='/login' element={<Login/>}></Route>
          <Route></Route>
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
