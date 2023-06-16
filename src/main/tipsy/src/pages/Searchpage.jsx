import React from 'react';
import '../styles/Searchpage.scss';
import { Link } from 'react-router-dom';

export default function Searchpage() {
    return (
        <div id="search_container">
            <p className="pageTitle">통합검색</p>
            <div id="contents">
                <div className="searchPageMain">
                    <div className="searchPageBar">
                        <form action="#">
                            <input
                                type="search"
                                name="SearchPageSearch"
                                placeholder="검색"
                            />
                            <button type="submit">
                                <img
                                    src={require('../assets/search_img/noun-search-687065.png')}
                                    alt="검색"
                                />
                            </button>
                        </form>
                    </div>
                    <div className="searchPageBox">
                        <div className="searchPageCategories">
                            <ul>
                                <li className="searchCategory tab1">
                                    <Link to="#">
                                        <p>
                                            <span>전체</span>
                                            <br />
                                            0건
                                        </p>
                                    </Link>
                                </li>
                                <li className="searchCategory tab2">
                                    <Link to="#totalSearchList1">
                                        <p>
                                            <span>주류</span>
                                            <br />
                                            2건
                                        </p>
                                    </Link>
                                </li>
                                <li className="searchCategory tab3">
                                    <Link to="#totalSearchList2">
                                        <p>
                                            <span>안주</span>
                                            <br />
                                            0건
                                        </p>
                                    </Link>
                                </li>
                                {/* <!-- <li className="searchCategory tab4"><a href="#totalSearchList3">
                                    <p>
                                        <span>공지사항</span><br />
                                        0건
                                    </p>
                                </a>
                            </li>
                            <li className="searchCategory tab5"><a href="#totalSearchList4">
                                    <p>
                                        <span>FAQ</span><br>
                                        0건
                                    </p>
                                </a>
                            </li> --> */}
                            </ul>
                        </div>
                        <div className="totalSearchArea">
                            <div id="totalSearchList1">
                                <p>
                                    주류(전체 <span>0</span> 건 / <span>0</span>{' '}
                                    건)
                                </p>
                                <div className="totalSearch List1">
                                    <table>
                                        <thead>
                                            <colgroup>
                                                <col width="70%" />
                                                <col />
                                            </colgroup>
                                            <tr>
                                                <th>상품/옵션 정보</th>
                                                <th>상품 금액</th>
                                            </tr>
                                        </thead>

                                        <tbody>
                                            {() => {
                                                if (1) {
                                                    // 검색 결과가 존재하지 않을 경우
                                                    return (
                                                        <p className="noneResult">
                                                            검색 결과가
                                                            없습니다.
                                                        </p>
                                                    );
                                                } else {
                                                    // 검색 결과가 존재할 경우
                                                    for (
                                                        let i = 0;
                                                        i < 10;
                                                        i++
                                                    ) {
                                                        return (
                                                            <tr>
                                                                <td>
                                                                    <Link to="/detail">
                                                                        <img
                                                                            src={
                                                                                'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/thumbnail/fWO1-1668403134296-1Z7A1584.jpg'
                                                                            }
                                                                            alt=""
                                                                        />{' '}
                                                                        막쿠르트
                                                                    </Link>
                                                                </td>
                                                                <td>
                                                                    <span>
                                                                        13,000
                                                                    </span>
                                                                    원
                                                                </td>
                                                            </tr>
                                                        );
                                                    }
                                                }
                                            }}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                            <div id="totalSearchList2">
                                <p>안주(전체 0 건 / 0 건)</p>
                                <div className="totalSearch List2">
                                    <p className="noneResult">
                                        검색 결과가 없습니다.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
