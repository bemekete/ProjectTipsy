import React from 'react';
import '../styles/Customerpage.scss';
import { Link } from 'react-router-dom';

export default function Customerpage() {
    return (
        <div id="customerpage_container">
            <p className="pageTitle">고객지원</p>
            <div id="contents">
                <div className="customerBox">
                    <div className="guidement">
                        <p>
                            월요일 ~ 금요일: 08:30 ~ 17:30 | 점심시간: 12:00 ~
                            13:00 | 주말 및 공휴일 휴무
                            <br />
                            <br />
                            <span>
                                매주 월, 화요일과 공휴일 다음날은 상담전화가
                                많아 고객응대가 다소 지연될 수 있습니다. <br />
                                해당일을 제외하고 연락주시면 더욱 빠른 상담을
                                받으실 수 있으니 참고 부탁드립니다.
                            </span>
                            <br />
                            <br />
                            <span>
                                고객센터 안내
                                <span>1800-9977</span>
                            </span>
                        </p>
                        <dl>
                            <Link to="#" target="_blank">
                                <dd>
                                    <img src="" alt="" />
                                </dd>
                                <dd>카카오톡 상담</dd>
                            </Link>
                        </dl>
                    </div>
                </div>
                <div className="customerMenu">
                    <ul>
                        <li className="menu1">
                            <Link to="/notice">
                                <span className="menuicon alert"></span>
                                <span>공지사항</span>
                            </Link>
                        </li>
                        <li className="menu2">
                            <Link href="../eventboard/eventboard.html">
                                <span className="menuicon event"></span>
                                <span>이벤트</span>
                            </Link>
                        </li>
                        <li className="menu3">
                            <Link href="../map/map.html">
                                <span className="menuicon map"></span>
                                <span>매장찾기</span>
                            </Link>
                        </li>
                        <li className="menu4">
                            <Link href="/mypage">
                                <span className="menuicon myPage"></span>
                                <span>마이페이지</span>
                            </Link>
                        </li>
                        <li className="menu5">
                            <Link to="/faq">
                                <span className="menuicon FAQ"></span>
                                <span>FAQ</span>
                            </Link>
                        </li>
                        <li className="menu6">
                            <Link to="/simpleinquiry">
                                <span className="menuicon2 Simpleinquiry"></span>
                                <span>간편문의</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
