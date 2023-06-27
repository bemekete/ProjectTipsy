import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ProductForm() {
    const navigate = useNavigate();

    const addProduct = (e) => {
        e.preventDefault(); // 폼 제출 시에 페이지 새로고침 방지

        const formData = new FormData(e.target); // 폼 데이터 생성
        const config = {
            headers: {
                'content-type': 'multipart/form-data', // 멀티파트 폼 데이터 설정
            },
        };

        axios
            .post('/addProduct', formData, config) // POST 요청 전송
            .then((response) => {
                console.log(response.data);
                navigate('/adminpage/productboard');
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <form
            onSubmit={addProduct}
            className="forminfo"
            encType="multipart/form-data"
        >
            <table className="userinfoTable">
                <tr>
                    <th>상품명</th>
                    <td>
                        <input name="p_name" type="text" />
                    </td>
                </tr>
                <tr>
                    <th>상품가격</th>
                    <td>
                        <input name="p_price" type="text" />
                    </td>
                </tr>
                <tr>
                    <th>상품종류</th>
                    <td>
                        <select name="p_category">
                            <option value="선택">선택</option>
                            <option value="1">와인</option>
                            <option value="2">소주</option>
                            <option value="3">막걸리,탁주</option>
                            <option value="4">약주,청주</option>
                            <option value="5">과실주</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>세부종류</th>
                    <td>
                        <select name="p_category_detail">
                            <option value="선택">선택</option>
                            <option value="1">레드와인</option>
                            <option value="2">화이트와인</option>
                            <option value="3">증류소주</option>
                            <option value="4">전통소주</option>
                            <option value="5">막걸리</option>
                            <option value="6">탁주</option>
                            <option value="7">약주</option>
                            <option value="8">청주</option>
                            <option value="9">과실주</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>도수</th>
                    <td>
                        <select name="p_alc">
                            <option value="선택">선택</option>
                            <option value="1">10% 이하</option>
                            <option value="2">10% ~ 20%</option>
                            <option value="3">20% ~ 30%</option>
                            <option value="4">30% 이상</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>단맛</th>
                    <td>
                        <select name="p_sweet">
                            <option value="선택">선택</option>
                            <option value="1">약함</option>
                            <option value="2">중간</option>
                            <option value="3">강함</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>신맛</th>
                    <td>
                        <select name="p_sour">
                            <option value="선택">선택</option>
                            <option value="1">약함</option>
                            <option value="2">중간</option>
                            <option value="3">강함</option>
                        </select>
                    </td>
                </tr>
                <tr>
                    <th>이미지</th>
                    <td>
                        <input name="p_img" type="file" />
                    </td>
                </tr>
                <tr>
                    <th>상세정보이미지</th>
                    <td>
                        <input name="p_info_img" type="file" />
                    </td>
                </tr>
                <tr>
                    <th>재고</th>
                    <td>
                        <input name="p_stock" type="text" />
                    </td>
                </tr>
            </table>

            <div className="modifyinfoBtn">
                <button type="submit">상품등록</button>
                <button>취소</button>
            </div>
        </form>
    );
}
