import React from 'react';
import { Link } from 'react-router-dom';

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
    return (
        <form onSubmit="onSubmit" className="forminfo" method="post">
            <table className="userinfoTable">
                <tbody>
                    <tr>
                        <th>
                            아이디
                        </th>
                        <td>
                            <input
                                type="text"
                                minLength="4"
                                maxLength="16"
                                name="id"
                                id="userID"
                                // onChange={handleChange}
                                required
                            />
                            <span>영소문자 및 숫자, 4자 이상</span>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            비밀번호
                        </th>
                        <td>
                            <input
                                type="password"
                                minLength="6"
                                maxLength="16"
                                name="password"
                                id="userPSW"
                                // onChange={handleChange}
                                required
                            />
                            <span>
                                영대소문자 및 특수문자(@$!%*#?&), 8자
                                이상
                            </span>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            이름
                        </th>
                        <td>
                            <input
                                type="text"
                                minLength="2"
                                maxLength="10"
                                name="name"
                                id="userName"
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
                            // onChange={handleChange}
                            />
                            <button onClick="/">우편번호</button>
                            <br />
                            <input
                                type="text"
                                name="address_1"
                                size="50"
                            // onChange={handleChange}
                            />
                            <span>기본주소</span>
                            <br />
                            <input
                                type="text"
                                name="address_2"
                                size="50"
                                id="address"
                            // onChange={handleChange}
                            />
                            <span>상세주소 (선택입력)</span>
                        </td>
                    </tr>
                    <tr>
                        <th>
                            휴대전화
                        </th>
                        <td className="phoneinput">
                            <select
                                name="firstNum"
                            // onChange={phoneFunc}
                            >
                                <option value="선택">선택</option>
                                <option value="010">010</option>
                                <option value="011">011</option>
                                <option value="016">016</option>
                                <option value="017">017</option>
                                <option value="018">018</option>
                                <option value="019">019</option>
                            </select>
                            -
                            <input
                                type="text"
                                name="secondNum"
                                minLength="3"
                                maxLength="4"
                                size="5px"
                                id="secondNum"
                            // onChange={phoneFunc}
                            />
                            -
                            <input
                                type="text"
                                name="lastNum"
                                minLength="4"
                                maxLength="4"
                                size="5px"
                                id="thirdNum"
                            // onChange={phoneFunc}
                            />
                            {/* <!-- <a href="#">인증번호전송</a><br /> --> */}
                            {/* <!-- <input type="text" name="userPhoneVerification" minLength="6" maxLength="6"
                            size="24px" id="verificationCode" />
                        <a href="#">인증번호확인</a> --> */}
                        </td>
                    </tr>
                    <tr>
                        <th>
                            이메일
                        </th>
                        <td>
                            <input
                                type="email"
                                name="email"
                                size="30px"
                                id="email"
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