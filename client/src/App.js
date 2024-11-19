import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import Login from './components/Navbar';
import ParkingSpace from './components/ParkingSpace';
import Booking from './components/Booking';
import Wallet from './components/Wallet';
import MyAccount from './components/MyAccount';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Booking />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
          <Route path="/parking" element={<ParkingSpace />} />
          <Route path="/wallet" element={<Wallet />} />
          <Route path="/myaccount" element={<MyAccount />}/>
        </Routes>
        {/* <Footer /> */}
      </div>
    </Router>
  );
}

export default App;
