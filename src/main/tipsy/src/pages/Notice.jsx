import React from 'react';
import '../styles/Notice.scss';
import { Link } from 'react-router-dom';

import Boardtable from './Boardtable';

export default function Notice() {
    const items = [
        {
            scope: '1',
            title: 'notice1',
            contents: 'notice1',
        },
        {
            scope: '2',
            title: 'notice2',
            contents:
                '이른 아침 작은 새들 노랫소리 들려오면 언제나 그랬듯 아쉽게 잠을 깬다 창문 하나 햇살 가득 눈부시게 비쳐오고 서늘한 냉기에 재채기할까 말까 눈 비비며 빼꼼히 창밖을 내다보니 삼삼오오 아이들은 재잘대며 학교 가고 산책 갔다 오시는 아버지의 양손에는 효과를 알 수 없는 약수가 하나 가득 딸각딸각 아침 짓는 어머니의 분주함과 엉금엉금 냉수 찾는 그 아들의 게으름이 상큼하고 깨끗한 아침의 향기와 구수하게 밥 뜸드는 냄새가 어우러진 가을 아침 내겐 정말 커다란 기쁨이야 가을 아침 내겐 정말 커다란 행복이야 응석만 부렸던 내겐',
        },
        {
            scope: '3',
            title: 'notice3',
            contents: 'notice3',
        },
    ];

    return (
        <div id="notice_main">
            <div id="notice_maincontainer">
                <p className="notice_first_text">공지사항</p>
                <div className="notice_search">
                    {/* 검색창 */}
                    <form action="#">
                        <label>
                            <input
                                type="text"
                                name="Search_notice"
                                id="Search_notice"
                                placeholder="검색어를 입력하세요"
                            />
                        </label>
                        <button type="submit">
                            {/* src, alt로 */}
                            <img
                                src={require('../assets/notice_img/noun-search-687065.png')}
                                alt=""
                            />
                        </button>
                    </form>
                </div>

                <div className="notice">
                    <div className="notice_box">
                        <ul>
                            <li className="notice_box1">
                                <Link to="#">전체 공지사항</Link>
                            </li>

                            <li className="notice_box2">
                                <Link to="#">배송 관련 공지사항</Link>
                            </li>

                            <li className="notice_box3">
                                <Link to="#">상품 관련 공지사항</Link>
                            </li>

                            <li className="notice_box4">
                                <Link to="#">기타 공지사항</Link>
                            </li>
                        </ul>
                    </div>

                    {/* <!-- 구분, 제목 및 제품문의 --> */}
                    <Boardtable items={items} />
                </div>
            </div>
        </div>
    );
}
