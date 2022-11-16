import logo from './logo.svg';
import './App.css';
import Header from './shared/Header/Header';
import Home from './components/Home/Home/Home';
import Footer from './shared/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import About from './components/Home/About/About';
import PageNotFound from './components/PageNotFound/PageNotFound';
import Blog from './components/Home/Blog/Blog';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
        <Route path='*' element={<PageNotFound></PageNotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
