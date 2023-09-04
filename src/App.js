import { Routes, Route } from 'react-router';
import './App.css';
import Home from './pages/Home';
import Details from './pages/Details';
import Headers from './components/Header';

function App() {
  return (
    <>
      <Headers />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/details" element={<Details />} />

      </Routes>
    </>
  );
}

export default App;
