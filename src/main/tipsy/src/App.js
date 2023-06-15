import './App.css';
import React, { useState, useNavigate } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import axios from 'axios';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 저장하는 상태 변수

    const handleLogin = () => {
        // 로그인 상태 변경 로직
        setIsLoggedIn(true);
    };

    const handleLogout = () => {
        axios
            .get('/user/logout')
            .then((response) => {
                console.log('로그아웃 성공');
                setIsLoggedIn(false);
            })
            .catch((error) => {
                console.error('로그아웃 실패');
            });
    };

    return (
        <>
            <div className="App">
                <BrowserRouter>
                    <Header
                        isLoggedIn={isLoggedIn}
                        handleLogout={handleLogout}
                    />
                    <Main handleLogin={handleLogin} />
                    <Footer />
                </BrowserRouter>
            </div>
        </>
    );
}

export default App;
