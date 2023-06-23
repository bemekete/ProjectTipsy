import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Mainpage.scss';
import axios from 'axios';

function Mainpage() {
    const [product, setProduct] = useState([]);
    const [title, setTitle] = useState();

    // db에서 상품 리스트 받아 리액트 화면에 뿌려주기
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/product/selectpro');
            setProduct(response.data);
            setTitle('전체상품');
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <>
            <div className="location_wrap">
                <div className="location_con">
                    <Link to="/home">홈</Link> &gt; 전체상품
                </div>
            </div>
            <div id="mainpage_container">
                <div id="mainpage_search">
                    <MainpageSearch
                        setProduct={setProduct}
                        setTitle={setTitle}
                        fetchData={fetchData}
                    />
                </div>
                <div id="contents">
                    <Content product={product} title={title} />
                </div>
            </div>
        </>
    );
}

export default Mainpage;

/////////////////////////////////////////// 상품목록들 ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
function Content({ title, product }) {
    const [visibleProductCount, setVisibleProductCount] = useState(6);
    const [topSort, setTopSort] = useState('인기순');

    //  더보기버튼 이벤트
    const handleBtnMoreClick = (e) => {
        e.preventDefault();
        if (visibleProductCount + 6 <= product.length) {
            setVisibleProductCount(visibleProductCount + 6);
        } else {
            setVisibleProductCount(product.length);
        }
    };

    // 인기순, 등록순, 조회순
    const TopSortClick = (Sort) => {
        setTopSort(Sort);
    };

    return (
        <>
            <p className="pageTit">{title}</p>
            <div className="listStyle1" id="prod_schview">
                <div className="listInfo1">
                    <p className="listLeng">
                        총 <b>{product.length}</b>개의 상품이 있습니다.
                    </p>
                    <ul className="listSort">
                        <li>
                            <Link
                                className={
                                    topSort === '인기순' ? 'txt_bold' : ''
                                }
                                to="#"
                                onClick={() => TopSortClick('인기순')}
                            >
                                인기순
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={
                                    topSort === '등록순' ? 'txt_bold' : ''
                                }
                                to="#"
                                onClick={() => TopSortClick('등록순')}
                            >
                                등록순
                            </Link>
                        </li>
                        <li>
                            <Link
                                className={
                                    topSort === '조회순' ? 'txt_bold' : ''
                                }
                                to="#"
                                onClick={() => TopSortClick('조회순')}
                            >
                                조회순
                            </Link>
                        </li>
                    </ul>
                </div>
                <ul id="productList" className="list">
                    {product.slice(0, visibleProductCount).map((product) => (
                        <li key={product.p_seq}>
                            <Link to="/detail">
                                <div className="img">
                                    <img
                                        src={
                                            process.env.PUBLIC_URL +
                                            product.p_img
                                        }
                                        alt="상품 이미지"
                                    />
                                </div>
                                <div className="tit">
                                    <p>{product.p_name}</p>
                                </div>
                                <p className="price">{product.p_price}원</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {visibleProductCount < product.length ? (
                <BtnMore onClick={handleBtnMoreClick} />
            ) : null}
        </>
    );
}

// 더보기버튼
// 더보기 버튼을 누르면 6개씩 항목이 늘어남.
// 더 이상 늘어날 항목이 없다면 더보기 버튼이 없어짐.
function BtnMore({ onClick }) {
    return (
        <div className="btnSection">
            <Link
                to="#"
                id="btnMore"
                className="btnMore btnMore_prod"
                onClick={onClick}
            >
                더보기
            </Link>
        </div>
    );
}

// 왼쪽서치바

function MainpageSearch({ setProduct, setTitle, fetchData }) {
    const [isCollapse, setIsCollapse] = useState(true);

    // 서치바 접는기능
    const handleImageClick = (e) => {
        const target = e.target.closest('img');
        const dd = target.parentNode.parentNode.children[1];

        setIsCollapse(isCollapse);
        target.classList.toggle('rotate');
        dd.classList.toggle('collapse_img');
    };

    // 서치바 항목 클릭 시 bgcolor변경
    const sortClick = (e) => {
        e.preventDefault();
        const target = e.target.closest('a');
        target.classList.toggle('btnClick');
    };

    const categoryData = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.get('/product/categorypro', {
                params: {
                    p_category: e.target.id,
                },
            });
            setProduct(response.data);
            setTitle(e.target.name);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <>
            <div className="search_tit pageTit">카테고리</div>
            <div className="search_list cate_list">
                <div className="cate_list_item">
                    <Link value="전체상품" onClick={fetchData}>
                        전체
                    </Link>
                </div>
                <div className="cate_list_item">
                    <Link id="1" name="와인" onClick={categoryData}>
                        와인
                    </Link>
                </div>
                <div className="cate_list_item">
                    <Link id="2" name="소주" onClick={categoryData}>
                        소주
                    </Link>
                </div>
                <div className="cate_list_item">
                    <Link id="3" name="막걸리,탁주" onClick={categoryData}>
                        막걸리,탁주
                    </Link>
                </div>
                <div className="cate_list_item">
                    <Link id="4" name="약주,청주" onClick={categoryData}>
                        약주,청주
                    </Link>
                </div>
                <div className="cate_list_item">
                    <Link id="5" name="과실주" onClick={categoryData}>
                        과실주
                    </Link>
                </div>
            </div>
            <div className="searchSorter">
                <div className="sortListCon">
                    <dl>
                        <dt>
                            가격
                            <img
                                src={require('../../assets/mainpage_img/mainPageUp.png')}
                                alt=""
                                onClick={handleImageClick}
                            />
                        </dt>
                        <dd>
                            <ul className="sortList">
                                <li>
                                    <a href="#" onClick={sortClick}>
                                        0만원 ~ 1만원
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={sortClick}>
                                        1만원 ~ 3만원
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={sortClick}>
                                        3만원 ~ 5만원
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={sortClick}>
                                        5만원 ~ 10만원
                                    </a>
                                </li>
                                <li>
                                    <a to="#" onClick={sortClick}>
                                        10만원 이상
                                    </a>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            종류
                            <img
                                src={require('../../assets/mainpage_img/mainPageUp.png')}
                                alt=""
                                onClick={handleImageClick}
                            />
                        </dt>
                        <dd>
                            <ul className="sortList">
                                <li>
                                    <a to="#" onClick={sortClick}>
                                        약주
                                    </a>
                                </li>
                                <li>
                                    <a to="#" onClick={sortClick}>
                                        청주
                                    </a>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            도수
                            <img
                                src={require('../../assets/mainpage_img/mainPageUp.png')}
                                alt=""
                                onClick={handleImageClick}
                            />
                        </dt>
                        <dd>
                            <ul className="sortList">
                                <li>
                                    <Link href="#" onClick={sortClick}>
                                        0%~10%
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" onClick={sortClick}>
                                        10%~20%
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" onClick={sortClick}>
                                        20%~30%
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" onClick={sortClick}>
                                        30%이상
                                    </Link>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            단맛
                            <img
                                src={require('../../assets/mainpage_img/mainPageUp.png')}
                                alt=""
                                onClick={handleImageClick}
                            />
                        </dt>
                        <dd>
                            <ul className="sortList">
                                <li>
                                    <Link to="#" onClick={sortClick}>
                                        약한
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={sortClick}>
                                        중간
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={sortClick}>
                                        강한
                                    </Link>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            신맛
                            <img
                                src={require('../../assets/mainpage_img/mainPageUp.png')}
                                alt=""
                                onClick={handleImageClick}
                            />
                        </dt>
                        <dd>
                            <ul className="sortList">
                                <li>
                                    <Link to="#" onClick={sortClick}>
                                        약한
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={sortClick}>
                                        중간
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={sortClick}>
                                        강한
                                    </Link>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                </div>
                <div className="sortFilter">
                    <Link to="#">전체 필터 초기화</Link>
                </div>
            </div>
        </>
    );
}
