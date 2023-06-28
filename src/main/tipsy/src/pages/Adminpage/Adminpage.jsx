import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';

import '../../styles/Adminpage.scss';

import ProductForm from './ProductForm';
import UserPage from './UserPage';
import ProductPage from './ProductPage';
import { DocForm } from './DocForm';
import { DocModify } from './DocModify';
import { QnaboxForm } from '../Mypage/Tableform';

export default function Adminpage() {
    const { data } = useParams();
    const [userData, setUserData] = useState([]);
    const [title, setTitle] = useState(
        localStorage.getItem('adminPageTitle') || '회원목록'
    );

    useEffect(() => {
        const userList = () => {
            axios
                .get('/user/userlist')
                .then((response) => {
                    setUserData(response.data);
                })
                .catch((error) => {
                    console.log(error);
                });
        };

        userList();
    }, []);

    useEffect(() => {
        localStorage.setItem('adminPageTitle', title);
    }, [title]);

    return (
        <>
            <div id="adminpage_container">
                <Categorylist setTitle={setTitle} />

                <div id="contents">
                    <p>{title}</p>
                    {data === 'userboard' && <UserPage userData={userData} />}
                    {/* {data === 'usermodify' && <UserModifyForm />} */}

                    {data === 'productboard' && (
                        <ProductPage
                            useState={useState}
                            useEffect={useEffect}
                            axios={axios}
                        />
                    )}
                    {data === 'ProductForm' && (
                        <ProductForm onSubmit={onSubmitProduct} item="" />
                    )}
                    {data === 'uploadnotice' && <DocForm code={noticecode} />}
                    {data === 'uploadfaq' && <DocForm code={faqcode} />}
                    {data === 'updateboard' && <DocModify />}
                    {data === 'qnaboard' && <QnaBoard />}
                </div>
            </div>
        </>
    );

    function Categorylist({ setTitle }) {
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
                    // {
                    //     text: '회원정보 수정',
                    //     value: 'usermodify',
                    // },
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
                        value: 'ProductForm',
                    },
                ],
            },
            {
                dt: {
                    text: '페이지 관리',
                    value: 'pagesetting',
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
                    {
                        text: 'QnA 목록',
                        value: 'qnaboard',
                    },
                ],
            },
        ];

        return (
            <div id="adminpage_category">
                {list.map((el, index) => (
                    <dl key={index}>
                        <dt>
                            <Link to={`/adminpage/${el.dd[0].value}`}>
                                {el.dt.text}
                            </Link>
                        </dt>
                        {el.dd.map((dd, index) => (
                            <dd key={index}>
                                <Link
                                    to={`/adminpage/${dd.value}`}
                                    onClick={() => {
                                        setTitle(dd.text);
                                    }}
                                >
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
];

const faqcode = [
    {
        code: 20,
        value: '홈페이지 관련',
    },
    {
        code: 21,
        value: '제품 관련',
    },
];

function QnaBoard() {
    const [qnalist, setQnalist] = useState([]);
    const [pmk, setPmk] = useState({});
    const [mis, setMis] = useState(false);

    axios
        .get('/mypage/qnalist', {
            params: {
                mis: mis,
            },
        })
        .then((response) => {
            setQnalist(response.data.list);
            setPmk(response.data.pmk);
        })
        .catch((error) => {
            console.log(error);
        });

    return (
        <>
            <label>
                <input
                    type="checkbox"
                    name="mis"
                    value="mis"
                    onChange={(e) => {
                        if (e.target.checked) setMis(true);
                        else setMis(false);
                    }}
                />
                미답변 항목만 보기
            </label>
            <QnaboxForm list={qnalist} pmk={pmk} />
        </>
    );
}
