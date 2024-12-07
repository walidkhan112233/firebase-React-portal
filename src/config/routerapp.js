import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Home from '../pages/home';
import Signup from '../pages/signup'
import Login from '../pages/login'

export default function RouterApp() {
    return (
        <>
            <Router>
              
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='signup' element={<Signup />} />
                    <Route path='login' element={<Login />} />
                </Routes>
                
            </Router>
        </>
    );
}

