import './index.scss';

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Layout } from './pages/Layout';

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route index path="/" element={<h1>Layout initial</h1>} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;


