import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../../styles/Mainpage.scss';
import axios from 'axios';

function Mainpage() {
    const [product, setProduct] = useState([]);
    const [title, setTitle] = useState();
    const [visibleProductCount, setVisibleProductCount] = useState(6);
    const [topSort, setTopSort] = useState('조회순');

    // 새로고침시 fetchData실행
    useEffect(() => {
        fetchData('0', '전체상품');
    }, []);

    // 전체상품
    const fetchData = async (p_category, title) => {
        try {
            const response = await axios.get('/product/selectpro', {
                params: {
                    p_category: p_category,
                },
            });
            setProduct(response.data);
            setTopSort('조회순');
            setTitle(title);
            setVisibleProductCount(6);
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
                    <MainpageSearch fetchData={fetchData} setTitle={setTitle} />
                </div>
                <div id="contents">
                    <Content
                        product={product}
                        title={title}
                        setProduct={setProduct}
                        visibleProductCount={visibleProductCount}
                        setVisibleProductCount={setVisibleProductCount}
                        topSort={topSort}
                        setTopSort={setTopSort}
                    />
                </div>
            </div>
        </>
    );
}

export default Mainpage;

// 왼쪽서치바
function MainpageSearch({ fetchData }) {
    const [isCollapse, setIsCollapse] = useState(true);

    // 서치바 접기
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

    // 큰카테고리(술종류) 배열
    const categoryList = [
        { id: '0', name: '전체상품', label: '전체상품' },
        { id: '1', name: '와인', label: '와인' },
        { id: '2', name: '소주', label: '소주' },
        { id: '3', name: '막걸리,탁주', label: '막걸리,탁주' },
        { id: '4', name: '약주,청주', label: '약주,청주' },
        { id: '5', name: '과실주', label: '과실주' },
    ];

    // 세부카테고리 배열
    const leftSort = [
        {
            title: '가격',
            options: [
                '0만원 ~ 1만원',
                '1만원 ~ 3만원',
                '3만원 ~ 5만원',
                '5만원 ~ 10만원',
                '10만원 이상',
            ],
        },
        {
            title: '종류',
            options: ['약주', '청주'],
        },
        {
            title: '도수',
            options: ['0%~10%', '10%~20%', '20%~30%', '30%이상'],
        },
        {
            title: '단맛',
            options: ['약한', '중간', '강한'],
        },
        {
            title: '신맛',
            options: ['약한', '중간', '강한'],
        },
    ];

    return (
        <>
            <div className="search_tit pageTit">카테고리</div>
            <div className="search_list cate_list">
                {categoryList.map((item) => (
                    <div className="cate_list_item" key={item.id}>
                        <Link
                            name={item.name}
                            onClick={() => fetchData(item.id, item.name)}
                        >
                            {item.label}
                        </Link>
                    </div>
                ))}
            </div>

            <div className="searchSorter">
                <div className="sortListCon">
                    {leftSort.map((item, index) => (
                        <dl key={index}>
                            <dt>
                                {item.title}
                                <img
                                    src={require('../../assets/mainpage_img/mainPageUp.png')}
                                    alt=""
                                    onClick={handleImageClick}
                                />
                            </dt>
                            <dd>
                                <ul className="sortList">
                                    {item.options.map((option, idx) => (
                                        <li key={idx}>
                                            <Link to="#" onClick={sortClick}>
                                                {option}
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </dd>
                        </dl>
                    ))}
                </div>
                <div className="sortFilter">
                    <Link to="#">전체 필터 초기화</Link>
                </div>
            </div>
        </>
    );
}

/////////////////////////////////////////// 상품목록들 ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////////////////////////////
function Content({
    title,
    product,
    setProduct,
    visibleProductCount,
    setVisibleProductCount,
    topSort,
    setTopSort,
}) {
    // 더보기 버튼
    const handleBtnMoreClick = (e) => {
        e.preventDefault();
        const newVisibleProductCount = Math.min(
            visibleProductCount + 6,
            product.length
        );
        setVisibleProductCount(newVisibleProductCount);
    };

    // 조회순, 등록순 매핑
    const TopSortClick = async (sort) => {
        setTopSort(sort);

        try {
            const response = await axios.get('/product/topsort', {
                params: {
                    topSort: sort,
                },
            });
            setProduct(response.data);
        } catch (error) {
            console.log(error);
        }
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
                        {['조회순', '등록순'].map((sort) => (
                            <li key={sort}>
                                <Link
                                    className={
                                        topSort === sort ? 'txt_bold' : ''
                                    }
                                    onClick={() => TopSortClick(sort)}
                                >
                                    {sort}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
                <ul id="productList" className="list">
                    {product.slice(0, visibleProductCount).map((item) => (
                        <li key={item.p_seq}>
                            <Link to="/detail">
                                <div className="img">
                                    <img
                                        src={
                                            process.env.PUBLIC_URL + item.p_img
                                        }
                                        alt="상품 이미지"
                                    />
                                </div>
                                <div className="tit">
                                    <p>{item.p_name}</p>
                                </div>
                                <p className="price">{item.p_price}원</p>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
            {visibleProductCount < product.length && (
                <div className="btnSection">
                    <Link
                        to="#"
                        id="btnMore"
                        className="btnMore btnMore_prod"
                        onClick={handleBtnMoreClick}
                    >
                        더보기
                    </Link>
                </div>
            )}
        </>
    );
}
