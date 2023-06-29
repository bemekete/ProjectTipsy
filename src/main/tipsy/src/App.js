import './App.css';
import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Main from './components/Main';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

function App() {
    const navigate = useNavigate();
    const [isLoggedIn, setIsLoggedIn] = useState(false); // 로그인 상태를 저장하는 상태 변수

    useEffect(() => {
        // 페이지 로드 시 세션 정보 확인
        checkLoginStatus();
    }, []);

    // 로그인 세션 유지 유무
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

    // 로그아웃
    const handleLogout = () => {
        axios
            .get('/user/logout')
            .then((response) => {
                console.log('로그아웃 성공');
                setIsLoggedIn(false);
                navigate('/');
            })
            .catch((error) => {
                console.error('로그아웃 실패');
            });
    };

    const handleLoginFormSubmit = (inputId, inputPw) => {
        // 서버에 로그인 요청을 보냅니다.
        axios
            .post('/user/login', { id: inputId, password: inputPw })
            .then((response) => {
                // 로그인 성공 시 처리할 작업을 수행합니다.
                console.log('로그인 성공');
                handleLogin();
                if (response.data === '로그인성공') {
                    if (inputId === 'admin') {
                        navigate('/adminpage/userboard');
                    } else {
                        navigate('/');
                    }
                } else {
                    alert('로그인실패 - 다시 ㄱㄱ');
                    console.error('로그인 실패');
                }
            })
            .catch((error) => {
                // 로그인 실패 시 처리할 작업을 수행합니다.
                alert('로그인실패 - 다시 ㄱㄱ');
                console.error('로그인 실패');
            });
    };
    return (
        <>
            <div className="App">
                <Header isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
                <Main
                    handleLogin={handleLogin}
                    setIsLoggedIn={setIsLoggedIn}
                    handleLoginFormSubmit={handleLoginFormSubmit}
                />
                <Footer />
            </div>
        </>
    );
}

export default App;
