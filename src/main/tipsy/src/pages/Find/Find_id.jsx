import React, { useState } from 'react';
import '../../styles/Find.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function FindId() {
    return (
        <div id="find_container">
            <main>
                <div class="find_wrap">
                    <div class="find_logo_div">
                        <Link to="/" class="find_logo">
                            tipsy
                        </Link>
                    </div>
                    <div class="find_form_wrap">
                        <ul class="find_tab_btn">
                            <li>
                                <Link to="findid">아이디 찾기</Link>
                            </li>
                            <li>
                                <Link to="/findpassword">비밀번호 찾기</Link>
                            </li>
                        </ul>
                        <FindForm />
                    </div>
                </div>
            </main>
        </div>
    );
}

const FindForm = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 서버로 이메일 값 전송
        axios
            .get('/user/findId', { params: { email: email } })
            .then((response) => {
                // 응답 처리
                console.log(response);
                alert(`'${email}'으로 아이디를 전송했습니다.`);
                navigate('/findpassword');
            })
            .catch((error) => {
                // 에러 처리
                console.error(error);
            });
    };

    return (
        <form onSubmit={handleSubmit} id="find_form">
            <div className="form_container">
                <div className="form_tit">아이디 찾기</div>
                <ul className="form_list">
                    <li>
                        <dl>
                            <dt>이메일</dt>
                            <dd>
                                <div className="input_line">
                                    <input
                                        className="input_type1"
                                        type="text"
                                        id="user_mobile"
                                        name="email"
                                        value={email}
                                        onChange={handleEmailChange}
                                        maxLength="50"
                                        placeholder="이메일을 입력하세요"
                                    />
                                </div>
                            </dd>
                        </dl>
                    </li>
                </ul>
                <button className="btnList" type="submit">
                    아이디 찾기
                </button>
            </div>
        </form>
    );
};
