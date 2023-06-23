import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { Boardtable } from './Boardtable';
import {useLocation} from "react-router-dom";

export default function Notice() {
    const [noticelist, setNoticelist] = useState([]);
    const [pmk, setPmk] = useState({});

    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const currpage = queryParams.get('currpage');


        axios
            .get('/bcrilist',{
                params: {
                    currPage: currpage,
                }
            })
            .then((response) => {
                setNoticelist(response.data.list);
                setPmk(response.data.pmk);

            })
            .catch((error) => {
                console.log(error);
            });


    // useEffect(() => {
    //     axios
    //         .get('/nlist')
    //         .then((response) => {
    //             setNoticelist(response.data);
    //         })
    //         .catch((error) => {
    //             console.log(error);
    //         });
    //     }, []);

    return <Boardtable page={page} items={noticelist} pmk={pmk} currpage={currpage} />;
}

const page = {
    title: 'notice',
    korTitle: '공지사항',
    scope: ['상품', '배송', '기타'],
};