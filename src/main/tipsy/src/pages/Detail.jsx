import { React, useState } from 'react';
import '../styles/Detail.scss';
import { Link } from 'react-router-dom';
import {StarScore} from "./Mypage/Tableform";

function Detail() {
    const [pieces, setPieces] = useState(0); // 구매 정보 - 상품 개수
    const [viewOptionView, setViewOptionView] = useState(false);
    const [popupMessage, setPopupMessage] = useState(false);
    const [bottomPopupMessage, setBottomPopupMessage] = useState(false);

    // 전체 HTML
    return (
        <div id="detail_container">
            <div className="contents">
                <div className="detailScriptPage">
                    <LeftSide />
                    <SideBar />
                </div>
            </div>
        </div>
    );

    // LeftSide HTML
    function LeftSide() {
        return (
            <div className="leftSide">
                <Title />
                <Description />
                <ReviewWRap />
            </div>
        );
    }

    function Title() {
        return (
            <div className="flex">
                <div className="detail_tit_img">
                    <img
                        src="https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/TOnv-1655794504098-1.jpg"
                        alt=""
                    />
                    {/* <img src=${item.img} alt=${item.title} /> */}
                </div>
                <div className="detail_tit">
                    <div className="detail_tit_top opa5">
                        <span>{item.title}</span>
                    </div>
                    <div className="detail_tit_mid opa5">{item.titDetail}</div>
                    <div className="detail_tit_bot opa5">{item.titTag}</div>
                    <div className="detail_tit_star opa5">
                        <div></div>
                    </div>
                    <div>
                        <div className="font_weight">주종: {item.type}</div>
                        <div className="font_weight">도수: {item.alc}%</div>
                        <div className="font_weight">
                            용량: {item.capacity}ml
                        </div>
                        <div className="opa5">배송기간: 2일 이내 배송</div>
                    </div>
                    <div>판매가격:</div>
                    <div className="price">
                        <span>{item.price.toLocaleString('ko-KR')}</span>원
                    </div>
                    <div className="blue opa5">유통기한: 병입일로부터 2년</div>
                    <div className="blue opa5">보관방법: 냉장보관</div>
                </div>
            </div>
        );
    }

    function Description() {
        return (
            <div className="detailScript">
                <img
                    src={require('../assets/detail_img/donghak_detail.png')}
                    alt=""
                />
                {/* <img src={item.detailScript} alt='상세이미지' /> */}
                <img src={require('../assets/detail_img/kakaotalk.png')} />
            </div>
        );
    }

    function ReviewWRap() {
        return (
            <div className="review-wrap">
                <ReviewFilter />
                <ReviewDetail />
            </div>
        );
    }

    function ReviewFilter() {
        return (
            <div className="review_filter">
                <div>
                    <input id="review-checkbox" type="checkbox" />
                    <label htmlFor="review-checkbox">포토리뷰만 보기</label>
                </div>
                <div>
                    <select>
                        <option value="상세 리뷰순">상세 리뷰순</option>
                        <option value="최신순">최신순</option>
                        <option value="평점 높은 순">평점 높은 순</option>
                        <option value="평점 낮은 순">평점 낮은 순</option>
                    </select>
                </div>
            </div>
        );
    }

    function ReviewDetail() {
        return (
            <>
                {reviewItem.map((item, i) => (
                    <>
                        <div
                            className={`review_detail review${i}`}
                            key={`review + ${i}`}
                        >
                            <div className="review_header">
                                <div className="review_header_name">
                                    {item.user}
                                </div>
                                <div className="review_header_right">
                                    <div>
                                        <div className="review_header_tit">
                                            {item.product}
                                        </div>
                                        <div className="review_star"></div>
                                        <div className="review_date">
                                            {item.date}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="review_txt">{item.contents}</div>
                        </div>

                        <style jsx>{`
                            .review${i} .review_star::after {
                                content: '${StarScore(item.star)}';
                            }
                        `}</style>
                    </>
                ))}
            </>
        );
    }

    // SideBar HTML
    function SideBar() {
        return (
            <>
                <RightSide />
                <BottomSide />
            </>
        );
    }

    function RightSide() {
        return (
            <div className="rightSide">
                <div className="rightFloat">
                    <form>
                        <OrderForm />
                        <div className="guideofShipment">
                            <p>
                                (전국택배) 3,000원
                                <br />
                                (제주도 및 도서산간) 3,000원
                                <br />
                                <b>50,000이상 구매시 무료배송</b>
                            </p>
                        </div>
                        <div className="productBuy_btn">
                            <BuyBtn where="r" />

                            <div
                                className={`popupBasket ${
                                    popupMessage ? '' : 'displayNone'
                                }`}
                            >
                                <CartPopupMessage where="r" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }

    function BottomSide() {
        return (
            <div div className="bottomSide">
                <div className="bottomFloat">
                    <BuyBtn where="b" />
                </div>

                <div
                    className={`bottomPopupBasket ${
                        bottomPopupMessage ? '' : 'displayNone'
                    }`}
                >
                    <CartPopupMessage where="b" />
                </div>
                <OptionView />
            </div>
        );
    }

    function OptionView() {
        return (
            <div className={`optionView ${viewOptionView ? '' : 'unView'}`}>
                <div>
                    <OrderForm />
                    <span
                        className="viewClose"
                        onClick={() => {
                            setViewOptionView(false);
                        }}
                    >
                        <img src="../assets/detail_img/down.svg" alt="닫기" />
                    </span>
                </div>
            </div>
        );
    }

    // 주문 정보 Form 함수
    function OrderForm() {
        return (
            <>
                <div>
                    <div className="label">
                        <label>옵션</label>
                    </div>
                    <select
                        className="optOfProduct"
                        name="option"
                        required
                        defaultValue="default"
                    >
                        <option value="default">{item.title}</option>
                        {/* <option value="soju">소주</option>
                                    <option value="beer">맥주</option>
                                    <option value="wine">와인</option> */}
                    </select>
                </div>
                <div>
                    <div className="label">
                        <label>수량</label>
                    </div>
                    <div className="numofProduct">
                        <div
                            className="numfor minus"
                            onClick={() => {
                                if (pieces > 1) setPieces(pieces - 1);
                            }}
                        >
                            -
                        </div>
                        <input
                            type="text"
                            id="pieces"
                            pattern="\d*"
                            value={pieces}
                            readOnly
                        />
                        <div
                            className="numfor plus"
                            onClick={() => {
                                setPieces(pieces + 1);
                            }}
                        >
                            +
                        </div>
                    </div>
                </div>
                <div>
                    <div className="label">
                        <label>총 상품가격</label>
                    </div>
                    <div className="productPrice">
                        <span>
                            {(item.price * pieces).toLocaleString('ko-KR')}
                        </span>
                        원
                    </div>
                </div>
            </>
        );
    }

    // 장바구니 및 구매 버튼 함수
    function BuyBtn({ where }) {
        return (
            <>
                <div
                    onClick={() => {
                        where === 'r'
                            ? setPopupMessage(true)
                            : setBottomPopupMessage(true);
                    }}
                >
                    장바구니
                </div>
                <button
                    onClick={() => {
                        onClickSubmit(where);
                    }}
                >
                    구매하기
                </button>
            </>
        );
    }

    // 장바구니 팝업 메시지 함수
    function CartPopupMessage({ where }) {
        function whereis(where) {
            if (where === 'r') return setPopupMessage(false);
            else return setBottomPopupMessage(false);
        }

        return (
            <>
                <div className="popupBasketCon">
                    <p>
                        선택하신 상품이 장바구니에 담겼습니다.
                        <br />
                        장바구니로 이동하시겠습니까?
                    </p>
                    <div className="popupBasketBtn">
                        <Link to="#" onClick={e => { e.preventDefault(); whereis(where) }}>쇼핑 계속하기</Link>
                        <Link to="/shopbasket">장바구니 가기</Link>
                    </div>
                </div>
                <span
                    className="popupClose"
                    onClick={() => {
                        whereis(where);
                    }}
                >
                    X
                </span>
                <span></span>
            </>
        );
    }

    // 구매 Button 클릭 시 연결 함수
    function onClickSubmit(where) {
        if (where === 'b' && !viewOptionView) return setViewOptionView(true);
        else return formSubmit();
    }

    function formSubmit() {
        console.log('상품 title, price 등 객체로 저장해서 전달');
    }
}

// 임시 삽입할 데이터 객체
const item = {
    title: '동학 1957',
    titDetail: '평창동계올림픽 공식 판매주로 선정된 우리 쌀로 빚은 청주',
    titTag: '#구수한 쌀의 맛 #담백한 맛 뒤 느껴지는 쌉쌀함',
    type: '청주',
    alc: 13.0,
    capacity: 375,
    price: 2988,
};

const reviewItem = [
    {
        user: '황인규',
        product: item.title,
        star: 4,
        date: '2022.12.23',
        contents:
            '달아서 너무 맛있어요. 입문 하시는 분으로 아주 좋을것 같습니다. 단맛을 싫어 하시는 분은 비추이고 달달한 와인 찾으시면 좋을꺼 같네요. 포도 향도 아주 진하게 잘나서 한변 금방 마셨어요.',
    },
    {
        user: '황인규',
        product: item.title,
        star: 2,
        date: '2022.12.23',
        contents: '달아서 너무 맛없어요.',
    },
];

export default Detail;
