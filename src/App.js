import './App.css';

import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Counter from './components/Counter';

function App() {
  return (
    <div className='App'>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/counter' element={<Counter />} />
      </Routes>
    </div>
  );
}

export default App;
