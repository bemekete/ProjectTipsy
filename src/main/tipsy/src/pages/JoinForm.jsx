import React from 'react';
import '../styles/JoinForm.scss';

function JoinForm() {
    return (
        <>
            <div id="joinform_container">
                <p className="pageTitle">회원가입</p>
                <div className="contents">
                    <JoinBox />
                </div>
            </div>
        </>
    );
}

export default JoinForm;

const JoinBox = () => {
    return (
        <>
            <form action="../login/login.html" className="joinbox">
                <p>
                    <span>*</span> 필수 입력 사항
                </p>
                <figure>
                    <figcaption>기본정보</figcaption>
                    <table>
                        <colgroup>
                            <col />
                            <col />
                        </colgroup>

                        <tbody>
                            <tr>
                                <th>
                                    아이디 <span>*</span>
                                </th>
                                <td>
                                    <input
                                        type="text"
                                        minLength="4"
                                        maxLength="16"
                                        name="userID"
                                        id="userID"
                                    />
                                    <span>영소문자 및 숫자, 4자 이상</span>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    비밀번호 <span>*</span>
                                </th>
                                <td>
                                    <input
                                        type="password"
                                        minLength="6"
                                        maxLength="16"
                                        name="userPSW"
                                        id="userPSW"
                                    />
                                    <span>
                                        영대소문자 및 특수문자(@$!%*#?&), 8자
                                        이상
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    비밀번호 확인 <span>*</span>
                                </th>
                                <td>
                                    <input
                                        type="password"
                                        minLength="6"
                                        maxLength="16"
                                        name="rePSW"
                                        id="rePSW"
                                    />
                                    <span className="confirmPSW notice">
                                        일치하지 않음
                                    </span>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    비밀번호 확인 질문 <span>*</span>
                                </th>
                                <td>
                                    <select name="userPSWhintQ">
                                        <option value="pswQ1">
                                            기억에 남는 추억의 장소는?
                                        </option>
                                        <option value="pswQ2">
                                            자신의 인생 좌우명은?
                                        </option>
                                        <option value="pswQ3">
                                            자신의 보물 제 1호는?
                                        </option>
                                        <option value="pswQ4">
                                            가장 기억에 남는 선생님 성함은?
                                        </option>
                                        <option value="pswQ5">
                                            타인이 모르는 자신만의 신체 비밀이
                                            있다면?
                                        </option>
                                        <option value="pswQ6">
                                            추억하고 싶은 날짜가 있다면?
                                        </option>
                                        <option value="pswQ7">
                                            받았던 선물 중 기억에 남는 독특한
                                            선물은?
                                        </option>
                                        <option value="pswQ8">
                                            유년시절 가장 생각나는 친구 이름은?
                                        </option>
                                        <option value="pswQ9">
                                            인상 깊게 읽은 책 이름은?
                                        </option>
                                        <option value="pswQ10">
                                            읽은 책 중에서 좋아하는 구절이
                                            있다면?
                                        </option>
                                        <option value="pswQ11">
                                            자신이 두 번째로 존경하는 인물은?
                                        </option>
                                        <option value="pswQ12">
                                            친구들에게 공개하지 않은 어릴 적
                                            별명이 있다면?
                                        </option>
                                        <option value="pswQ13">
                                            초등학교 때 기억에 남는 짝꿍 이름은?
                                        </option>
                                        <option value="pswQ14">
                                            다시 태어나면 되고 싶은 것은?
                                        </option>
                                        <option value="pswQ15">
                                            내가 좋아하는 캐릭터는?
                                        </option>
                                    </select>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    비밀번호 확인 답변 <span>*</span>
                                </th>
                                <td>
                                    <input
                                        type="text"
                                        name="userPSWhintA"
                                        size="70px"
                                        id="ckpwa"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    이름 <span>*</span>
                                </th>
                                <td>
                                    <input
                                        type="text"
                                        minLength="2"
                                        maxLength="10"
                                        name="userName"
                                        id="userName"
                                    />
                                </td>
                            </tr>
                            <tr>
                                <th>주소</th>
                                <td>
                                    <input
                                        type="text"
                                        name="userPostcode1"
                                        size="10px"
                                        readOnly
                                    />
                                    <a href="#">우편번호</a>
                                    <br />
                                    <input
                                        type="text"
                                        name="userPostcode2"
                                        size="50"
                                        readOnly
                                    />
                                    <span>기본주소</span>
                                    <br />
                                    <input
                                        type="text"
                                        name="userPostcode3"
                                        size="50"
                                        id="address"
                                    />
                                    <span>상세주소 (선택입력)</span>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    휴대전화 <span>*</span>
                                </th>
                                <td>
                                    <select name="userPhone[]" disabled>
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
                                        name="userPhone[]"
                                        minLength="3"
                                        maxLength="4"
                                        size="5px"
                                        id="secondNum"
                                        value="1234"
                                        disabled
                                    />
                                    -
                                    <input
                                        type="text"
                                        name="userPhone[]"
                                        minLength="3"
                                        maxLength="4"
                                        size="5px"
                                        id="thirdNum"
                                        value="1234"
                                        disabled
                                    />
                                    {/* <!-- <a href="#">인증번호전송</a><br /> --> */}
                                    {/* <!-- <input type="text" name="userPhoneVerification" minLength="6" maxLength="6"
                                            size="24px" id="verificationCode" />
                                        <a href="#">인증번호확인</a> --> */}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    이메일 <span>*</span>
                                </th>
                                <td>
                                    <input
                                        type="email"
                                        name="userEmail"
                                        size="30px"
                                        id="email"
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </figure>
                <div className="joinButton">
                    <button type="button" onClick="join_check();">
                        회원가입
                    </button>
                </div>
            </form>
        </>
    );
};
