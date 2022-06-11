
import './App.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <div>
        <Products></Products>
        <Cart></Cart>
      </div>
    </div>
  );
}

export default App;
