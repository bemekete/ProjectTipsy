import React from 'react';
import '../styles/Footer.scss';

function Footer() {
    return (
        <>
            <div id="footer">
                <div className="footer_cover">
                    <div>
                        <a href="./index.html" className="foot_logo">
                            <img
                                src={require('../assets/home_img/crop_logo_black2.png')}
                                alt="이미지. 로고"
                            />
                        </a>

                        <div className="foot_margin_top1">
                            <ul className="foot_list3">
                                <li>
                                    <a href="/">제휴/제안 문의</a>
                                </li>
                                <li>
                                    <a href="/">대리점 개설 문의</a>
                                </li>
                                <li>
                                    <a href="/">이용약관</a>
                                </li>
                                <li>
                                    <a href="/">개인정보취급방침</a>
                                </li>
                                <li>
                                    <a href="../customerpage/customerpage.html">
                                        고객지원
                                    </a>
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
                                    <a
                                        href="mailto:seul8975@naver.com"
                                        title="스팸성 메일 차단"
                                    >
                                        seul8975@naver.com
                                    </a>
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
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    인스타그램
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.youtube.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    유튜브
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    페이스북
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://twitter.com"
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    트위터
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Footer;
