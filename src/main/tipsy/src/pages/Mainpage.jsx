import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/Mainpage.scss';
import axios from 'axios';
function Mainpage() {
    return (
        <>
            <div className="location_wrap">
                <div className="location_con">
                    <Link to="/home">홈</Link> &gt; 전체상품
                </div>
            </div>
            <div id="mainpage_container">
                <div id="mainpage_search">
                    <MainpageSearch />
                </div>
                <div id="contents">
                    <Content />
                </div>
            </div>
        </>
    );
}

export default Mainpage;

/////////////////////////////////////////// 상품목록들 ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
function Content() {
    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/product/selectpro');
            setProduct(response.data);
        } catch (error) {
            console.error(error);
        }
    };

    console.log(product.length);

    const [visibleProductCount, setVisibleProductCount] = useState(6);
    const [topSort, setTopSort] = useState('인기순');

    //////////////////////// 상단에 상품 개수 나타내기 ////////////////////////
    useEffect(() => {
        const listLeng = document.querySelector('.listLeng');
        listLeng.innerHTML = `<p>총 <b>${product.length}</b>개의 상품이 있습니다.</p>`;
    }, []);

    //////////////////////// 더보기버튼 이벤트 ////////////////////////
    const handleBtnMoreClick = (e) => {
        e.preventDefault();
        if (visibleProductCount + 6 <= product.length) {
            setVisibleProductCount(visibleProductCount + 6);
        } else {
            setVisibleProductCount(product.length);
        }
    };

    //////////////////////// 인기순, 등록순, 조회순 ////////////////////////
    const TopSortClick = (Sort) => {
        setTopSort(Sort);
    };

    return (
        <>
            <p className="pageTit">전체상품</p>
            <div className="listStyle1" id="prod_schview">
                <div className="listInfo1">
                    <p className="listLeng"></p>
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
                                        src={product.p_img}
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

//////////////////////////////////// 더보기버튼 ////////////////////////////////////
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

/////////////////////////////////////////// 왼쪽서치바 ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////

function MainpageSearch() {
    const [isCollapse, setIsCollapse] = useState(true);

    ////////////////// 서치바 접는기능 ////////////////////
    const handleImageClick = (e) => {
        const target = e.target.closest('img');
        const dd = target.parentNode.parentNode.children[1];

        setIsCollapse(isCollapse);
        target.classList.toggle('rotate');
        dd.classList.toggle('collapse_img');
    };

    ////////////////// 서치바 항목 클릭 시 bgcolor변경 ////////////////////
    const sortClick = (e) => {
        e.preventDefault();
        const target = e.target.closest('a');
        target.classList.toggle('btnClick');
    };

    return (
        <>
            <div className="search_tit pageTit">카테고리</div>
            <div className="search_list cate_list">
                <div className="cate_list_item">
                    <Link to="/mainPage">주류</Link>
                </div>
                <div className="cate_list_item">
                    <Link to="/mainPage">안주</Link>
                </div>
            </div>
            <div className="searchSorter">
                <div className="sortListCon">
                    <dl>
                        <dt>
                            가격
                            <img
                                src={require('../assets/mainpage_img/mainPageUp.png')}
                                alt=""
                                onClick={handleImageClick}
                            />
                        </dt>
                        <dd>
                            <ul className="sortList">
                                <li>
                                    <Link href="#" onClick={sortClick}>
                                        0만원 ~ 1만원
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" onClick={sortClick}>
                                        1만원 ~ 3만원
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" onClick={sortClick}>
                                        3만원 ~ 5만원
                                    </Link>
                                </li>
                                <li>
                                    <Link href="#" onClick={sortClick}>
                                        5만원 ~ 10만원
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={sortClick}>
                                        10만원 이상
                                    </Link>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            종류
                            <img
                                src={require('../assets/mainpage_img/mainPageUp.png')}
                                alt=""
                                onClick={handleImageClick}
                            />
                        </dt>
                        <dd>
                            <ul className="sortList">
                                <li>
                                    <Link to="#" onClick={sortClick}>
                                        약주
                                    </Link>
                                </li>
                                <li>
                                    <Link to="#" onClick={sortClick}>
                                        청주
                                    </Link>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                    <dl>
                        <dt>
                            도수
                            <img
                                src={require('../assets/mainpage_img/mainPageUp.png')}
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
                                src={require('../assets/mainpage_img/mainPageUp.png')}
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
                                src={require('../assets/mainpage_img/mainPageUp.png')}
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
