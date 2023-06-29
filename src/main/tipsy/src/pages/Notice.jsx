import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Boardtable } from './Boardtable';
import {useLocation} from "react-router-dom";

export default function Notice() {
    const [state, setState] = useState({
        noticelist: [],
        pmk: {},
    })

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const query = {
        asicode: queryParams.get('asicode'),
        currpage: queryParams.get('currpage'),
        keyword: queryParams.get('keyword'),
    }

    useEffect(() => {
        fetchData();
    }, [query.asicode, query.currpage, query.keyword]);

    const fetchData = async () => {
        try {
            axios
                .get('/asi/bcrilist', {
                    params: {
                        asicode: query.asicode,
                        currPage: query.currpage,
                        keyword: query.keyword,
                    }
                })
                .then((response) => {
                    setState({
                        noticelist: response.data.list,
                        pmk: response.data.pmk,
                    });
                })
                .catch((error) => {
                    console.log(error);
                });
        } catch (e) {
            console.log(e);
        }
    }

    return <Boardtable page={page} items={state.noticelist} pmk={state.pmk} />;
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