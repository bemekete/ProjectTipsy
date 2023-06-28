import { Link } from "react-router-dom";
import React from 'react';
import '../../styles/Shopbasket.scss';
import ProductData from "./ProductData";
import { useState } from "react";
import { useEffect } from "react";

export default function Shopbasket() {
    // 장바구니에 담긴 정보 변수
    const [shopData, setShopData] = useState([]);

    //전체 선택/ 전체 해제시 나머지 체크박스 상태 설정 변수
    const [checkValid, setCheckValid] = useState([]);

    // 전체선택 input 체크박스 상태 변수
    const [isCheckedAll, setIsCheckedAll] = useState(false);

    // 합계 계산용 변수
    const [sum, setSum] = useState([]);

    // 최초 랜더링 시 전체 체크박스 체크를 위한 함수 호출
    useEffect(() => {
        inputAll(true);
        setSum(shopData);
    }, [shopData]);



    const inputAll = (checked) => {
        setIsCheckedAll(checked);
        if (checked) {
            // 모두 선택할 경우
            const temp = []; shopData.map((item)=>temp.push(item.p_name)) ;
            setCheckValid(temp);
            setSum(shopData);
        } else {
            // 모두 해제할 경우
            setCheckValid([]);
            setSum([]);
        }
    };
    return (
        <div id="basket_container">
            <div id="contents">
                <div className="location">
                    <span><Link to="/" className="main_home">HOME {'>'}</Link > 장바구니</span>
                </div>
                <div className="main_contents">
                    <div className="sub_contents">
                        <div className="order_tit">
                            <span>장바구니</span>
                            <ul>
                                <li className="Now_select">01 장바구니<img className="tri_arrow"
                                    src={require("../../assets/basket_img/right-arrow.png")} alt="화살표이미지" /></li>
                                <li>02 주문서작성/결제<img className="tri_arrow"
                                    src={require("../../assets/basket_img/right-arrow.png")} alt="화살표이미지" /></li>
                                <li>03 주문완료</li>
                            </ul>
                        </div>
                        <hr />
                        <form id="formCart">
                            <div className="cart_count_list">
                                <table>
                                    <colgroup>
                                        <col />
                                        <col width="30%" />
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                        <col />
                                    </colgroup>
                                    <thead>
                                        <tr>
                                            <th scope="col">
                                                <input
                                                    type="checkbox"
                                                    name="allCheck"
                                                    id="allCheck"
                                                    onChange={(e) => inputAll(e.target.checked)}
                                                    checked={isCheckedAll}
                                                />
                                            </th>
                                            <th scope="col">상품/옵션 정보
                                            </th>
                                            <th scope="col">수량</th>
                                            <th scope="col">상품 금액</th>
                                            <th scope="col">할인/적립</th>
                                            <th scope="col">합계 금액</th>
                                            <th scope="col">배송비</th>
                                        </tr>
                                    </thead>
                                    <ProductData
                                        shopData={shopData}
                                        setShopData={setShopData}
                                        checkValid={checkValid}
                                        setCheckValid={setCheckValid}
                                        setIsCheckedAll={setIsCheckedAll}
                                        setSum={setSum}
                                        sum={sum}
                                    />
                                </table>
                            </div>
                            <p className="no_data displayNone">장바구니에 담겨있는 상품이 없습니다.</p>
                        </form>
                        <div className="btn_Cart_Under">
                            <Link to="/mainpage">
                                <em>쇼핑 계속하기</em>
                            </Link>
                        </div>
                    </div>
                    <div className="price_sum">
                        <div className="price_sum_list">
                            <dl>
                                <dt>총 <strong>{sum.length >= 1 ? sum.reduce((calcul, item) => calcul + item.cart_vol, 0) : 0}</strong>개의 상품</dt>
                                <dd><strong>{sum.length >= 1 ? sum.reduce((calcul, item) => calcul + (item.p_price * item.cart_vol), 0).toLocaleString() : 0}</strong>원</dd>
                            </dl>
                            <span><img src={require("../../assets/basket_img/plus.jpg")} alt="더하기 그림" width="20px" /></span>
                            <dl>
                                <dt>배송비</dt>
                                <dd><strong>{sum.length >= 1 ? "3,000" : 0}</strong>원</dd>
                            </dl>
                            <span><img src={require("../../assets/basket_img/plus.jpg")} alt="더하기 그림" width="20px" /></span>
                            <dl>
                                <dt>합계</dt>
                                <dd><strong>{((sum.length >= 1 ? sum.reduce((calcul, item) => calcul + (item.p_price * item.cart_vol), 0) : 0) + (sum.length >= 1 ? 3000 : 0)).toLocaleString()} </strong>원</dd>
                            </dl>
                        </div>
                    </div>
                    <div className="order_box">
                        <span className="left_order_box">
                            <button className="goods_delete_btn" type="button">선택 상품 삭제</button>
                            <button className="" type="button">선택 상품 찜</button>
                        </span>
                        <form action="../createOrder/createOrder.html">
                            <span className="right_order_box">
                                <button className="" type="submit">선택 상품 주문</button>
                                <button className="" type="submit">전체 상품 주문</button>
                            </span>
                        </form>
                    </div>
                </div>
            </div>
            <div className="main_recommend">
                <div className="recommend_tit">
                    <span>이런 제품은 어떠세요?</span>
                    <span>당신을 위한 맞춤 추천, 최근 본 상품의 연관상품입니다.</span>
                </div>
                <div className="product_main">
                    <table>
                        <colgroup>
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                            <col />
                        </colgroup>
                        <tbody>
                            <tr>
                                <th>
                                    <Link to="/detail">
                                        <div><img
                                            src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/thumbnail/s7bN-1671603090982-thumbnail.jpg"
                                            alt="술 사진" className="pro_thumbnail" /></div>
                                    </Link>
                                    <div>한영석청명주</div>
                                </th>
                                <th>
                                    <Link href="../detail/detail_saint.html" >
                                        <div><img
                                            src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/thumbnail/3MJv-1672710004913-1.jpg"
                                            alt="술 사진" className="pro_thumbnail" /></div>
                                    </Link>
                                    <div>한주 35%</div>
                                </th>
                                <th>
                                    <Link to="/detail">
                                        <div><img
                                            src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/thumbnail/fWO1-1668403134296-1Z7A1584.jpg"
                                            alt="술 사진" className="pro_thumbnail" /></div>
                                    </Link>
                                    <div>막쿠르트</div>
                                </th>
                                <th>
                                    <Link href="../detail/detail_saint.html" >
                                        <div><img
                                            src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/thumbnail/7rOd-1652094650305-hongsam_thumbnail.png"
                                            alt="술 사진" className="pro_thumbnail" /></div>
                                    </Link>
                                    <div>홍삼명주</div>
                                </th>
                                <th>
                                    <a href="../detail/detail_saint.html" />
                                    <div><img
                                        src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/thumbnail/CjOs-1663250480886-1.jpg"
                                        alt="술 사진" className="pro_thumbnail" /></div>
                                    <div>스위트 와인</div>
                                </th>
                                <th>
                                    <a href="../detail/detail_saint.html" />
                                    <div><img
                                        src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/thumbnail/ayGA-1658114266997-1.jpg"
                                        alt="술 사진" className="pro_thumbnail" /></div>
                                    <div>여유 19%</div>
                                </th>
                            </tr>
                            <tr>
                                <td><a href="../detail/detail_saint.html"><span>45,000원</span></a></td>
                                <td><a href="../detail/detail_saint.html"><span>18,000원</span></a></td>
                                <td><a href="../detail/detail_saint.html"><span>12,000원</span></a></td>
                                <td><a href="../detail/detail_saint.html"><span>14,000원</span></a></td>
                                <td><a href="../detail/detail_saint.html"><span>25,000원</span></a></td>
                                <td><a href="../detail/detail_saint.html"><span>22,000원</span></a></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
            <div className="optionView displayNone">
                <div className="goods_count_box">
                    <div>
                        <p>옵션 선택
                            <span className="overviewRemover">
                                <img src="../image/close.png" alt="닫기" />
                            </span>
                        </p>
                        <div className="count_box_main">
                            <div className="option_tit">
                                <dl>
                                    <dt></dt>
                                    <dd></dd>
                                    <dd>세 살 야쿠르트, 여든까지 <span>막쿠르트</span></dd>
                                </dl>
                            </div>
                            <table>
                                <colgroup>
                                    <col width=" 30%" />
                                    <col width=" 30%" />
                                    <col />
                                    <col />
                                </colgroup>
                                <tbody className="option_select">
                                    <tr>
                                        <td>
                                            <ul className="optionSelect">
                                                <li><button></button></li>
                                            </ul>
                                            <a href="" className="select_scroll_img"></a>
                                        </td>
                                        <td></td>
                                        <td>
                                            <div className="option_select_btn">
                                                <button data-count-value="1">+</button>
                                                <button data-count-value="-1">-</button>
                                            </div>
                                        </td>
                                        <td></td>
                                    </tr>
                                </tbody>
                            </table>

                        </div>
                        <div className="count_button_box">
                            <button><span>취소</span></button>
                            <button><span>확인</span></button>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
