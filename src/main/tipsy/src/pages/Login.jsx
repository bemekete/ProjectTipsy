import React, { useState } from 'react';
import '../styles/Login.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function Login({ handleLogin }) {
    const navigate = useNavigate();

    const handleLoginFormSubmit = (inputId, inputPw) => {
        // 서버에 로그인 요청을 보냅니다.
        axios
            .post('/user/login', { id: inputId, password: inputPw })
            .then((response) => {
                // 로그인 성공 시 처리할 작업을 수행합니다.
                console.log('로그인 성공');
                handleLogin();
                navigate('/');
            })
            .catch((error) => {
                // 로그인 실패 시 처리할 작업을 수행합니다.
                alert('로그인실패 - 다시 ㄱㄱ');
                console.error('로그인 실패');
            });
    };

    return (
        <main id="login_main">
            <div id="login_wrap">
                <div id="login_container">
                    <LoginForm onSubmit={handleLoginFormSubmit} />
                    <SNSLogin />
                </div>
            </div>
        </main>
    );
}

export default Login;

const LoginForm = ({ onSubmit }) => {
    const [inputId, setInputId] = useState('');
    const [inputPw, setInputPw] = useState('');

    const handleInputId = (e) => {
        setInputId(e.target.value);
    };

    const handleInputPw = (e) => {
        setInputPw(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit(inputId, inputPw);
    };

    return (
        <form
            onSubmit={handleSubmit}
            id="login_form"
            className="login_form"
            method="POST"
        >
            <div className="login_tit">
                <Link to="/" className="login_logo">
                    tipsy
                </Link>
            </div>
            <div className="login_text">
                <ul>
                    <li>
                        <input
                            className="login_input"
                            type="text"
                            id="login_id"
                            name="id"
                            placeholder="아이디를 입력하세요."
                            value={inputId}
                            onChange={handleInputId}
                        />
                    </li>
                </ul>
                <ul>
                    <li>
                        <input
                            className="login_input"
                            type="password"
                            id="login_pw"
                            name="password"
                            placeholder="비밀번호를 입력하세요."
                            value={inputPw}
                            onChange={handleInputPw}
                        />
                    </li>
                </ul>
            </div>
            <div className="keepIdDiv">
                <input id="keepId" type="checkbox" />
                <label htmlFor="keepId">아이디 저장</label>
            </div>
            <div>
                <button type="submit" className="login_btn">
                    로그인
                </button>
            </div>
            <div className="find_div">
                <span>
                    <Link to="/findid" className="find">
                        <strong>아이디찾기 &#124; </strong>
                    </Link>
                </span>
                <span>
                    <Link to="/findpassword" className="find">
                        <strong>비밀번호찾기</strong>
                    </Link>
                </span>
            </div>
            <div>
                <span>
                    <strong>아직 회원이 아니신가요?</strong>
                    &nbsp;
                    <Link to="/join" className="find2">
                        <strong>회원가입</strong>
                    </Link>
                </span>
            </div>
        </form>
    );
};

const SNSLogin = () => {
    const snsLoginData = [
        {
            url: 'https://accounts.kakao.com/login/?continue=https%3A%2F%2Fmail.kakao.com%2F',
            image: require('../assets/login_img/kakao_login_icon.png'),
            alt: '카카오 로그인',
        },
        {
            url: 'https://nid.naver.com/nidlogin.login',
            image: require('../assets/login_img/naver_login_icon.png'),
            alt: '네이버 로그인',
        },
        {
            url: 'https://accounts.google.com/accountchooser/identifier?checkedDomains=youtube&dsh=S486541525%3A1672737939199566&flowEntry=AccountChooser&flowName=GlifWebSignIn&hl=ko&ifkv=AeAAQh4DnVYnd_O3p6ugUPFpl0JlJzD23WIxi8cpZoMsU6rAWSabyk3Hp9rjCAGLV3jna0WNq5B3nw&pstMsg=1',
            image: require('../assets/login_img/google_login_icon.png'),
            alt: '구글 로그인',
        },
    ];

    return (
        <div className="sns_login">
            <div className="sns_login_tit">SNS 로그인</div>
            {snsLoginData.map((sns) => (
                <div key={sns.url}>
                    <Link to={sns.url}>
                        <img
                            className="sns_login_img"
                            src={sns.image}
                            alt={sns.alt}
                        />
                    </Link>
                </div>
            ))}
        </div>
    );
};
