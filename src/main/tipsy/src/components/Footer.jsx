import React from 'react';
import '../styles/Footer.scss';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <>
            <div id="footer">
                <div className="footer_cover">
                    <div>
                        <Link to="/" className="foot_logo">
                            <img
                                src={require('../assets/home_img/crop_logo_black2.png')}
                                alt="이미지. 로고"
                            />
                        </Link>

                        <div className="foot_margin_top1">
                            <ul className="foot_list3">
                                <li>
                                    <Link to="/">제휴/제안 문의</Link>
                                </li>
                                <li>
                                    <Link to="/">대리점 개설 문의</Link>
                                </li>
                                <li>
                                    <Link to="/">이용약관</Link>
                                </li>
                                <li>
                                    <Link to="/">개인정보취급방침</Link>
                                </li>
                                <li>
                                    <Link to="/customerpage">고객지원</Link>
                                </li>
                            </ul>
                        </div>

                        <div className="foot_margin_top2">
                            <ul className="foot_list4">
                                <li>상호명: 도르리</li>
                                <li>대표: 이현배황</li>
                                <li>주소: 경기 성남시 분당구 돌마로 47</li>
                                <li>
                                    이메일:
                                    <Link
                                        to="mailto:seul8975@naver.com"
                                        title="스팸성 메일 차단"
                                    >
                                        seul8975@naver.com
                                    </Link>
                                </li>
                                <li>사업자등록번호: 100-21-12345</li>
                            </ul>
                        </div>
                    </div>
                    <div className="footer_customer">
                        <div>
                            <span>고객센터</span>
                            <strong>070-1111-2222</strong>
                            <p>평일 10:00 - 18:00, 주말휴무</p>
                        </div>
                        <ul className="sns_src">
                            <li>
                                <Link
                                    to="https://www.instagram.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    인스타그램
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="https://www.youtube.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    유튜브
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="https://www.facebook.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    페이스북
                                </Link>
                            </li>
                            <li>
                                <Link
                                    to="https://twitter.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    트위터
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
