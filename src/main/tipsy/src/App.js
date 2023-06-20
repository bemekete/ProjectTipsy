import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { BrowserRouter } from 'react-router-dom';
import axios from 'axios';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 저장하는 상태 변수

    useEffect(() => {
        // 페이지 로드 시 세션 정보 확인
        checkLoginStatus();
    }, []);

    const checkLoginStatus = () => {
        axios
            .get('/user/check-login') // 세션 정보를 확인하는 API 엔드포인트로 요청을 보냄
            .then((response) => {
                const { isLoggedIn } = response.data;
                setIsLoggedIn(isLoggedIn); // 세션 상태에 따라 로그인 상태 변경
            })
            .catch((error) => {
                console.error('세션 정보 확인 실패', error);
            });
    };

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
