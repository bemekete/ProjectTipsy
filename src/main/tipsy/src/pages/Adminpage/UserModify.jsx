import React, { useState, useEffect } from 'react';
import axios from 'axios';

export default function UserModify() {
    return (
        <div id="userinfo_container">
            <p className="pageTitle">회원정보 수정</p>
            <div id="contents">
                <UserModifyForm />
            </div>
        </div>
    );
}

export function UserModifyForm() {
    const [loginInfo, setLoginInfo] = useState(null);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/user/userinfo');
            setLoginInfo(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    if (loginInfo === null) {
        return <div>Loading...</div>; // 데이터를 받아올 때까지 로딩 표시
    } else {
    }

    const firstNum = loginInfo.phone ? loginInfo.phone.substring(0, 3) : '';
    const secondNum = loginInfo.phone ? loginInfo.phone.substring(4, 8) : '';
    const lastNum = loginInfo.phone ? loginInfo.phone.substring(9) : '';

    return (
        <form onSubmit="onSubmit" className="forminfo" method="post">
            <table className="userinfoTable">
                <tbody>
                    <tr>
                        <th>아이디</th>
                        <td>
                            <input
                                type="text"
                                minLength="4"
                                maxLength="16"
                                name="id"
                                id="userID"
                                value={loginInfo.id}
                                // onChange={handleChange}
                                required
                            />
                            <span>영소문자 및 숫자, 4자 이상</span>
                        </td>
                    </tr>
                    <tr>
                        <th>비밀번호</th>
                        <td>
                            <input
                                type="password"
                                minLength="6"
                                maxLength="16"
                                name="password"
                                id="userPSW"
                                value={loginInfo.password}
                                // onChange={handleChange}
                                required
                            />
                            <span>
                                영대소문자 및 특수문자(@$!%*#?&), 8자 이상
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th>이름</th>
                        <td>
                            <input
                                type="text"
                                minLength="2"
                                maxLength="10"
                                name="name"
                                id="userName"
                                value={loginInfo.name}
                                // onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>주소</th>
                        <td className="postalinput">
                            <input
                                type="text"
                                name="postal"
                                size="10px"
                                value={loginInfo.postal}
                                // onChange={handleChange}
                            />
                            <button onClick="/">우편번호</button>
                            <br />
                            <input
                                type="text"
                                name="address_1"
                                size="50"
                                value={loginInfo.address_1}
                                // onChange={handleChange}
                            />
                            <span>기본주소</span>
                            <br />
                            <input
                                type="text"
                                name="address_2"
                                size="50"
                                id="address"
                                value={loginInfo.address_2}
                                // onChange={handleChange}
                            />
                            <span>상세주소</span>
                        </td>
                    </tr>
                    <tr>
                        <th>휴대전화</th>
                        <td className="phoneinput">
                            <input
                                type="text"
                                name="firstNum"
                                size="5px"
                                id="secondNum"
                                value={firstNum}
                                readOnly
                            />
                            -
                            <input
                                type="text"
                                name="secondNum"
                                size="5px"
                                id="secondNum"
                                value={secondNum}
                                readOnly
                            />
                            -
                            <input
                                type="text"
                                name="lastNum"
                                size="5px"
                                id="thirdNum"
                                value={lastNum}
                                readOnly
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>이메일</th>
                        <td>
                            <input
                                type="email"
                                name="email"
                                size="30px"
                                id="email"
                                value={loginInfo.email}
                                // onChange={handleChange}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>
            <div className="modifyinfoBtn">
                <button type="submit" onClick="/">
                    정보수정
                </button>
                <button>취소</button>
            </div>
        </form>
    );
}
