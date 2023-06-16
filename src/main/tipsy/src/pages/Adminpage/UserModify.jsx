import React from 'react';

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
        <form action="onSubmit" className="forminfo">
            <table className="userinfoTable">
                <tr>
                    <th>ID</th>
                    <td>
                        <input type="text" value={items.id} />
                    </td>
                </tr>
                <tr>
                    <th>이름</th>
                    <td>
                        <input type="text" value={items.name}></input>
                    </td>
                </tr>
                <tr>
                    <th>비밀번호</th>
                    <td>
                        <input type="text" value={items.password}></input>
                    </td>
                </tr>
                <tr>
                    <th>연락처</th>
                    <td>
                        <input type="text" value={items.phone}></input>
                    </td>
                </tr>
                <tr>
                    <th>이메일</th>
                    <td>
                        <input type="text" value={items.email}></input>
                    </td>
                </tr>
                <tr>
                    <th>우편번호</th>
                    <td className="postalinput">
                        <input
                            type="text"
                            value={items.postal}
                            readOnly
                        ></input>
                        <button>우편번호 찾기</button>
                    </td>
                </tr>
                <tr>
                    <th>기본주소</th>
                    <td>
                        <input
                            type="text"
                            value={items.address_1}
                            readOnly
                        ></input>
                    </td>
                </tr>
                <tr>
                    <th>상세주소</th>
                    <td>
                        <input type="text" value={items.address_2}></input>
                    </td>
                </tr>
            </table>

            <div className="modifyinfoBtn">
                <button>정보수정</button>
                <button>취소</button>
            </div>
        </form>
    );
}

function onSubmit() {}

const items = {
    id: 'qotnwl',
    name: '배수지',
    phone: '010-1234-5678',
    email: 'wlqrkrhtlvek@wlqrkrh.tlvek',
    password: '12345!',
    password_q: '아무거나',
    password_a: '졸려',
    postal: '12345',
    address_1: '경기도 안녕시',
    address_2: '집가고싶아파트',
    point: 35,
};
