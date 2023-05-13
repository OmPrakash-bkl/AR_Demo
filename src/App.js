import Home from './Pages/Home/Home';
import Products from './Pages/Products/Products';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {
  return (
    <div className="App"> 
      <BrowserRouter>
      <Routes>
      <Route path="/" exact element={<Home />} />
      <Route path="/Products" exact element={<Products />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
