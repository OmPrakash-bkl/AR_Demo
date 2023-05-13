import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import Product from './Pages/Product/Product';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App"> 
      {/* <BrowserRouter basename="/AR_Demo"> */}
      <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/Products" exact element={<Products />} />
      <Route path="/Product/:ProId" exact element={<Product />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
