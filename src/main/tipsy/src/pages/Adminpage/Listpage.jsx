import React from 'react';
import { PageButton } from '../Boardtable';

export default function Listpage({ headers, items }) {
    return (
        <>
            <table className="ListTable">
                <thead>
                    <tr>
                        <th></th>
                        <th>no.</th>
                        {headers.map((header) => (
                            <th>{header.text}</th>
                        ))}
                        <th>상세정보</th>
                        <th>삭제</th>
                    </tr>
                </thead>

                <tbody>
                    {items.map((el, i) => (
                        <tr>
                            <td className="listchbox">
                                <input type="checkbox" />
                            </td>
                            <td>{i + 1}</td>
                            {headers.map((header) => (
                                <td>{el[header.value]}</td>
                            ))}
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

            <PageButton />
        </>
    );

    function onClickDetail() {}

    function onClickDelete() {}
}
