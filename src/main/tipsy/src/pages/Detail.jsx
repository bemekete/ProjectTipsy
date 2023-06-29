import { React, useState, useEffect } from 'react';
import '../styles/Detail.scss';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import axios from 'axios';
import { StarScore } from './Mypage/Tableform';

function Detail(props) {
    const [pieces, setPieces] = useState(1); // 구매 정보 - 상품 개수
    const [viewOptionView, setViewOptionView] = useState(false);
    const [popupMessage, setPopupMessage] = useState(false);
    const [bottomPopupMessage, setBottomPopupMessage] = useState(false);

    const [success, setSuccess] = useState(0);
    const navigate = new useNavigate();

    // URL 쿼리 Param 분석 변수 사용
    const location = useLocation();

    const queryparam = new URLSearchParams(location.search);

    const site = queryparam.get('site');

    const [mainImage, setMainImage] = useState(null);

    // 표시할 상품 정보 객체
    const [items, setItems] = useState({
        donghak: {
            title: '동학 1957',
            titDetail:
                '평창동계올림픽 공식 판매주로 선정된 우리 쌀로 빚은 청주',
            titTag: '#구수한 쌀의 맛 #담백한 맛 뒤 느껴지는 쌉쌀함',
            type: '청주',
            alc: 13.0,
            capacity: 375,
            price: 2988,
            detailData: require('../assets/detail_img/donghak_detail.png'),
        },
        hans: {
            title: '한스오차드',
            titDetail: '누구나 쉽게 즐길 수 있는 와인',
            titTag: '#우리나라 최초의 사과 와인 #산뜻하게 피어오르는 오크 풍미',
            type: '과실주',
            alc: 11.0,
            capacity: 750,
            price: 20160,
            detailData: require('../assets/detail_img/hans_detail.png'),
        },
        hansiwool: {
            title: '한시울 40%',
            titDetail: '물 좋기로 소문난 백족산의 지하 암반수로 빚은 증류주',
            titTag: '#누룽지 같은 구수한 풍미 #고도수 증류주를 좋아하신다면',
            type: '증류식소주',
            alc: 40.0,
            capacity: 500,
            price: 21000,
            detailData: require('../assets/detail_img/hansiwool_detail.png'),
        },
        mildam: {
            title: '밀담 40%',
            titDetail: '해적의 술 럼(RUM) 맞아요!',
            titTag: '#럼콕으로 마시면 꿀맛 #홈바 필수템',
            type: '일반증류주',
            alc: 40.0,
            capacity: 360,
            price: 17910,
            detailData: require('../assets/detail_img/mildam_detail.png'),
        },
        monkey: {
            title: '술취한 원숭이',
            titDetail: '빨간맛, 궁금해 Monkey',
            titTag: '#홈파티를 빛낼 술 #우도주막, 로제막걸리!',
            type: '탁주',
            alc: 10.8,
            capacity: 375,
            price: 36000,
            detailData: require('../assets/detail_img/monkey_detail.png'),
        },
        saint: {
            title: '세인트하우스 복숭아 스파클링 와인',
            titDetail: '딸기와인 명인이 만든 복숭아 스파클링 와인',
            titTag: '#통조림 복숭아 같은 달콤한 향 #자두의 새콤한 맛',
            type: '과실주',
            alc: 12.0,
            capacity: 500,
            price: 23000,
            detailData: require('../assets/detail_img/yeon_detail.png'),
        },
        yeon: {
            title: '오미로제 연',
            titDetail: '오미자로 만든 스파클링 와인',
            titTag: '#오미자 스파클링 와인 #샤르마 방식 사용',
            type: '과실주주',
            alc: 8.0,
            capacity: 750,
            price: 50000,
            detailData: require('../assets/detail_img/yeon_detail.png'),
        },
    });

    const [item, setItem] = useState({});

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

    const variableSite = () => {
        setMainImage(props.productData[site]);
        setItem(items[site]);
    };

    useEffect(() => {
        variableSite();
        window.scrollTo(0, 0);
    }, []);

    // 장바구니 테이블 데이터 전송 함수
    const addcart = () => {
        axios
            .post('/product/addcart', {
                p_name: item.title,
                cart_vol: pieces,
            })
            .then((request) => {
                    if (request.data > 0) {
                    setSuccess(1);
                } else {
                    setSuccess(0);
                    alert('로그인 후 이용해주세요.');
                    navigate('/login');
                }
            })
            .catch('에러입니다.');
    };

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
        const OnClicklikebtn = async (item) => {
            try {
                axios
                    .post('/uscon/insertlikecon', {
                        params: {
                            p_seq: item,
                        },
                    })
                    .then(response => {

                        if (response.data == 2) {
                            alert('로그인 후 이용해주세요.');
                        } else if (response.data == 3) {
                            alert('이미 찜하신 상품입니다.');
                        }
                    })
                    .catch(error => {
                        alert("내부 오류로 관심상품 등록을 실패했습니다.");
                    })

            } catch (error) {
            }
        };

        return (
            <div className="flex">
                <div className="detail_tit_img">
                    <img src={`${mainImage}`} alt="" />
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
                        <span>
                            {item.price != null
                                ? item.price.toLocaleString('ko-KR')
                                : 0}
                        </span>
                        원
                    </div>
                    <div className="blue opa5">유통기한: 병입일로부터 2년</div>
                    <div className="blue opa5">보관방법: 냉장보관</div>

                    <div className="likebtn">
                        <button onClick={() => {
                            OnClicklikebtn(1)
                        }}>♥</button>
                    </div>
                </div>
            </div>
        );
    }

    function Description() {
        return (
            <div className="detailScript">
                <img src={`${item.detailData}`} alt="" />
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
                                className={`popupBasket ${popupMessage ? '' : 'displayNone'
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
                    className={`bottomPopupBasket ${bottomPopupMessage ? '' : 'displayNone'
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
                        {/* <img src="../assets/detail_img/down.svg" alt="닫기" /> */}
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
                        <option value={item.title}>{item.title}</option>
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
                <div onClick={(e) => onClickBasket(e, where)}>장바구니</div>
                <button onClick={(e) => onClickSubmit(e, where)}>
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
                        <Link
                            to="#"
                            onClick={(e) => {
                                e.preventDefault();
                                whereis(where);
                            }}
                        >
                            쇼핑 계속하기
                        </Link>
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

    // 장바구니 Button 클릭 시 연결 함수
    function onClickBasket(e, where) {
        e.preventDefault();

        if (where === 'b' && !viewOptionView) {
            setViewOptionView(true);
        } else {
            addcart();

            if (success == 1) {
                if (where === 'b') {
                    setViewOptionView(false);
                    setBottomPopupMessage(true);
                } else {
                    setPopupMessage(true);
                }
            }
        }
    }

    // 구매 Button 클릭 시 연결 함수
    function onClickSubmit(e, where) {
        e.preventDefault();

        if (where === 'b' && !viewOptionView) {
            setViewOptionView(true);
        } else {
            addcart();

            if (success == 1) {
                navigate('/shopbasket');
            }
        }
    }
}

// 임시 삽입할 데이터 객체

export default Detail;
