import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Details from './components/Home/Details';
import Announcement from './components/Shared/Announcement';
import Blogs from './components/Blogs';
import Footer from './components/Shared/Footer';
import Experience from './components/Experience/Experience';
import About from './components/About/About';
import Loading from './components/Shared/Loading';



function App(loading) {
  if (loading) {
    <Loading />
  }
  return (
    <div className="App">
      <Announcement></Announcement>
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/blogs' element={<Blogs />}></Route>

        <Route path='/project/:id' element={<Details />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
