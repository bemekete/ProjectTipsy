import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';




export default function ProductData() {

    useEffect(() => {
        


    }, [])

    return (
        <tbody>
            <tr>
                <td>
                    <input type="checkbox" name="CartNo1" id="CartNo1" defaultChecked />
                </td>
                <td className="td_goods">
                    <Link to="/detail">
                        <img className="goods_img"
                            src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/thumbnail/fWO1-1668403134296-1Z7A1584.jpg"
                            alt="상품 사진" />
                    </Link>막쿠르트
                </td>
                <td className="td_count_Pdt">
                    <div className="goods_num">
                        <span>3개</span>
                        <div>
                            <a href="">
                                <span className="count_Pdt">옵션/수량변경</span>
                            </a>
                        </div>
                    </div>
                </td>

                <td><span className="order_sum_price">13000원</span></td>
                <td>없음</td>
                <td><span className="order_sum_price txt"></span></td>
                <td className="td_delivery">
                    <span>3000원</span>
                </td>
            </tr>
            <tr>
                <td>
                    <input type="checkbox" name="CartNo2" id="CartNo2" defaultChecked />
                </td>
                <td className="td_goods">
                    <Link to="/detail"><img className="goods_img"
                        src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/thumbnail/7rOd-1652094650305-hongsam_thumbnail.png"
                        alt="상품 사진" />
                    </Link>홍삼명주
                </td>
                <td className="td_count_Pdt">
                    <div className="goods_num">
                        <span>2개</span>
                        <div>
                            <a href="">
                                <span className="count_Pdt">옵션/수량변경</span>
                            </a>
                        </div>
                    </div>
                </td>

                <td><span className="order_sum_price">25000원</span></td>
                <td>없음</td>
                <td><span className="order_sum_price txt"></span></td>
                <td className="td_delivery">
                    <span>3000원</span>
                </td>
            </tr>
        </tbody>
    )
}
