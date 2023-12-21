import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Restview from './pages/Restview';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
    <Header/>
    <Routes>
<Route path="/" element={<Home/>
}/>

  
<Route path="/rest/:id" element={<Restview/>}/>
        
  
   </Routes>
   <Footer/>
    </div>
  );
}

export default App;
