import React from 'react';
import '../styles/Header.scss';

function header() {
    return (
        <>
            <div className="headertop_cover">
                <div className="headerTop">
                    <a href="/" className="mainLogo">
                        tipsy
                    </a>
                    <div className="serviceTab">
                        <ul className="serviceTabList">
                            <li>
                                <a href="/login">로그인</a>
                            </li>
                            <li>
                                <a href="/join">회원가입</a>
                            </li>
                            <li>
                                <a href="/shopbasket">장바구니</a>
                            </li>
                            <li>
                                <a href="/customerpage">고객지원</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header_cover">
                <div className="headerMenu">
                    <ul className="mainCategoryList">
                        <li className="bannerCategory">
                            <a href="/mainpage">카테고리</a>
                            <div className="detailCategoryList">
                                <ul>
                                    <li className="hoverCategory">
                                        <a href="./mainPage/mainPage_wine.html">
                                            주류
                                        </a>
                                        <ul className="detailCategoryListof">
                                            <li>
                                                <a href="./mainPage/mainPage_wine.html">
                                                    와인
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./mainPage/mainPage_soju.html">
                                                    소주
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./mainPage/mainPage_makgeolli.html">
                                                    막걸리, 탁주
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./mainPage/mainPage_cheongju.html">
                                                    약주, 청주
                                                </a>
                                            </li>
                                            <li>
                                                <a href="./mainPage/mainPage_fruit.html">
                                                    과실주
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="hoverCategory">
                                        <a href="./mainpage/mainPage_side.html">
                                            안주
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <a href="/map">매장찾기</a>
                        </li>
                        <li>
                            <a href="/eventboard">이벤트</a>
                        </li>
                    </ul>
                    <div className="mainSearch">
                        <form action="/searchresult">
                            <input
                                type="search"
                                name="mainSearch"
                                placeholder="검색"
                            />
                            <button type="submit">
                                <img
                                    src={require('../assets/home_img/search.png')}
                                    alt="검색"
                                />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default header;
