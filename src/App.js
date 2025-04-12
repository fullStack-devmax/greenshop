import './index.scss';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from './pages/Layout';
import { Home } from './pages/Home';
import { Shop } from './pages/Shop';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route index path="/" element={<Home/>} />
          <Route path="/shop" element={<Shop/>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;


