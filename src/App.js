import './App.css';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
import Registration from './Pages/Registration';
import Login from './Pages/Login';
import Home from './Pages/Home';
import Navbar from './components/Navbar/Navbar';
import { useSelector } from 'react-redux';
import Error from './Pages/Error';
import AllTask from './Pages/AllTask';
import { Toaster } from 'react-hot-toast';


function App() {
  const login = useSelector((state) => state.registration.login.login);
  return (
    <Router>
    <Navbar/>
      <Toaster/>
      <Routes>
        <Route path='/login' element={<Login/>}/>
        {login ?
          <>
            <Route path='/alltask' element={<AllTask/>}/>
            <Route path='/home' element={<Home/>}/>
            <Route path='*' element={<Error/>}/>
          </>
          :
          <>
            <Route path='/' element={<Registration/>}/>
            <Route path='*' element={<Error/>}/>
          </>
        }
      </Routes>
    </Router>
  );
}

export default App;
