import { Link } from 'react-router-dom/dist';
import '../styles/Header.scss';

function header({ isLoggedIn, handleLogout }) {
    return (
        <>
            <div className="headertop_cover">
                <div className="headerTop">
                    <a href="/home" className="mainLogo">
                        tipsy
                    </a>
                    <div className="serviceTab">
                        <ul className="serviceTabList">
                            {isLoggedIn ? (
                                <>
                                    <li>
                                        <Link to="/" onClick={handleLogout}>
                                            로그아웃
                                        </Link>
                                    </li>
                                    <li>
                                        <Link to="/shopbasket">장바구니</Link>
                                    </li>
                                    <li>
                                        <Link to="/customerpage">고객지원</Link>
                                    </li>
                                </>
                            ) : (
                                <>
                                    <li>
                                        <Link to="/login">로그인</Link>
                                    </li>
                                    <li>
                                        <Link to="/join">회원가입</Link>
                                    </li>
                                    <li>
                                        <Link to="/shopbasket">장바구니</Link>
                                    </li>
                                    <li>
                                        <Link to="/customerpage">고객지원</Link>
                                    </li>
                                </>
                            )}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header_cover">
                <div className="headerMenu">
                    <ul className="mainCategoryList">
                        <li className="bannerCategory">
                            <Link to="/mainpage">카테고리</Link>
                            <div className="detailCategoryList">
                                <ul>
                                    <li className="hoverCategory">
                                        <Link to="/mainpage?p_category=1">
                                            주류
                                        </Link>
                                        <ul className="detailCategoryListof">
                                            <li>
                                                <Link to="/mainpage">와인</Link>
                                            </li>
                                            <li>
                                                <Link to="/mainpage">소주</Link>
                                            </li>
                                            <li>
                                                <Link to="/mainpage">
                                                    막걸리, 탁주
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/mainpage">
                                                    약주, 청주
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/mainpage">
                                                    과실주
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li className="hoverCategory">
                                        <Link to="/mainpage">안주</Link>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <Link to="/map">매장찾기</Link>
                        </li>
                        <li>
                            <Link to="/eventboard">이벤트</Link>
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
