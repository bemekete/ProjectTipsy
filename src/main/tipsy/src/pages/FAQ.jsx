import React from 'react';
import '../styles/FAQ.scss';

import Boardtable from './Boardtable';

function FAQ() {
    const items = [
        {
            scope: "1",
            title: "faq1",
            contents: "faq1",
        },
        {
            scope: "2",
            title: "faq2",
            contents: "faq2",
        },
        {
            scope: "3",
            title: "faq3",
            contents: "faq3",
        },
    ]

    return (
        <>
            <div id="FAQ_main">
                <div id="faq_maincontainer">
                    <p className="FAQ_first_text">FAQ</p>

                    <div className="FAQ_text">
                        <p>
                            저희 도르리 사이트를 이용하시는 회원님들의 질문 중
                            자주하시는 질문들을 모아 놓았습니다.
                            <br />
                            요청 사항 및 문의 사항이 있으시면 고객지원 &gt;
                            간편문의를 이용해주세요~
                        </p>
                    </div>

                    <div>
                        {/* <!-- 고객문의 바로가기 --> */}
                        <div className="customer_inquiry">
                            <ul>
                                {/* <!-- 여기 button 말고 a 태그 쓰면 안되나? --> */}
                                <li className="customer_inquiry_button">
                                    <a href="../simple_inquiry/simple_inquiry.html">
                                        고객문의 바로가기
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div>
                        {/* <!-- 나머지 --> */}
                        <div className="Qbox_container">
                            {/* <!-- Q. 친환경소재를 사용하고 있나요. --> */}
                            <ul>
                                {/* <!-- Q는 가상요소 선택자로--> */}
                                <li className="Qbox1">
                                    아이디와 비밀번호가 기억나지 않아요.
                                    {/* <!-- 여기에 hover 하면 바뀌는 화살표. html,css 영역 아닌듯. --> */}
                                    <ul>
                                        <li>
                                            <p>
                                                로그인 화면에서 아이디
                                                찾기/비밀번호 찾기를 통해 확인
                                                가능합니다.
                                            </p>
                                        </li>
                                    </ul>
                                </li>

                                <li className="Qbox2">
                                    상품을 받았는데 환불하고 싶어요.
                                    <ul>
                                        <li>
                                            <p>
                                                환불은 배송 완료 후 7일 이내일
                                                경우에만 접수 가능합니다.
                                            </p>
                                        </li>
                                    </ul>
                                </li>

                                <li className="Qbox3">
                                    품절 된 술들은 언제쯤 재입고 되나요?
                                    <ul>
                                        <li>
                                            <p>
                                                품절 상품 재입고 여부 및 일정은
                                                정확한 확인이 가능하지 않지만
                                                재입고 알람을 등록하면
                                                알림톡으로 확인 할 수 있습니다.
                                            </p>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>

                        <div className="FAQ_search">
                            {/* <!-- 검색창 --> */}
                            <form action="#">
                                <label>
                                    <input
                                        type="search"
                                        name="faqPageSearch"
                                        id="faqPageSearch"
                                        placeholder="검색어를 입력하세요"
                                    />
                                </label>
                                <button type="submit">
                                    <img
                                        src={require('../assets/faq_img/search.png')}
                                        alt="검색"
                                    />
                                </button>
                            </form>
                        </div>

                        <div className="inquiry">
                            <div className="inquiry_box box_background">
                                {/* <!-- 전체 문의, 홈페이지 문의, 제품 문의, A/S문의, 이전 설치 --> */}
                                <ul>
                                    <li className="inquiry_box1">
                                        <a href="#">전체 문의</a>
                                    </li>

                                    <li className="inquiry_box2">
                                        <a href="./inquiry_box2.html">
                                            홈페이지 문의
                                        </a>
                                    </li>

                                    <li className="inquiry_box3">
                                        <a href="./inquiry_box3.html">
                                            제품 문의
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            {/* <!-- 구분, 제목 및 제품문의 --> */}
                            <Boardtable items={items} />
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default FAQ;
