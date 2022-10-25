import './App.css';
import CheckOut from './UI/Checkout/Checkout';
import Header from './UI/Header';

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="container">
            <CheckOut/>
        </div>
    </div>
  );
}

export default App;
