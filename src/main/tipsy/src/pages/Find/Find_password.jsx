import React, { useState } from 'react';
import '../../styles/Find.scss';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function FindPassword() {
    return (
        <div id="find_container">
            <main>
                <div className="find_wrap">
                    <div className="find_logo_div">
                        <Link to="/" className="find_logo">
                            tipsy
                        </Link>
                    </div>
                    <div className="find_form_wrap">
                        <ul className="find_tab_btn">
                            <li>
                                <Link to="/findid">아이디 찾기</Link>
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
    const [id, setId] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();

    const handleIdChange = (e) => {
        setId(e.target.value);
    };
    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        // 서버로 이메일 값 전송
        axios
            .get('/user/findPw', {
                params: { id: id, findPw: phone },
            })
            .then((response) => {
                // 응답 처리
                console.log(response);
                navigate('/login');
            })
            .catch((error) => {
                // 에러 처리
                console.error(error);
            });
    };
    return (
        <>
            <form onSubmit={handleSubmit} id="find_form">
                <div className="form_container">
                    <div className="form_tit">비밀번호 찾기</div>
                    <ul className="form_list">
                        <li>
                            <dl>
                                <dt>아이디</dt>
                                <dd>
                                    <div className="input_line">
                                        <input
                                            className="input_type1"
                                            type="text"
                                            id="user_email"
                                            name="id"
                                            value={id}
                                            onChange={handleIdChange}
                                            maxlength="50"
                                            placeholder="아이디 입력"
                                            required
                                        />
                                    </div>
                                </dd>
                            </dl>
                        </li>
                        <li>
                            <dl>
                                <dt>휴대폰 번호</dt>
                                <dd>
                                    <div className="input_line">
                                        <input
                                            className="input_type1"
                                            type="text"
                                            id="user_mobile"
                                            name="phone"
                                            value={phone}
                                            onChange={handlePhoneChange}
                                            maxlength="15"
                                            placeholder="ex) 010-0000-0000"
                                        />
                                    </div>
                                </dd>
                            </dl>
                        </li>
                    </ul>
                    <button className="btnList" type="submit">
                        비밀번호 찾기
                    </button>
                </div>
            </form>
        </>
    );
};
