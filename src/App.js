
import React from 'react'
import { Route, Routes } from "react-router-dom";
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { GlobalStyle } from './components/StyleGuide/StyleGuide.styles';
import About from './components/Main/sections/About/About';
import Specials from './components/Main/sections/Highlights/Specials';
import Login from './components/Main/sections/Login/LoginPage';
import Reservation from './components/Main/sections/Reservation/Reservations';
import ConfirmedReservation from './components/Main/sections/Reservation/confirmedReservation';
import NotFound from './components/Main/sections/NotFound/NotFound';

function App() {
  return (
      <>
      <GlobalStyle />
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/about' element={<About />} />
        <Route path='/menu' element={<Specials />} />
        <Route path='/reservation' element={<Reservation />} />
        <Route
            path="/confirmedReservation"
            element={<ConfirmedReservation />}
          />
        <Route path='/order' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='*' element={<NotFound/>}/>
      </Routes>
      <Footer />
      </>
  );
}

export default App;