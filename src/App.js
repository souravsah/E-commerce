import "./App.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Navbar from "./core/Navbar/Navbar";
import Footer from "./core/Footer/Footer";
import { Ecommercedata } from "./Context/Ecommercedata";
import Singlepage from "./core/SinglePage/Singlepage"
import {Provider} from 'react-redux'
import store from "./store";
import ProductSinglePage from "./pages/ProductSinglepage/ProductSinglePage";

function App() {
  return (
    <>
    <Provider store={store}>
    {/* <Ecommercedata> */}
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<HomePage/>}/>
      <Route  path="/products/:id" element={<ProductSinglePage/>}/>
    </Routes>
    </BrowserRouter>
    {/* </Ecommercedata> */}

    </Provider>
    </>
  );
}

export default App;
