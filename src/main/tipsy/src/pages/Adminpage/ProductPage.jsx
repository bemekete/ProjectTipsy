import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Listpage({ axios }) {
    const [productData, setProductData] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        fetchProductData();
    }, []);

    const fetchProductData = () => {
        axios
            .get('/product/adminpro', {
                params: { p_category: 0 },
            })
            .then((response) => {
                setProductData(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <table className="ListTable">
                <thead>
                    <tr>
                        <th>상품번호</th>
                        <th>상품명</th>
                        <th>상품가격</th>
                        <th>재고</th>
                        <th>상품조회수</th>
                        <th>수정</th>
                        <th>삭제</th>
                    </tr>
                </thead>
                <tbody>
                    {productData.map((product, i) => (
                        <tr key={i}>
                            <td>{product.p_seq}</td>
                            <td>{product.p_name}</td>
                            <td>{product.p_price}</td>
                            <td>{product.p_stock}</td>
                            <td>{product.p_cnt}</td>
                            <td className="listdet">
                                <button
                                    onClick={() => {
                                        onClickDetail(product);
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

            <div className="Pagination"></div>
        </>
    );

    function onClickDetail(product) {
        navigate('/adminpage/productinfo', { state: { product } });
    }

    function onClickDelete() {}
}
