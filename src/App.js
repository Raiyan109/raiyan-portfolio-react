import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header';
import { Route, Routes } from 'react-router-dom';
import Contact from './components/Contact';



function App() {
  return (
    <div className="App">
      <Header></Header>

      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/contact' element={<Contact />}></Route>
      </Routes>
    </div>
  );
}

export default App;
