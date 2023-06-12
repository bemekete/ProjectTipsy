import './App.css';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

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
                <Header />
                <Main />
                <Footer />
            </div>
        </>
    );
}

export default App;
