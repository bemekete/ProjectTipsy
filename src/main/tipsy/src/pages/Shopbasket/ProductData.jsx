import React, { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";



export default function ProductData(props) {

    // 장바구니 테이블 정보 변수
    const {shopData,setShopData} = props;

    // 체크박스 on/off 변수
    const {checkValid,setCheckValid} = props;

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


    const inputChange = (inputId)=>{
        if(checkValid.includes(inputId)){
            setCheckValid(checkValid.filter((item)=> inputId!= item));
        }else{
            setCheckValid([...checkValid, inputId]);
        }
    };

    return (
        <tbody>
            {shopData.map((item, index)=>(
            <tr key={index}>
                <td>
                    <input 
                    type="checkbox" 
                    name={`CartNo${index+1}`} 
                    id={`CartNo${index+1}`} 
                    defaultChecked 
                    onChange={inputChange(`CartNo${index+1}`)}
                    checked = {checkValid.includes(`CartNo${index+1}`)}
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
            </tr> */}
        </tbody>
    )
}
