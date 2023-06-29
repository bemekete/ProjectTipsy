import React from 'react';
import { useLocation } from 'react-router-dom';

export function ProductInfo() {
    const location = useLocation();
    const product = location.state.product;
    return (
        <div id="userinfo_container">
            <p className="pageTitle">상품 상세정보</p>
            <div id="contents">
                <div className="forminfo">
                    <table className="userinfoTable">
                        <tr>
                            <th>상품사진</th>
                            <td>
                                <img
                                    src={process.env.PUBLIC_URL + product.p_img}
                                    alt="상품이미지"
                                />
                            </td>
                        </tr>
                        <tr>
                            <th>상품명</th>
                            <td>{product.p_name}</td>
                        </tr>
                        <tr>
                            <th>상품가격</th>
                            <td>{product.p_price}</td>
                        </tr>
                        <tr>
                            <th>재고</th>
                            <td>{product.p_stock}</td>
                        </tr>
                    </table>
                </div>
            </div>
        </div>
    );
}
