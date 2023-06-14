import React, { useState, useEffect } from 'react';
import '../styles/Mainpage.scss';
import axios from 'axios';

function Mainpage() {


    const [productCnt, setProductCnt] = useState(0);

    useEffect(() => {
        axios.get("/product/selectpro")
            .then((data) => {
                setProductCnt(data.data.length);
            }).catch(() => {
            })
    }, [])



    return (
        <>
            <div className="location_wrap">
                <div className="location_con">
                    <a href="/">홈</a> &gt; 전체상품
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
    const [products, setProducts] = useState([
        {
            id: 1,
            imgUrl: require('../assets/mainpage_img/cheongju1.jpg'),
            title: '천비향 약주',
            price: '30,400원',
        },
        {
            id: 2,
            imgUrl: require('../assets/mainpage_img/sidemenu1.jpg'),
            title: '직화 무뼈 닭발 160g',
            price: '6,900원',
        },
        {
            id: 3,
            imgUrl: require('../assets/mainpage_img/fruit1.jpg'),
            title: '장수 오미자주 4병 선물세트',
            price: '26,100원',
        },
        {
            id: 4,
            imgUrl: require('../assets/mainpage_img/makgeolli1.jpg'),
            title: '나루 생 막걸리 11.5% [3병/8병]',
            price: '29,700원',
        },
        {
            id: 5,
            imgUrl: require('../assets/mainpage_img/soju1.png'),
            title: '진맥소주 22%',
            price: '22,000원',
        },
        {
            id: 6,
            imgUrl: require('../assets/mainpage_img/wine1.jpg'),
            title: '오미로제 프리미어 와인 선물세트',
            price: '51,000원',
        },
    ]);

    const [visibleProductCount, setVisibleProductCount] = useState(6);
    const [topSort, setTopSort] = useState('인기순');

    //////////////////////// 상단에 상품 개수 나타내기 ////////////////////////
    useEffect(() => {
        const listLeng = document.querySelector('.listLeng');
        listLeng.innerHTML = `<p>총 <b>${products.length}</b>개의 상품이 있습니다.</p>`;
    }, []);

    //////////////////////// 더보기버튼 이벤트 ////////////////////////
    const handleBtnMoreClick = (e) => {
        e.preventDefault();
        if (visibleProductCount + 6 <= products.length) {
            setVisibleProductCount(visibleProductCount + 6);
        } else {
            setVisibleProductCount(products.length);
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
                            <a
                                className={
                                    topSort === '인기순' ? 'txt_bold' : ''
                                }
                                href="#"
                                onClick={() => TopSortClick('인기순')}
                            >
                                인기순
                            </a>
                        </li>
                        <li>
                            <a
                                className={
                                    topSort === '등록순' ? 'txt_bold' : ''
                                }
                                href="#"
                                onClick={() => TopSortClick('등록순')}
                            >
                                등록순
                            </a>
                        </li>
                        <li>
                            <a
                                className={
                                    topSort === '조회순' ? 'txt_bold' : ''
                                }
                                href="#"
                                onClick={() => TopSortClick('조회순')}
                            >
                                조회순
                            </a>
                        </li>
                    </ul>
                </div>
                <ul id="productList" className="list">
                    {products.slice(0, visibleProductCount).map((product) => (
                        <li key={product.id}>
                            <a href="/detail">
                                <div className="img">
                                    <img
                                        src={product.imgUrl}
                                        alt="상품 이미지"
                                    />
                                </div>
                                <div className="tit">
                                    <p>{product.title}</p>
                                </div>
                                <p className="price">{product.price}</p>
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
            {visibleProductCount < products.length ? (
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
            <a
                href="#"
                id="btnMore"
                className="btnMore btnMore_prod"
                onClick={onClick}
            >
                더보기
            </a>
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
                    <a href="./mainPage_wine.html">주류</a>
                </div>
                <div className="cate_list_item">
                    <a href="./mainPage_side.html">안주</a>
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
                                    <a href="#" onClick={sortClick}>
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
                                src={require('../assets/mainpage_img/mainPageUp.png')}
                                alt=""
                                onClick={handleImageClick}
                            />
                        </dt>
                        <dd>
                            <ul className="sortList">
                                <li>
                                    <a href="#" onClick={sortClick}>
                                        약주
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={sortClick}>
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
                                src={require('../assets/mainpage_img/mainPageUp.png')}
                                alt=""
                                onClick={handleImageClick}
                            />
                        </dt>
                        <dd>
                            <ul className="sortList">
                                <li>
                                    <a href="#" onClick={sortClick}>
                                        0%~10%
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={sortClick}>
                                        10%~20%
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={sortClick}>
                                        20%~30%
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={sortClick}>
                                        30%이상
                                    </a>
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
                                    <a href="#" onClick={sortClick}>
                                        약한
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={sortClick}>
                                        중간
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={sortClick}>
                                        강한
                                    </a>
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
                                    <a href="#" onClick={sortClick}>
                                        약한
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={sortClick}>
                                        중간
                                    </a>
                                </li>
                                <li>
                                    <a href="#" onClick={sortClick}>
                                        강한
                                    </a>
                                </li>
                            </ul>
                        </dd>
                    </dl>
                </div>
                <div className="sortFilter">
                    <a href="#">전체 필터 초기화</a>
                </div>
            </div>
        </>
    );
}
