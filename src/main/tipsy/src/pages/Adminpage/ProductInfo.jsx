import React from "react";

export default function ProductInfo() {
    return (
        <div id="userinfo_container">
            <p className="pageTitle">상품 상세정보</p>
            <div id="contents">
                <div className="forminfo">
                    <table className="userinfoTable">
                        <tr>
                            <th>ID</th>
                            <td>{items.id}</td>
                        </tr>
                        <tr>
                            <th>이름</th>
                            <td>{items.name}</td>
                        </tr>
                        <tr>
                            <th>비밀번호</th>
                            <td>{items.password}</td>
                        </tr>
                        <tr>
                            <th>연락처</th>
                            <td>{items.phone}</td>
                        </tr>
                        <tr>
                            <th>이메일</th>
                            <td>{items.email}</td>
                        </tr>
                        <tr>
                            <th>우편번호</th>
                            <td>{items.postal}</td>
                        </tr>
                        <tr>
                            <th>기본주소</th>
                            <td>{items.address_1}</td>
                        </tr>
                        <tr>
                            <th>상세주소</th>
                            <td>{items.address_2}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>

    )

    function onSubmit() {

    }
}

const usertable = [
    {
        text: 'ID',
        value: 'id',
    },
    {
        text: '이름',
        value: 'name',
    },
    {
        text: '비밀번호',
        value: 'password',
    },
    {
        text: '비밀번호 찾기 질문',
        value: 'password_q',
    },
    {
        text: '비밀번호 찾기 답변',
        value: 'password_a',
    },
    {
        text: '연락처',
        value: 'phone',
    },
    {
        text: '우편번호',
        value: 'postal',
    },
    {
        text: '기본주소',
        value: 'address_1',
    },
    {
        text: '상세주소',
        value: 'address_2',
    },
    {
        text: '이메일',
        value: 'email',
    },
    {
        text: '잔여적립금',
        value: 'point',
    },
]

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
    point: 35
}

