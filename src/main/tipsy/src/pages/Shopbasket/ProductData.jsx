import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";



export default function ProductData(props) {

    // 장바구니 테이블 정보 변수
    const { shopData, setShopData } = props;

    // 체크박스 on/off 변수
    const { checkValid, setCheckValid } = props;

    // 체크박스 on 상태의 data 담는 변수
    const { sum, setSum } = props;

    useEffect(() => {
        fetchData();
    }, [])

    // 장바구니 테이블에 담겨져 있는 정보 가져오는 함수
    const fetchData = async () => {
        try {
            const response = await axios.get("/product/basketproduct");
            setShopData(response.data); // head 등 정보 제외 실제 데이터만 사용하기위해 .data 사용

        } catch (error) {
            console.log("error" + error);
        }
    }

    console.log(sum);

    const inputChange = async (inputId) => {
        // 이미 체크 돼 있을 시 해제
        if (checkValid.includes(inputId)) {
            setCheckValid(checkValid.filter((item) => inputId != item));
            props.setIsCheckedAll(false);
            setSum(sum.filter((item) => item.p_name != inputId));
            // 체크 안되어 있을 시 체크
        } else {
            await setCheckValid([...checkValid, inputId]);
            console.log(checkValid);
            if (checkValid.length >= shopData.length - 1) {
                props.setIsCheckedAll(true);
            }
            
            setSum([...sum,shopData.find((item) => item.p_name == inputId)]);
        }
    };


    return (
        <tbody>
            {shopData.map((item, index) => (
                <tr key={index}>
                    <td>
                        <input
                            type="checkbox"
                            name={item.p_name}
                            id={item.p_name}
                            onChange={(e) => inputChange(item.p_name)}
                            checked={checkValid.includes(item.p_name)}
                        />
                    </td>
                    <td className="td_goods">
                        <Link to="/detail">
                            <img className="goods_img"
                                src={item.p_img}
                                alt="상품 사진" />
                        </Link>{item.p_name}
                    </td>
                    <td className="td_count_Pdt">
                        <div className="goods_num">
                            <span>{item.cart_vol}개</span>
                            <div>
                                <a href="">
                                    <span className="count_Pdt">옵션/수량변경</span>
                                </a>
                            </div>
                        </div>
                    </td>

                    <td><span className="order_sum_price">{item.p_price.toLocaleString()}원</span></td>
                    <td>없음</td>
                    <td><span className="order_sum_price txt">{(item.p_price * item.cart_vol).toLocaleString()}원</span></td>
                    <td className="td_delivery">
                        <span>3,000원</span>
                    </td>
                </tr>
            ))}
            {/* <tr>
                <td>
                    <input type="checkbox" name="CartNo1" id="CartNo1" />
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
            </tr> */}
        </tbody>
    )
}
