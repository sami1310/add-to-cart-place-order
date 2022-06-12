
import './App.css';
import Cart from './components/Cart';
import Navbar from './components/Navbar';
import Products from './components/Products';

function App() {
  return (
    <div className="App">
      <Navbar></Navbar>
      <Products></Products>
      <Cart></Cart>

    </div>
  );
}

export default App;