import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/ChangePw.scss';

function ChangePw({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [valText, setValText] = useState({});
    const [regulFail, setRegulFail] = useState({
        userPSW:
            '영어, 숫자, 특수문자 조합으로 8자이상 15자 이하로 입력해주세요.',
        userPSWCH: '비밀번호가 일치하지 않습니다.',
    });

    const validation = (e) => {
        console.log(valText.id);
        const { id, value } = e.target;
        if (
            /^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-z0-9!@#$%^&*]{8,15}$/g.test(
                value
            )
        ) {
            setValText((prev) => ({
                ...prev,
                [id]: null,
            }));
        } else {
            setValText((prev) => ({
                ...prev,
                [id]: regulFail[id],
            }));
        }
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            return;
        }

        try {
            const response = await axios.post('/user/updatepw', { password });
            console.log(response.data); // 서버 응답 확인
            alert('비밀번호 변경 성공');
            setIsLoggedIn(false);
            navigate('/login'); // 비밀번호 수정 후 이동할 경로 설정
        } catch (error) {
            console.error(error);
            alert('비밀번호 변경 실패');
        }
    };

    return (
        <div className="changePwContainer">
            <h1>비밀번호 변경</h1>
            <form className="forminfo" onSubmit={handleSubmit}>
                <table className="userinfoTable">
                    <tbody>
                        <tr>
                            <th>새 비밀번호</th>
                            <td>
                                <input
                                    type="password"
                                    minLength="6"
                                    maxLength="16"
                                    name="password"
                                    id="userPSW"
                                    value={password}
                                    onChange={handlePasswordChange}
                                    onBlur={validation}
                                    required
                                />
                            </td>
                            {valText.userPSW && (
                                <div className="cheakTxt">
                                    {valText.userPSW}
                                </div>
                            )}
                        </tr>
                        <tr>
                            <th>비밀번호 확인</th>
                            <td>
                                <input
                                    type="password"
                                    minLength="6"
                                    maxLength="16"
                                    name="password"
                                    id="userPSWCH"
                                    value={confirmPassword}
                                    onChange={handleConfirmPasswordChange}
                                    onBlur={validation}
                                    required
                                />
                            </td>
                            {valText.userPSWCH && (
                                <div className="cheakTxt">
                                    {valText.userPSWCH}
                                </div>
                            )}
                        </tr>
                    </tbody>
                </table>
                <div className="modifyinfoBtn">
                    <button type="submit">변경하기</button>
                    <button type="button" onClick={() => navigate(-1)}>
                        취소
                    </button>
                </div>
            </form>
        </div>
    );
}

export default ChangePw;
