import {Routes,Route} from 'react-router-dom'
import Collection from './pages/Collection'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Product from './pages/Product'
import Cart from './pages/Cart'
import Login from './pages/Login'
import PlaceOrder from './pages/PlaceOrder'
import Orders from './pages/Orders'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import SearchBar from './components/SearchBar'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Verify from './pages/Verify'
import PublicRoute from "./pages/PublicRoute";
import ProtectedRoute from "./pages/ProtectedRoute";

const App = () => {
  return (
    <>
    <Navbar/>
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]'>
      <ToastContainer/> 
<SearchBar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/collection' element={<Collection/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/product/:productId' element={<Product/>} />
        <Route path='/cart' element={<ProtectedRoute element={<Cart />} />} />
        <Route path='/login' element={<PublicRoute element={<Login />} />} />
        <Route path='/place-order'  element={<ProtectedRoute element={<PlaceOrder />} />} />
        <Route path='/orders' element={<ProtectedRoute element={<Orders />} />}/>
        <Route path="/verify" element={<Verify />} />
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App