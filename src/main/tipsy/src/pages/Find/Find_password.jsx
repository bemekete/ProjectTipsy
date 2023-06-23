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
    const navigate = useNavigate();
    const [id, setId] = useState('');
    const [phone, setPhone] = useState('');

    const handleIdChange = (e) => {
        setId(e.target.value);
    };

    const handlePhoneChange = (e) => {
        setPhone(e.target.value);
    };

    const handleFindPw = (e) => {
        e.preventDefault();

        axios
            .post('/user/findPw', { id, phone })
            .then((response) => {
                // 서버로부터 응답을 받았을 때 처리
                console.log(response.data);
                if (response.data != null && response.data !== '') {
                    navigate('/changepw');
                } else {
                    alert('일치하는 정보가 없습니다. 다시 확인해 주세요.');
                }
            })
            .catch((error) => {
                // 에러 처리
                console.error(error);
            });
    };
    return (
        <>
            <form onSubmit={handleFindPw} id="find_form">
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
                                            id="user_id"
                                            name="id"
                                            value={id}
                                            onChange={handleIdChange}
                                            maxLength="50"
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
                                            maxLength="15"
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
