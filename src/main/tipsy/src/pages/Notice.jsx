import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Boardtable } from './Boardtable';
import {useLocation, useNavigate} from "react-router-dom";

export default function Notice() {
    const [noticelist, setNoticelist] = useState([]);
    const [pmk, setPmk] = useState({});

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);

    const asicode = queryParams.get('asicode');
    const currpage = queryParams.get('currpage');
    const keyword = queryParams.get('keyword');

    useEffect(() => {
        fetchData();
    }, [asicode, currpage, keyword]);

    const fetchData = async () => {
        try {
            axios
                .get('/bcrilist', {
                    params: {
                        asicode: asicode,
                        currPage: currpage,
                        keyword: keyword,
                    }
                })
                .then((response) => {
                    setNoticelist(response.data.list);
                    setPmk(response.data.pmk);

                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (e) {
            console.log(e);
        }
    }

    return <Boardtable page={page} items={noticelist} pmk={pmk} />;
}

const page = {
    title: 'notice',
    korTitle: '공지사항',
    value: 1,
    scope: [
        {
            key: '상품',
            value: 10,
        },
        {
            key: '배송',
            value: 11,
        },
        {
            key: '기타',
            value: 12,
        }],
};