import { useParams, Link } from 'react-router-dom';
import { ContentsForm, PostboxForm, QnaboxForm, ReviewboxForm, ShipmentForm } from './Tableform';
import { PageButton } from '../Boardtable';
import {useState} from "react";
import axios from "axios";

export default function Category() {
    return (
        <div className="category" id="category">
            <CategoryList />
            <ListContents />
        </div>
    );
}

function CategoryList() {
    function onClickCategory(e) {
        const category = document.querySelectorAll('.categoryList li');

        for (let i = 0; i < category.length; i++) {
            category[i].classList.remove('nowpage');
        }
        e.target.parentNode.classList.add('nowpage');
    }

    return (
        <ul className="categoryList">
            <li className="nowpage">
                <Link
                    to="/mypage/shipment"
                    onClick={(e) => {
                        onClickCategory(e);
                    }}
                >
                    주문 내역
                </Link>
            </li>
            <li>
                <Link
                    to="/mypage/qnabox"
                    onClick={(e) => {
                        onClickCategory(e);
                    }}
                >
                    문의 내역
                </Link>
            </li>
            <li>
                <Link
                    to="/mypage/reviewbox"
                    onClick={(e) => {
                        onClickCategory(e);
                    }}
                >
                    작성한 리뷰
                </Link>
            </li>
            <li>
                <Link
                    to="/mypage/likecon"
                    onClick={(e) => {
                        onClickCategory(e);
                    }}
                >
                    관심 상품
                </Link>
            </li>
            <li>
                <Link
                    to="/mypage/currentcon"
                    onClick={(e) => {
                        onClickCategory(e);
                    }}
                >
                    최근 본 상품
                </Link>
            </li>
            <li>
                <Link
                    to="/mypage/alcstyle"
                    onClick={(e) => {
                        onClickCategory(e);
                    }}
                >
                    나의 음주 스타일
                </Link>
            </li>
        </ul>
    )
}

function ListContents() {
    const { data } = useParams();

    return (
        <div className="listContents">
            {data == 'shipment' && <Shipment />}
            {data == 'qnabox' && <Qnabox />}
            {data == 'reviewbox' && <Reviewbox />}
            {data == 'likecon' && <Likecon />}
            {data == 'currentcon' && <Currentcon />}
            {data == 'alcstyle' && <Alcstyle />}
        </div>
    );

    // 주문배송
    function Shipment() {
        if (1) {
            return <ShipmentForm />;
        } else {
            return (
                <>
                    <div className="icon">
                        <img
                            src={require('../../assets/mypage_img/noun-shipment-1540091.png')}
                        />
                    </div>
                    <div>주문 내역이 없습니다.</div>
                </>
            );
        }
    }

    // 문의내역
    function Qnabox() {
        const [qnalist, setQnalist] = useState([]);
        const [pmk, setPmk] = useState({});

        axios
            .get('/mypage/qnalist',{
                params: {
                    id: 'ddd', // 세션 아이디 전송
                    rowsPerPage: 5,
                }
            })
            .then((response) => {
                setQnalist(response.data.list);
                setPmk(response.data.pmk);

            })
            .catch((error) => {
                console.log(error);
            });

        if (qnalist != null) {
            return <QnaboxForm list={qnalist} pmk={pmk}/>
        } else {
            return (
                <>
                    <div className="icon">
                        <img
                            src={require('../../assets/mypage_img/noun-browser-552736.png')}
                        />
                    </div>
                    <div>작성한 게시물이 없습니다.</div>
                </>
            );
        }
    }

    // 리뷰
    function Reviewbox() {
        const [reviewlist, setReviewlist] = useState([]);
        const [pmk, setPmk] = useState({});

        axios
            .get('/reviewlist')
            .then((response) => {
                setReviewlist(response.data.list);
                setPmk(response.data.pmk);

            })
            .catch((error) => {
                console.log(error);
            });

        if (1) {
            return <ReviewboxForm list={reviewlist} pmk={pmk} />
        } else {
            return (
                <>
                    <div className="icon">
                        <img
                            src={require('../../assets/mypage_img/noun-browser-552736.png')}
                        />
                    </div>
                    <div>작성한 게시물이 없습니다.</div>
                </>
            );
        }
    }

    // 찜한 상품
    function Likecon() {
        if (1) {
            return <ContentsForm />;
        } else {
            return (
                <>
                    <div className="icon">
                        <img
                            src={require('../../assets/mypage_img/noun-heart-10024.png')}
                        />
                    </div>
                    <div>찜한 상품이 없습니다.</div>
                </>
            );
        }
    }

    // 최근 본 상품
    function Currentcon() {
        if (1) {
            return <ContentsForm />;
        } else {
            return (
                <>
                    <div className="icon">
                        <img
                            src={require('../../assets/mypage_img/noun-produce-2823265.png')}
                        />
                    </div>
                    <div>최근 본 상품이 없습니다.</div>
                </>
            );
        }
    }

    // 나의 음주스타일
    function Alcstyle() {
        if (1) {
            return (
                <div className='nullbox'>
                    <div className="icon">
                        <img
                            src={require('../../assets/mypage_img/noun-style-4384241.png')}
                        />
                    </div>
                    <div>테스트 결과가 없습니다.</div>
                    <button>그거뭐냐</button>
                    <Link to="#">그거뭐냐</Link>
                </div>
            );
        } else {
            return null;
        }
    }
}
