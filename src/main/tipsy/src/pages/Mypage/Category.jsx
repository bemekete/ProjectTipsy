import {useParams, Link, useSearchParams} from 'react-router-dom';
import { ContentsForm, PostboxForm, QnaboxForm, ReviewboxForm, ShipmentForm } from './Tableform';
import { PageButton } from '../Boardtable';
import {useEffect, useState} from "react";
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
        </ul>
    )
}

function ListContents({loginInfo}) {
    const { data } = useParams();

    const [searchParams, setSearchParams] = useSearchParams([]);
    const currpage = searchParams.get('currpage');

    const [state, setState] = useState({
        list: [],
        pmk: {},
    })

    return (
        <div className="listContents">
            {data == 'shipment' && <Shipment />}
            {data == 'qnabox' && <Qnabox />}
            {data == 'reviewbox' && <Reviewbox />}
            {data == 'likecon' && <Likecon />}
            {data == 'currentcon' && <Currentcon />}
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

        useEffect(() => {
            fetchData();
        }, [currpage]);

        const fetchData = async () => {
            try{
                axios
                    .get('/uscon/qnalist',{
                        params: {
                            id: loginInfo.id,
                            currpage: currpage,
                            rowsPerPage: 7,
                        }
                    })
                    .then((response) => {
                        setState({
                            list: response.data.list,
                            pmk: response.data.pmk,
                        });

                    })
                    .catch((error) => {
                        console.log(error);
                    });

            } catch (e) {
                console.log(e);
            }
        }

        if (state.list[0] != null) {
            return <QnaboxForm list={state.list} pmk={state.pmk} loginInfo={loginInfo}/>

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

        useEffect(() => {
            fetchData();
        }, []);

        const fetchData = async () => {
            try {
                axios
                    .get('/uscon/reviewlist', {
                        params: {
                            id: loginInfo.id, // 세션 아이디 전송
                            currpage: currpage,
                            rowsPerPage: 7,
                        }
                    })
                    .then((response) => {
                        setState({
                            list: response.data.list,
                            pmk: response.data.pmk,
                        });

                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } catch (e) {
                console.log(e);
            }
        }

        if (state.list[0] != null) {
            return <ReviewboxForm list={state.list} pmk={state.pmk} />

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

        useEffect(() => {
            fetchData();
        }, []);

        const fetchData = async () => {
            try {
                axios
                    .get('/uscon/likeconlist', {
                        params: {
                            id: loginInfo.id,
                            like: 1,
                            currpage: currpage,
                            rowsPerPage: 9,
                        }
                    })
                    .then((response) => {
                        setState({
                            list: response.data.list,
                            pmk: response.data.pmk,
                        });
                    })
                    .catch((error) => {
                        console.log(error);
                    });

            } catch (e) {
                console.log(e);
            }
        }

        if (state.list[0] != null) {
            return <ContentsForm list={state.list} pmk={state.pmk}/>;

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

        useEffect(() => {
            fetchData();
        }, []);

        const fetchData = async () => {
            try {
                axios
                    .get('/uscon/likeconlist', {
                        params: {
                            id: loginInfo.id,
                            like: 0,
                            currpage: currpage,
                            rowsPerPage: 9,
                        }
                    })
                    .then((response) => {
                        setState({
                            list: response.data.list,
                            pmk: response.data.pmk,
                        });
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            } catch (e) {
                console.log(e);
            }
        }

        if (state.list[0] != null) {
            return <ContentsForm list={state.list} pmk={state.pmk}/>;

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
}
