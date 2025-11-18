import logo from './logo.svg';
import './App.css';
import Counter from './component/counter';
import Counter2 from './version1/Counter2';
import ProductPage from './component/ProductPage';

function App() {
  return (
    <>
    <Counter />
    <Counter2 />

    <ProductPage />
    </>
  );
}

export default App;
