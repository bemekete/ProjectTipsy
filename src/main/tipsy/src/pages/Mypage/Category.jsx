import { useParams, Link } from 'react-router-dom';
import { ContentsForm, PostboxForm, QnaboxForm, ReviewboxForm, ShipmentForm } from './Tableform';
import { PageButton } from '../Boardtable';
import {useState} from "react";
import axios from "axios";

export default function Category({loginInfo}) {
    return (
        <div className="category" id="category">
            <CategoryList />
            <ListContents loginInfo={loginInfo} />
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

function ListContents({loginInfo}) {
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
                <div className='nullbox'>
                    <div className="icon">
                        <img
                            src={require('../../assets/mypage_img/noun-shipment-1540091.png')}
                        />
                    </div>
                    <div>주문 내역이 없습니다.</div>
                </div>
            );
        }
    }

    // 문의내역
    function Qnabox() {
        const [qnalist, setQnalist] = useState([]);
        const [pmk, setPmk] = useState({});

        axios
            .get('/uscon/qnalist',{
                params: {
                    id: loginInfo.id, // 세션 아이디 전송
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

        if (qnalist[0] != null) {
            return <QnaboxForm list={qnalist} pmk={pmk}/>

        } else {
            return (
                <div className='nullbox'>
                    <div className="icon">
                        <img
                            src={require('../../assets/mypage_img/noun-browser-552736.png')}
                        />
                    </div>
                    <div>작성한 게시물이 없습니다.</div>
                </div>
            );
        }
    }

    // 리뷰
    function Reviewbox() {
        const [reviewlist, setReviewlist] = useState([]);
        const [pmk, setPmk] = useState({});

        axios
            .get('/uscon/reviewlist', {
                params: {
                    id: loginInfo.id, // 세션 아이디 전송
                }
            })
            .then((response) => {
                setReviewlist(response.data.list);
                setPmk(response.data.pmk);

            })
            .catch((error) => {
                console.log(error);
            });

        if (reviewlist[0] != null) {
            return <ReviewboxForm list={reviewlist} pmk={pmk} />

        } else {
            return (
                <div className='nullbox'>
                    <div className="icon">
                        <img
                            src={require('../../assets/mypage_img/noun-browser-552736.png')}
                        />
                    </div>
                    <div>작성한 게시물이 없습니다.</div>
                </div>
            );
        }
    }

    // 찜한 상품
    function Likecon() {
        const [likecon, setLikecon] = useState([]);
        const [pmk, setPmk] = useState({});

        axios
            .get('/uscon/likeconlist', {
                params: {
                    id: loginInfo.id,
                    like: 1,
                }
            })
            .then((response) => {
                setLikecon(response.data.list);
                setPmk(response.data.pmk);

            })
            .catch((error) => {
                console.log(error);
            });

        if (likecon[0] != null) {
            return <ContentsForm list={likecon} pmk={pmk}/>;

        } else {
            return (
                <div className='nullbox'>
                    <div className="icon">
                        <img
                            src={require('../../assets/mypage_img/noun-heart-10024.png')}
                        />
                    </div>
                    <div>찜한 상품이 없습니다.</div>
                </div>
            );
        }
    }

    // 최근 본 상품
    function Currentcon() {
        const [currcon, setCurrcon] = useState([]);
        const [pmk, setPmk] = useState({});

        axios
            .get('/uscon/likeconlist', {
                params: {
                    id: loginInfo.id,
                    like: 0,
                }
            })
            .then((response) => {
                setCurrcon(response.data.list);
                setPmk(response.data.pmk);

            })
            .catch((error) => {
                console.log(error);
            });

        if (currcon[0] != null) {
            return <ContentsForm list={currcon} pmk={pmk}/>;

        } else {
            return (
                <div className='nullbox'>
                    <div className="icon">
                        <img
                            src={require('../../assets/mypage_img/noun-produce-2823265.png')}
                        />
                    </div>
                    <div>최근 본 상품이 없습니다.</div>
                </div>
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
