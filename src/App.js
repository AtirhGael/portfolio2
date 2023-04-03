import './App.css';
import Home from './pages/Home';
import{
  Routes,
  Route,
} from 'react-router-dom'
import Blog from './pages/Blog';
import Oop from './pages/Oop';

function App() {
  return (
    <div className="App">
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/blog' element={<Blog/>} />
          <Route path='blog/:blogs' element={<Oop/>} />
        </Routes>
    </div>
  );
}

export default App;
