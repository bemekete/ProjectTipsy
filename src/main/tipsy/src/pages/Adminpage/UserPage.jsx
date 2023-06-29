import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function Listpage({ userData }) {
    const navigate = useNavigate();

    return (
        <>
            <table className="ListTable">
                <thead>
                    <tr>
                        <th>no.</th>
                        <th>ID</th>
                        <th>이름</th>
                        <th>상세정보</th>
                        <th>삭제</th>
                    </tr>
                </thead>

                <tbody>
                    {userData.map((user, i) => (
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td className="listdet">
                                <button
                                    onClick={() => {
                                        onClickDetail(user);
                                    }}
                                >
                                    Detail
                                </button>
                            </td>
                            <td className="listdel">
                                <button onClick={onClickDelete}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    );

    function onClickDetail(user) {
        navigate('/adminpage/userinfo', { state: { user } });
    }

    function onClickDelete(user) {}
}
