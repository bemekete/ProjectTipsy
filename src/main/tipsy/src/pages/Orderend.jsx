import React from 'react';
import '../styles/Orderend.scss';
import { Link } from 'react-router-dom';

export default function Orderend() {
    return (
        <div id="order_end_main">
            {/* <!-- 오른쪽 상단 위 --> */}
            <div className="location">
                <span>
                    <Link to="#" className="main_home">
                        HOME
                    </Link>
                    장바구니
                </span>
            </div>

            {/* <!-- 주문 완료 --> */}
            <div className="order_tit">
                <span>주문완료</span>
                <ul>
                    <li className="Now_select">
                        01 장바구니
                        <img
                            className="tri_arrow"
                            src={require('../assets/orderend_img/right-arrow-black-triangle.png')}
                            alt="화살표이미지"
                        />
                    </li>
                    <li>
                        02 주문서작성/결제
                        <img
                            className="tri_arrow"
                            src={require('../assets/orderend_img/right-arrow-black-triangle.png')}
                            alt="화살표이미지"
                        />
                    </li>
                    <li>03 주문완료</li>
                </ul>
            </div>
            <hr />

            <div className="order_end_main_container">
                {/* <!-- 진짜 main --> */}
                {/* <!-- 첫번째 Box --> */}
                <div className="box1">
                    <div className="box1_container">
                        <div className="box1header">
                            주문이 정상적으로 완료되었습니다.
                        </div>
                        <figure>
                            <table>
                                <colgroup>
                                    <col />
                                    <col />
                                </colgroup>

                                <tbody>
                                    <tr>
                                        <th className="tablepad ">주문번호</th>
                                        <td className="tablepad pointColor">
                                            20230308-012727
                                        </td>
                                    </tr>

                                    <tr>
                                        <th className="tablepad ">
                                            배송지정보
                                        </th>
                                        <td className="tablepad ">홍길동</td>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <td>070-1111-2222</td>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <td>
                                            경기 성남시 분당구 돌마로 47 5층
                                            504호
                                        </td>
                                    </tr>
                                    <tr>
                                        <th className="tablepad ">결제정보</th>
                                        <td className="tablepad ">신용카드</td>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <td>일시불</td>
                                    </tr>
                                    <tr>
                                        <th></th>
                                        <td>
                                            승인일시 : <span>2023.04.22</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </figure>
                    </div>
                </div>

                {/* <!-- 두번째 Box --> */}
                <div className="box2">
                    <div className="box2_container">
                        <div className="rowHeight borderBottom">
                            주문 완료 상품
                        </div>

                        {() => {
                            for (let i = 0; i < 2; i++) {
                                return (
                                    <div className="product_container borderBottom box2Padding">
                                        <img
                                            src={
                                                'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/thumbnail/fWO1-1668403134296-1Z7A1584.jpg'
                                            }
                                            alt="막쿠르트img"
                                        />
                                        <div className="product_text">
                                            <div>막쿠르트</div>

                                            <div>
                                                <div>
                                                    [ONLY 도르리] 막쿠르트[2...
                                                </div>
                                                <div>
                                                    [450ml X 2병] 막쿠르트
                                                </div>
                                            </div>

                                            <div className="price_text">
                                                <span>13,000원 /</span>
                                                <span>수량 1개</span>
                                            </div>
                                        </div>
                                    </div>
                                );
                            }
                        }}
                        <div className="product_container borderBottom box2Padding">
                            <img
                                src={
                                    'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/thumbnail/fWO1-1668403134296-1Z7A1584.jpg'
                                }
                                alt="막쿠르트img"
                            />
                            <div className="product_text">
                                <div>막쿠르트</div>

                                <div>
                                    <div>[ONLY 도르리] 막쿠르트[2...</div>
                                    <div>[450ml X 2병] 막쿠르트</div>
                                </div>

                                <div className="price_text">
                                    <span>13,000원 /</span>
                                    <span>수량 1개</span>
                                </div>
                            </div>
                        </div>

                        <div className="mainFlex rowHeight borderBottom box2Padding">
                            <div>
                                <div>총 상품 금액</div>
                                <div>
                                    <span>13,000</span>원
                                </div>
                            </div>
                            <div>
                                <div>총 배송비</div>
                                <div>
                                    <span>3,000</span>원
                                </div>
                            </div>
                            <div>
                                <div>총 할인금액</div>
                                <div>
                                    <span>5,000</span>원
                                </div>
                            </div>
                            <div>
                                <div>포인트 적립</div>
                                <div>
                                    <span>110</span>원
                                </div>
                            </div>
                        </div>

                        <div className="paymentAmount rowHeight box2Padding">
                            <div>결제 금액</div>
                            <div>
                                <span>11,000</span>원
                            </div>
                        </div>
                    </div>
                </div>

                {/* <!-- 적립 --> */}
                <div>
                    <div className="box3">
                        <div>
                            구매적립 : 구매확정시
                            <span className="pointColor">110원</span>
                            적립예정
                        </div>

                        <div>
                            동일 상품(상품 번호 기준)에 대한 구매평 적립 1회로
                            제한
                        </div>
                    </div>
                </div>
                {/* <!-- 버튼 --> */}
                <div className="mainbtn btnTop">
                    <Link to="/home">처음화면</Link>
                    <Link to="/mypage">마이페이지</Link>
                </div>
            </div>
        </div>
    );
}
