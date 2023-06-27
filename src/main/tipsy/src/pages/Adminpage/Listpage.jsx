import React from 'react';
// import { PageButton } from '../Boardtable';

export default function Listpage({ headers, useritems, userData }) {
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
                                <button onClick={onClickDetail}>Detail</button>
                            </td>
                            <td className="listdel">
                                <button onClick={onClickDelete}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {/* <PageButton /> */}
        </>
    );

    function onClickDetail() {}

    function onClickDelete() {}
}
