import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
function App() {

    const [user_ID, setUser_ID] = useState();
    const [user_password, setUser_password] = useState();



    useEffect(() => {
        axios.get("")
            .then(() => { })
            .catch(() => { })
    })


    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <Header />
                    <Main />
                    <Footer />
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
