import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

export default function ProductForm() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        // onChange되는 값 담을 변수
        p_name: '',
        p_price: '',
        p_category: '',
        p_category_detail: '',
        p_alc: '',
        p_sweet: '',
        p_sour: '',
        p_stock: '',
        uploadfile1: null,
        uploadfile2: null,
    });

    // 이미지 제외 onchange
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: value,
        }));
    };

    // 이미지 onchange
    const handleFileChange = (e) => {
        const { name, files } = e.target;
        setFormData((formData) => ({
            ...formData,
            [name]: files[0],
        }));
    };

    // 상품등록
    const addProduct = (e) => {
        e.preventDefault();

        // FormData생성
        const formDataToSend = new FormData();

        // Object.entries 함수를 사용하여 formData 객체의 키-값 쌍을 배열로 변환
        //  forEach 메서드를 사용하여 각 쌍에 대해 append 함수를 호출
        Object.entries(formData).forEach(([key, value]) => {
            formDataToSend.append(key, value);
        });

        const config = {
            headers: {
                'content-type': 'multipart/form-data',
            },
        };

        axios
            .post('/product/addProduct', formDataToSend, config)
            .then((response) => {
                console.log(response.data);
                navigate('/adminpage/productboard');
            })
            .catch((error) => {
                console.error(error);
            });
    };

    return (
        <form onSubmit={addProduct} className="forminfo">
            <table className="userinfoTable">
                <tbody>
                    <tr>
                        <th>상품명</th>
                        <td>
                            <input
                                name="p_name"
                                type="text"
                                value={formData.p_name}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>상품가격</th>
                        <td>
                            <input
                                name="p_price"
                                type="text"
                                value={formData.p_price}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>상품종류</th>
                        <td>
                            <select
                                name="p_category"
                                value={formData.p_category}
                                onChange={handleChange}
                            >
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
                            <select
                                name="p_category_detail"
                                value={formData.p_category_detail}
                                onChange={handleChange}
                            >
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
                            <select
                                name="p_alc"
                                value={formData.p_alc}
                                onChange={handleChange}
                            >
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
                            <select
                                name="p_sweet"
                                value={formData.p_sweet}
                                onChange={handleChange}
                            >
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
                            <select
                                name="p_sour"
                                value={formData.p_sour}
                                onChange={handleChange}
                            >
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
                            <input
                                name="uploadfile1"
                                type="file"
                                onChange={handleFileChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>상세정보이미지</th>
                        <td>
                            <input
                                name="uploadfile2"
                                type="file"
                                onChange={handleFileChange}
                            />
                        </td>
                    </tr>
                    <tr>
                        <th>재고</th>
                        <td>
                            <input
                                name="p_stock"
                                type="text"
                                value={formData.p_stock}
                                onChange={handleChange}
                            />
                        </td>
                    </tr>
                </tbody>
            </table>

            <div className="modifyinfoBtn">
                <button type="submit">상품등록</button>
                <button
                    onClick={(e) => {
                        e.preventDefault();
                        navigate(-1);
                    }}
                >
                    취소
                </button>
            </div>
        </form>
    );
}
