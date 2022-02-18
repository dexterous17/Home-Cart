import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css';
import Layout from './Comp/Layout';
import Product from './Comp/Product';

function App() {
  return (
    <Router>
      <Layout>
      <Routes>
          <Route exact path='/' element={<Product/>}/>
          <Route></Route>
          <Route></Route>
      </Routes>
      </Layout>
    </Router>
  );
}

export default App;
