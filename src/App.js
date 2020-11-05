import React from 'react' ;
import {BrouserRouter, Link, Route, } from 'react-router-dom';
import './App.css';
import HomeScreen from "./Screens/HomeScreen";
import ProductScreen from "./Screens/ProductScreen";

function App() {

  const openMenu = () =>{
    document.querySelector(".sidebar").classList.add("open");
  }
  const closeMenu = () =>{
    document.querySelector(".sidebar").classList.remove("open");
        }
  return (
    <BrouserRouter>
    <div>
    <div className="grid-container">
        <header className="header">
            <div className="brand">
                <button onClick={openMenu}>
                    &#9776;
                </button>
                <Link to="/">Radical</Link>
                <a href="index.html"> </a>
            </div>
            <div className="header-links">
                <a href="cart.html">Carrinho</a>
                <a href="signin.html">Registo</a>
            </div>
        </header>
        <aside className="sidebar">
            <h3>Shop Categories</h3>
            <button className="sidebar-close-button" onClick={closeMenu}>x</button>
        <ul>
            <li> <a href="index.html">Capacetes</a></li>
            <li>
                <a href="index.html">Proteções</a>
            </li>
        </ul>
        </aside>
        <main className="main">
            <div className="content">
              <Route path="/products/:id" component={ProductScreen}/>
              <Route path="/" exact={true} component={HomeScreen}/>
            <ul className="products">
              {
              }
            </ul>
          </div>
        </main>
    </div>
        <footer className="footer">
        Todos os direitos reservados
        </footer>
    </div></BrouserRouter>
  );
}

export default App;
