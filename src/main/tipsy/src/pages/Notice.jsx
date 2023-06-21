import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Boardtable } from './Boardtable';

export default function Notice() {
    const [noticelist, setNoticelist] = useState([]);

    useEffect(() => {
        axios
            .get('/nlist')
            .then((response) => {
                setNoticelist(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
        }, []);

    return <Boardtable page={page} items={noticelist}/>;
}

const page = {
    title: 'notice',
    korTitle: '공지사항',
    scope: ['상품', '배송', '기타'],
};