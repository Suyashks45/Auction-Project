// src/App.js

import React from 'react';
import { BrowserRouter as Router, Route, NavLink, Routes } from 'react-router-dom';
import Home from './components/Home';
import Categories from './components/Categories';
import Members from './components/Members';
import Products from './components/Products';
import './App.css';

function App() {
    return (
        <Router>
            <nav>
                <div>
                <h1>Auction App</h1>  
                </div>
                <div>
                    <NavLink to="/" activeClassName="active">
                        Home
                    </NavLink>
                    <NavLink to="/categories" activeClassName="active">
                        Categories
                    </NavLink>
                    <NavLink to="/members" activeClassName="active">
                        Members
                    </NavLink>
                    <NavLink to="/products" activeClassName="active"> { }
                        Products
                    </NavLink>
                </div>
            </nav>

            <div className="container">
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/categories" element={<Categories />} />
                    <Route path="/members" element={<Members />} />
                    <Route path="/products" element={<Products />} /> { }
                </Routes>
            </div>
        </Router>
    );
}

export default App;
