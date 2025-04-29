import './App.css';
import Nav from './Components/Nav'
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login'
import Signup from './Components/Signup';

function App() {

  return (
    <>

      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        {/* <Route path='/' element={<Nav />} /> */}
      </Routes>
      <Nav />
    </>
  );
}

export default App;