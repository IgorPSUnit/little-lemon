
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { GlobalStyle } from './components/StyleGuide/StyleGuide.styles';

function App() {
  return (
    <>
      <GlobalStyle/>
      <Header />
      <Main />
      <Footer/>  
    </>
  );
}

export default App;
