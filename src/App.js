import React from 'react';
import { Header, Populares, Recientes, Footer } from './components';
import './App.css'


function App() {

  
  return (
    <>
      <Header />
      <main>
      <Populares />
      <Recientes />
      </main>
      <Footer/>
    </>
  );
}

export default App;
