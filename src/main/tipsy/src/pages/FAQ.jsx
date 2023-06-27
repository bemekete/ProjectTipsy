import React, {useEffect, useState} from 'react';
import '../styles/FAQ.scss';
import {Link, useLocation, useNavigate} from 'react-router-dom';

import { BoardTitle, BoardSearch, BoardScope } from './Boardtable';
import axios from "axios";

function FAQ() {
    const [faqlist, setFaqlist] = useState([]);
    const [pmk, setPmk] = useState({});

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const asicode = queryParams.get('asicode');
    const currpage = queryParams.get('currpage');
    const keyword = queryParams.get('keyword');

    axios
        .get('/bcrilist',{
            params: {
                asicode: asicode,
                currPage: currpage,
                keyword: keyword,
            }
        })
        .then((response) => {
            setFaqlist(response.data.list);
            setPmk(response.data.pmk);

        })
        .catch((error) => {
            console.log(error);
        });

    return (
        <div id="Board_main">
            <div id="board_maincontainer">
                <BoardTitle page={page} />
                <FaqTitle />

                <div>
                    <FaqContainer />
                    <BoardSearch />
                    <BoardScope page={page} items={faqlist} pmk={pmk} />
                </div>
            </div>
        </div>
    );

    function FaqTitle() {
        return (
            <>
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
                    <div className="customer_inquiry">
                        <ul>
                            <li className="customer_inquiry_button">
                                <Link to="/simpleinquiry">
                                    고객문의 바로가기
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </>
        );
    }

    function FaqContainer() {
        return (
            <div className="Qbox_container">
                <ul>
                    {faqContainer.map((el) => (
                        <li className="Qbox">
                            {el.Question}
                            <ul className="Abox">
                                <li>
                                    <p>{el.Answer}</p>
                                </li>
                            </ul>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
}

const page = {
    title: 'faq',
    korTitle: 'FAQ',
    value: 2,
    scope: [
        {
            key: '홈페이지',
            value: 20,
        },
        {
            key: '제품',
            value: 21,
        }]
};

const items = [
    {
        scope: '1',
        title: 'faq1',
        contents: 'faq1',
    },
    {
        scope: '2',
        title: 'faq2',
        contents: 'faq2',
    },
    {
        scope: '3',
        title: 'faq3',
        contents: 'faq3',
    },
];

const faqContainer = [
    {
        Question: '아이디와 비밀번호가 기억나지 않아요.',
        Answer: '로그인 화면에서 아이디 찾기/비밀번호 찾기를 통해 확인 가능합니다.',
    },
    {
        Question: '상품을 받았는데 환불하고 싶어요.',
        Answer: '환불은 배송 완료 후 7일 이내일 경우에만 접수 가능합니다.',
    },
    {
        Question: '품절 된 술들은 언제쯤 재입고 되나요?',
        Answer: '품절 상품 재입고 여부 및 일정은 정확한 확인이 가능하지 않지만 재입고 알람을 등록하면 알림톡으로 확인 할 수 있습니다.',
    },
];

export default FAQ;
