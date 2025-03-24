
import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';
import { GlobalStyle } from './components/StyleGuide/StyleGuide.styles';

function App() {
  return (
    <>
    <meta name="description" content="This is the Little Lemon Restaurant Website. A place with delicius food and wonderfull place to visit"/>
    <meta name="og:title" content="Little Lemon Website"/>
    <meta name="og:description" content="Experience the taste of Chicago at Little Lemon, a family-owned restaurant serving fresh and delicious dishes for over 20 years."/>
    <meta name="og:image" content="./assets/restaurant.jpg"/>
    <meta property="og:type" content="website" />
      <GlobalStyle/>
      <Header />
      <Main />
      <Footer/>
    </>
  );
}

export default App;
