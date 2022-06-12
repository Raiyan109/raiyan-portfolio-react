import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home/Home';
import Header from './components/Shared/Header';



function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
    </div>
  );
}

export default App;
