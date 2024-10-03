import './App.scss';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
// pages
import {Home, Category, Cart} from "./pages/index";
// components
import Navbar from './components/Navbar/Navbar';
import Footer from "./components/Footer/Footer";
import {Provider} from 'react-redux';
import store from "./store/store";
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import ResetPassword from './pages/ResetPassword';

function App() {
  return (
    <div className="App">
      <Provider store = {store}>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path = "/" element = {<Home />} />
            <Route path = "/category/:id" element = {<Category />} />
            <Route path = "/cart" element = {<Cart />} />
            <Route path = "/Login" element = {<Login />} />
            <Route path = "/signup" element = {<SignUp />} />
            <Route path = "/restpassword" element = {<ResetPassword/>} />

            
             
          </Routes>
          <Footer />
        </BrowserRouter>
      </Provider>
    </div>
  );
}

export default App;
