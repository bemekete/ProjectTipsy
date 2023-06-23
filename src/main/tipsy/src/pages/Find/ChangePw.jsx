import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/ChangePw.scss';

function ChangePw({ setIsLoggedIn }) {
    const navigate = useNavigate();
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (password !== confirmPassword) {
            alert('비밀번호가 일치하지 않습니다.');
            return;
        }

        try {
            const response = await axios.post('/user/updatepw', { password });
            console.log(response.data); // 서버 응답 확인
            alert('비밀번호 변경 성공');
            setIsLoggedIn(false);
            navigate('/'); // 비밀번호 수정 후 이동할 경로 설정
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
                                    required
                                />
                            </td>
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
                                    required
                                />
                            </td>
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
