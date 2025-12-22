import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function Header(){
  return(
    <div>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <h1>Introduction à React</h1>
        <h2>A la découverte des premières notions de React</h2>
      </div>
  );
}
function MainContent(){
  return (
  <p>Ici nous afficherons des informations intéressantes</p>
  );

}
function App() {

  return (
    <>
      <Header />
      <MainContent />
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App
