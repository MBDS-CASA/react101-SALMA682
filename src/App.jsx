import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header(){
  return(
    <header>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Introduction à React</h1>
        <h2>A la découverte des premières notions de React</h2>
      </header>
  );
}
function MainContent(){
  return (
  <p>Ici nous afficherons des informations intéressantes</p>
  );

}
function Footer() {
  return (
    <footer style={{
      textAlign: 'center',
      marginTop: '40px',
      padding: '10px 0',
      borderTop: '1px solid #ccc'
    }}>
      Tous droits réservés - [Ighirouaiour] [Salma]
    </footer>
  );
}
function App() {

  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  )
}

export default App
