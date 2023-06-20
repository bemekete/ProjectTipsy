import React from "react";

export default function ProductForm({ onSubmit, item }) {
    return (
        <form action={onSubmit()} className="forminfo">
            <table className="userinfoTable">
                <tr>
                    <th>상품명</th>
                    <td><input type="text" placeholder={item === '' ? '' : item.title} /></td>
                </tr>
                <tr>
                    <th>이름</th>
                    <td><input type="text" placeholder={item === '' ? '' : item.title}></input></td>
                </tr>
                <tr>
                    <th>비밀번호</th>
                    <td><input type="text" placeholder={item === '' ? '' : item.title}></input></td>
                </tr>
                <tr>
                    <th>연락처</th>
                    <td><input type="text" placeholder={item === '' ? '' : item.title}></input></td>
                </tr>
                <tr>
                    <th>이메일</th>
                    <td><input type="text" placeholder={item === '' ? '' : item.title}></input></td>
                </tr>
                <tr>
                    <th>우편번호</th>
                    <td className="postalinput">
                        <input type="text" placeholder={item === '' ? '' : item.title} readOnly></input>
                        <button>우편번호 찾기</button>
                    </td>
                </tr>
                <tr>
                    <th>기본주소</th>
                    <td><input type="text" placeholder={item === '' ? '' : item.title} readOnly></input></td>
                </tr>
                <tr>
                    <th>상세주소</th>
                    <td><input type="text" placeholder={item === '' ? '' : item.title}></input></td>
                </tr>
            </table>

            <div className="modifyinfoBtn">
                <button>정보수정</button>
                <button>취소</button>
            </div>
        </form>
    )
}
