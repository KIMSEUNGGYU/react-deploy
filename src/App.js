import './App.css';

import Header from './components/Header';
import Home from './components/Home';
import About from './components/About';
import Counter from './components/Counter';

function App() {
  return (
    <div className='App'>
      <Header />
      <Home />
      <About />
      <Counter />
    </div>
  );
}

export default App;
