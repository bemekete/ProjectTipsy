import React, { useRef } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';

import '../../styles/Adminpage.scss';

import ProductForm from './ProductForm';
import Listpage from './Listpage';
import { UserModifyForm } from './UserModify';
import { DocForm } from './DocForm';
import { DocModify } from "./DocModify";

export default function Adminpage() {
    const { data } = useParams();

    return (
        <>
            <div id="adminpage_container">
                <Categorylist />

                <div id="contents">
                    <p>TITLE</p>
                    {data == 'userboard' && (
                        <Listpage headers={userheaders} items={useritems} />
                    )}
                    {data == 'usermodify' && <UserModifyForm />}

                    {data == 'productboard' && (
                        <Listpage headers={pheaders} items={pitems} />
                    )}
                    {data == 'productinput' && (
                        <ProductForm onSubmit={onSubmitProduct} item="" />
                    )}
                    {data == 'uploadnotice' && (
                        <DocForm code={noticecode} />
                    )}
                    {data == 'uploadfaq' && (
                        <DocForm code={faqcode} />
                    )}
                    {data == 'updateboard' && (
                        <DocModify />
                    )}
                </div>
            </div>
        </>
    );

    function Categorylist() {
        const list = [
            {
                dt: {
                    text: '회원정보',
                    value: 'userinfo',
                },
                dd: [
                    {
                        text: '회원목록',
                        value: 'userboard',
                    },
                    {
                        text: '회원정보 수정',
                        value: 'usermodify',
                    },
                ],
            },
            {
                dt: {
                    text: '상품',
                    value: 'productinfo',
                },
                dd: [
                    {
                        text: '상품목록',
                        value: 'productboard',
                    },
                    {
                        text: '상품등록',
                        value: 'productinput',
                    },
                ],
            },
            {
                dt: {
                    text: '페이지 관리',
                    value: 'pagesetting'
                },
                dd: [
                    {
                        text: '공지사항 작성',
                        value: 'uploadnotice',
                    },
                    {
                        text: 'FAQ 작성',
                        value: 'uploadfaq',
                    },
                ]
            }
        ];

        return (
            <div id="adminpage_category">
                {list.map((el) => (
                    <dl>
                        <dt>
                            <Link to={`/adminpage/${el.dd[0].value}`}>
                                {el.dt.text}
                            </Link>
                        </dt>
                        {el.dd.map((dd) => (
                            <dd>
                                <Link to={`/adminpage/${dd.value}`}>
                                    {dd.text}
                                </Link>
                            </dd>
                        ))}
                    </dl>
                ))}
            </div>
        );
    }
}

function onSubmitProduct() {
    // insert controller
}

const noticecode = [
    {
        code: 10,
        value: '상품 관련',
    },
    {
        code: 11,
        value: '배송 관련',
    },
    {
        code: 12,
        value: '기타',
    },
]

const faqcode = [
    {
        code: 20,
        value: '홈페이지 관련',
    },
    {
        code: 21,
        value: '제품 관련',
    },
]

// 임시 데이터
const userheaders = [
    {
        text: '회원번호',
        value: 'seq',
    },
    {
        text: 'ID',
        value: 'id',
    },
    {
        text: '이름',
        value: 'name',
    },
];

const useritems = [
    {
        seq: 0,
        id: 'qotnwl',
        name: '배수지',
    },
    {
        seq: 1,
        id: 'qotnwl',
        name: '배수지',
    },
    {
        seq: 2,
        id: 'qotnwl',
        name: '배수지',
    },
    {
        seq: 3,
        id: 'qotnwl',
        name: '배수지',
    },
    {
        seq: 4,
        id: 'qotnwl',
        name: '배수지',
    },
    {
        seq: 5,
        id: 'qotnwl',
        name: '배수지',
    },
    {
        seq: 6,
        id: 'qotnwl',
        name: '배수지',
    },
    {
        seq: 7,
        id: 'qotnwl',
        name: '배수지',
    },
    {
        seq: 8,
        id: 'qotnwl',
        name: '배수지',
    },
    {
        seq: 9,
        id: 'qotnwl',
        name: '배수지',
    },
];

const pheaders = [
    {
        text: '상품번호',
        value: 'seq',
    },
    {
        text: '카테고리',
        value: 'category',
    },
    {
        text: '상품명',
        value: 'title',
    },
    {
        text: '가격',
        value: 'price',
    },
];

const pitems = [
    {
        seq: 0,
        category: '청주',
        title: '동학',
        price: '1444',
    },
    {
        seq: 1,
        category: '와인',
        title: '세인트어쩌고',
        price: '12334',
    },
    {
        seq: 2,
        category: '소주',
        title: '참이슬',
        price: '12',
    },
    {
        seq: 3,
        category: '청주',
        title: '동학',
        price: '1444',
    },
    {
        seq: 4,
        category: '와인',
        title: '세인트어쩌고',
        price: '12334',
    },
    {
        seq: 5,
        category: '소주',
        title: '참이슬',
        price: '12',
    },
    {
        seq: 6,
        category: '청주',
        title: '동학',
        price: '1444',
    },
    {
        seq: 7,
        category: '와인',
        title: '세인트어쩌고',
        price: '12334',
    },
    {
        seq: 8,
        category: '소주',
        title: '참이슬',
        price: '12',
    },
    {
        seq: 9,
        category: '청주',
        title: '동학',
        price: '1444',
    },
];
