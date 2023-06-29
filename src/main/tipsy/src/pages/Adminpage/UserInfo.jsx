import React from 'react';
import { useLocation } from 'react-router-dom';

export function UserInfo() {
    const location = useLocation();
    const user = location.state.user;

    return (
        <>
            <div id="userinfo_container">
                <p className="pageTitle">회원정보</p>
                <div id="contents">
                    <div className="forminfo">
                        <table className="userinfoTable">
                            <tbody>
                                <tr>
                                    <th>ID</th>
                                    <td>{user.id}</td>
                                </tr>
                                <tr>
                                    <th>이름</th>
                                    <td>{user.name}</td>
                                </tr>
                                <tr>
                                    <th>연락처</th>
                                    <td>{user.phone}</td>
                                </tr>
                                <tr>
                                    <th>우편번호</th>
                                    <td>{user.postal}</td>
                                </tr>
                                <tr>
                                    <th>기본주소</th>
                                    <td>{user.address_1}</td>
                                </tr>
                                <tr>
                                    <th>상세주소</th>
                                    <td>{user.address_2}</td>
                                </tr>
                                <tr>
                                    <th>이메일</th>
                                    <td>{user.email}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

