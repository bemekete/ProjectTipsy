import React, { useEffect } from 'react';
import axios from 'axios';

import { Boardtable } from './Boardtable';

export default function Notice() {
    useEffect(() => {
        axios
            .get('/boardlist')
            .then((response) => {
                console.log(response);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    return <Boardtable page={page} items={items} />;
}

const page = {
    title: 'notice',
    korTitle: '공지사항',
    scope: ['전체', '배송 관련', '상품 관련', '기타'],
};

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
