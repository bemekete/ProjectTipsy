import React from 'react';
import '../styles/CreateOrder.scss';

function CreateOrder() {
    return (
        <>
            {/* <!-- ####################################### main ########################################## --> */}
            <div id="createorder_main">
                {/* <!-- 맨 밖 선 --> */}
                <div className="main_container">
                    {/* <!-- main 상단 -->
                <!-- 오른쪽 상단 위 --> */}
                    <div className="location">
                        <span>
                            <a href="#" className="main_home">
                                HOME
                            </a>{' '}
                            장바구니
                        </span>
                    </div>

                    {/* <!-- 주문 / 결제 --> */}
                    <div className="order_tit">
                        <span>주문 / 결제</span>
                        <ul>
                            <li className="Now_select">
                                <a href="../shopBasket/shopBasket.html">
                                    01 장바구니
                                </a>
                                <img
                                    className="tri_arrow"
                                    src={require('../assets/createorder_img/right-arrow-black-triangle.png')}
                                    alt="화살표이미지"
                                />
                            </li>
                            <li>
                                02 주문서작성/결제
                                <img
                                    className="tri_arrow"
                                    src={require('../assets/createorder_img/right-arrow-black-triangle.png')}
                                    alt="화살표이미지"
                                />
                            </li>
                            <li>03 주문완료</li>
                        </ul>
                    </div>
                    <hr />

                    <form action="../orderEnd/orderEnd.html">
                        <div className="form_container main_marginTop20">
                            {/* <!-- Box --> */}
                            <div className="leftContainer">
                                {/* <!-- 배송지 --> */}
                                <div className="box">
                                    <div className="main_bold nthchild_1">
                                        배송지
                                    </div>

                                    <div className="main_marginTop20">
                                        <div>홍길동</div>

                                        <div>010-1111-2222</div>

                                        <div className="main_marginTop20">
                                            <span>
                                                경기 성남시 분당구 돌마로 47
                                            </span>
                                            <span>5층 504호</span>
                                        </div>
                                    </div>

                                    <div className="defaultAddress main_marginTop20">
                                        기본 배송지
                                    </div>
                                </div>

                                {/* <!-- 주문 예정 상품 --> */}
                                <div className="box">
                                    <div className="main_bold nthchild_1">
                                        주문 예정 상품
                                    </div>
                                    <div className="product_container main_marginTop20">
                                        <img
                                            src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/thumbnail/fWO1-1668403134296-1Z7A1584.jpg"
                                            alt="막쿠르트img"
                                        />
                                        <div className="product_text">
                                            <div>막쿠르트</div>

                                            <div>
                                                <div className="main_bold">
                                                    [ONLY 도르리] 막쿠르트[2...
                                                </div>
                                                <div>
                                                    [450ml X 2병] 막쿠르트
                                                </div>
                                            </div>

                                            <div className="price_text">
                                                {/* <!-- 이거 주문 총액이 아니라 상품 금액으로 해야함. 지금은
                                        상품이 1개라서 총액이랑 상품금액 같이 씀 --> */}
                                                <span className="totalProductMoney"></span>
                                                원 /<span>수량 1개</span>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="main_textAlign main_marginTop20 productHeight proHr1">
                                        <span className="deliveryMoney"></span>
                                        원
                                    </div>
                                    <div className="mainFlex productHeight proHr2">
                                        <div>주문 총액</div>
                                        <div>
                                            <span className="totalProductMoney"></span>
                                            원
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- 쿠폰, 포인트 --> */}
                                <div className="couponPoint box">
                                    <div className="main_bold nthchild_1">
                                        쿠폰 / 포인트
                                    </div>

                                    <div className="mainFlex main_marginTop20">
                                        <div>쿠폰 입력</div>
                                        <div>
                                            <input
                                                type="text"
                                                name="couponCode"
                                                size="25"
                                                placeholder="쿠폰 코드를 입력해주세요"
                                                className="main_input"
                                            />
                                            <button
                                                type="button"
                                                className="couponBtn"
                                            >
                                                등록
                                            </button>
                                        </div>
                                    </div>

                                    <div className="mainFlex couponHeight main_marginTop10">
                                        <div>쿠폰 선택</div>
                                        <div className="mainFlex flexGap">
                                            <div>5개</div>
                                            <img
                                                alt="접기 img"
                                                className="main_down"
                                                src={require('../assets/createorder_img/down.svg')}
                                            />
                                        </div>
                                    </div>

                                    <div className="mainFlexAll couponClickBtn main_marginTop10 main_none">
                                        <div>
                                            <div data-coupon-won="3000">
                                                [신규가입] 3,000원 할인 쿠폰
                                            </div>
                                            <button type="button"></button>
                                        </div>
                                        <div>
                                            <div data-coupon-won="2000">
                                                [신규가입] 2,000원 할인 쿠폰
                                            </div>
                                            <button type="button"></button>
                                        </div>
                                        <div>
                                            <div data-coupon-won="1000">
                                                [신규가입] 1,000원 할인 쿠폰
                                            </div>
                                            <button type="button"></button>
                                        </div>
                                        <div>
                                            <div data-coupon-won="3000">
                                                [신규가입] 3,000원 배송비 할인
                                                쿠폰
                                            </div>
                                            <button type="button"></button>
                                        </div>
                                    </div>

                                    <div className="mainFlex main_marginTop20">
                                        <div>포인트</div>
                                        <input
                                            type="text"
                                            name="points"
                                            size="35"
                                            placeholder="사용 할 포인트를 입력해 주세요"
                                            className="main_input"
                                        />
                                    </div>

                                    <div className="pointAll main_marginTop10">
                                        <button
                                            type="button"
                                            className="pointAllBtn"
                                        ></button>
                                        <div>전액 사용</div>
                                    </div>

                                    <div className="main_textAlign usePoint main_marginTop10 pointColor">
                                        {/* <!-- &nbsp; pointAll이랑 묶을려고 공백 안주고 gap줌 --> */}
                                        <div>사용 가능한 포인트 :</div>
                                        {/* <!-- js --> */}
                                        <div>
                                            <span className="point"></span>p
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- 결제 방법 --> */}
                                <div className="main_bold box">
                                    <div className="nthchild_1">결제 방법</div>

                                    <div className="paymentMethod main_marginTop20">
                                        {/* <!-- click event --> */}
                                        <div>신용카드</div>
                                        <div>가상계좌</div>
                                        <div className="kakaoPay">
                                            카카오페이
                                        </div>
                                        <div className="naverPay">
                                            네이버페이
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="rightContainer">
                                {/* <!-- 이용 동의 --> */}
                                <div className="agreeUse box">
                                    <input
                                        type="checkbox"
                                        name="agree_use"
                                        id="agree_use"
                                        value="agree_use"
                                        required
                                    />
                                    <label
                                        htmlFor="agree_use"
                                        className="information_agree"
                                    >
                                        <div>
                                            <span>구매자의 정보수집, 이용</span>
                                            <span>(필수)</span>
                                        </div>
                                    </label>
                                    <img
                                        src={require('../assets/createorder_img/down.svg')}
                                        alt="접기 이미지"
                                        className="main_down"
                                    />
                                </div>

                                <p className="agreeText main_none">
                                    <b>개인정보 판매자 제공에 동의합니다.</b>
                                    제공받는 자 : “양조장” 목적 : 판매자와
                                    구매자 사이의 원활한 거래 진행, 상품의
                                    배송을 위한 배송지 확인, 고객상담 및
                                    불만처리 등명 정보 : 구매자 정보 (이름,
                                    전화번호, 주소), 수취인 정보(이름, 전화번호,
                                    주소) 보유기간 : 발송완료 후 90일
                                    <b>
                                        전통주 구매자의 정보수집·이용에
                                        동의합니다.
                                    </b>
                                    제공받는 자 : 관할 세무서장 목적 : 주류
                                    통신판매기록부 관리 및 국세청 신고 정보 :
                                    구매자 정보 (이름, 주소, 생년월일(본인인증
                                    정보를 이용함), 주문상품, 수량, 주문금액)
                                    보유기간 : 회원 탈퇴 시까지 단, 관계법령의
                                    규정에 따라 보존할 의무가 있으며 해당
                                    기간동안 보존
                                    <span className="agree_red">
                                        ※ 동의하지 않으실 경우 구매가
                                        제한됩니다.
                                    </span>
                                </p>

                                {/* <!-- 계산서 --> */}
                                <div className="receiptCon box">
                                    <div className="main_bold nthchild_1">
                                        계산서
                                    </div>

                                    <div className="mainFlexAll bill">
                                        {/* <!-- js --> */}
                                        <div>
                                            <div>결제방법</div>
                                            <div>
                                                <span className="payment">
                                                    -
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <div>총 상품금액</div>
                                            <div>
                                                <span className="totalProductMoney"></span>
                                                원
                                            </div>
                                        </div>
                                        <div>
                                            <div>총 배송비</div>
                                            {/* <!-- 기본값 3,000원. 얼마 이상은 0원뜨게 if문 --> */}
                                            <div>
                                                <span className="deliveryMoney"></span>
                                                원
                                            </div>
                                        </div>
                                        <div>
                                            <div>포인트 사용</div>
                                            <div>
                                                <span className="point">0</span>
                                                원
                                            </div>
                                        </div>
                                        <div>
                                            <div>쿠폰</div>
                                            <div>
                                                <span className="coupon">
                                                    -
                                                </span>
                                            </div>
                                        </div>
                                        <div>
                                            <div>총 할인</div>
                                            {/* <!-- <div>-1,300</div> -->
                                        <!-- 포인트 + 쿠폰 --> */}
                                            <div>
                                                <span className="totalDiscount"></span>
                                                원
                                            </div>
                                        </div>
                                    </div>

                                    <div className="mainFlex main_bold totalPaymentMoney">
                                        <div>총 결제 금액</div>
                                        {/* <!-- 총 상품금액 + 총 배송비 - 총 할인 --> */}
                                        <div>
                                            <span className="totalMoney"></span>
                                            원
                                        </div>
                                    </div>

                                    <div className="submitBtn">
                                        {/* <!-- js --> */}
                                        <button type="submit">결제하기</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}

export default CreateOrder;
