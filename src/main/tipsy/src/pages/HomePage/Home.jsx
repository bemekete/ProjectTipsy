import React from 'react';
import '../../styles/HomePage/Home.scss';
import ImageSlider from '../../pages/HomePage/ImageSlider';
import { Link } from 'react-router-dom';

function Home() {
    {
    }
    return (
        <>
            <main id="home_main">
                {/* 이미지 슬라이드 컴포넌트 */}
                <ImageSlider />

                <div className="wrap_triple">
                    <div className="triple_tit">BEST PRODUCT</div>
                    <div className="triple_main">
                        <div className="triple_main1">
                            {/* <!-- <div className="drinkKinds_wrap"> --> */}
                            <div>
                                <p>술취한 원숭이</p>
                                <p>
                                    <span>10.8% |&nbsp; </span>
                                    <strong> 36,000</strong>원
                                </p>
                                <Link to="/detail?site=monkey" className="winePageButton">
                                    자세히 알아보기
                                </Link>
                            </div>
                            <div>
                                <p>동학 1957</p>
                                <p>
                                    <span>13% |&nbsp; </span>
                                    <strong> 2,980</strong>원
                                </p>
                                <Link to="/detail?site=donghak" className="winePageButton">
                                    자세히 알아보기
                                </Link>
                            </div>
                            <div>
                                <p>오미로제 연</p>
                                <p>
                                    <span>8% |&nbsp; </span>
                                    <strong> 50,000</strong>원
                                </p>
                                <Link to="/detail?site=yeon" className="winePageButton">
                                    자세히 알아보기
                                </Link>
                            </div>
                        </div>

                        <div className="triple_main2">
                            <div>
                                <p>한스 오차드</p>
                                <p>
                                    <span>11% |&nbsp; </span>
                                    <strong> 20,160</strong>원
                                </p>
                                <Link to="/detail?site=hans" className="winePageButton">
                                    자세히 알아보기
                                </Link>
                            </div>
                            <div>
                                <p>한시울</p>
                                <p>
                                    <span>40% |&nbsp; </span>
                                    <strong> 21,000</strong>원
                                </p>
                                <Link to="/detail?site=hansiwool" className="winePageButton">
                                    자세히 알아보기
                                </Link>
                            </div>
                            <div>
                                <p>밀담</p>
                                <p>
                                    <span>40% |&nbsp; </span>
                                    <strong> 17,910</strong>원
                                </p>
                                <Link to="/detail?site=mildam" className="winePageButton">
                                    자세히 알아보기
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <!-- ######################### event ######################################## --> */}
                <div className="wrap_event">
                    <div className="event_tit">EVENT</div>
                    <div className="event_main event_img1">
                        <div>
                            <Link to="/detail" className="winePageButton">
                                자세히 알아보기
                            </Link>
                        </div>
                        <div></div>
                    </div>
                    <div className="event_main event_img2">
                        <div></div>
                        <div>
                            <Link to="/detail" className="winePageButton">
                                자세히 알아보기
                            </Link>
                        </div>
                    </div>
                    <div className="event_main event_img3">
                        <div>
                            <Link to="/detail" className="winePageButton">
                                자세히 알아보기
                            </Link>
                        </div>
                        <div></div>
                    </div>
                </div>
                {/* <!-- ////////////////////////////////// board,notice ///////////////////////////////////// --> */}
                <div className="intro_board_wrap">
                    <div className="board_wrap board_wrap_review">
                        <ul className="scrollDot">
                            <li data-review-page="0"></li>
                            <li
                                data-review-page="1"
                                className="scrollDotOpacity"
                            ></li>
                        </ul>
                        <div className="board_notice_top">
                            <div className="intro_board_tit">
                                <div>상품후기보기</div>
                            </div>
                        </div>
                        <div className="intro_board">
                            <div className="reviewBoard review1">
                                <div></div>
                                <div>
                                    <div className="review_goods_name">
                                        세인트하우스 복숭아 스파클링 와인
                                    </div>
                                    <p className="star">★★★★★</p>
                                    입문 하는 용으로 추천합니다.
                                    <br />
                                    단맛을 싫어 하시는 분은 비추이고 달달한 와인
                                    찾으시면
                                    <br />
                                    좋을꺼 같네요.
                                </div>
                            </div>
                            <div className="reviewBoard review2">
                                <div></div>
                                <div>
                                    <div className="review_goods_name">
                                        한스오차드
                                    </div>
                                    <p className="star">★★★★☆</p>
                                    누구나 쉽게 즐길 수 있는 와인
                                    <br />
                                    우리나라 최초의 사과 와인
                                    <br />
                                    일반 와인과 별개의 와인으로 봐야 할 듯
                                    합니다.
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="board_wrap ">
                        <div className="board_notice_top">
                            <div className="intro_board_tit">
                                <div>공지사항</div>
                            </div>
                            <div>
                                <Link to="/notice">More+</Link>
                            </div>
                        </div>
                        <div className="intro_board_notice">
                            <ul>
                                <li>
                                    <Link to="/notice">공지사항 입니다 5</Link>
                                    <span className="date">2022.12.09</span>
                                </li>
                                <li>
                                    <Link to="/notice">공지사항 입니다 4</Link>
                                    <span className="date">2022.12.08</span>
                                </li>
                                <li>
                                    <Link to="/notice">공지사항 입니다 3</Link>
                                    <span className="date">2022.12.07</span>
                                </li>
                                <li>
                                    <Link to="/notice">공지사항 입니다 2</Link>
                                    <span className="date">2022.12.06</span>
                                </li>
                                <li>
                                    <Link to="/notice">공지사항 입니다 1</Link>
                                    <span className="date">2022.12.05</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <a href="/" className="topfloatingbar"></a>
            </main>
        </>
    );
}

export default Home;
