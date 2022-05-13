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
import {Provider} from 'react-redux'
import store from "./store";
function App() {
  return (
    <>
    <Provider store={store}>
    {/* <Ecommercedata> */}
    <BrowserRouter>
    <Routes>
      <Route  path="/" element={<HomePage/>}/>
    </Routes>
    </BrowserRouter>
    {/* </Ecommercedata> */}

    </Provider>
    </>
  );
}

export default App;
