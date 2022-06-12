import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';
import Details from './components/Home/Details';



function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/project/:id' element={<Details />}></Route>
      </Routes>
    </div>
  );
}

export default App;
