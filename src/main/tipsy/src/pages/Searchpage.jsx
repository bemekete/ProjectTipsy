import React, {useEffect, useState} from 'react';
import '../styles/Searchpage.scss';
import {Link, useLocation, useSearchParams} from 'react-router-dom';
import axios from "axios";

export default function Searchpage() {
    const [procrilist, setProcrilist] = useState([]);
    const [pmk, setPmk] = useState({});

    const [queryParams, setQueryParams] = useSearchParams();
    const category = queryParams.get('category');
    const keyword = queryParams.get('mainSearch');

    useEffect(() => {
        fetchData();
    }, [category, keyword]);

    const fetchData = async () => {
        try {
            axios
                .get('/product/procrilist', {
                    params: {
                        category: category,
                        keyword: keyword,
                    }
                })
                .then((response) => {
                    setProcrilist(response.data.list);
                    setPmk(response.data.pmk);
                })
                .catch((error) => {
                    console.log(error);
                });

        } catch(e){
            console.log(e);
        }
    }

    return (
        <div id="search_container">
            <p className="pageTitle">통합검색</p>
            <div id="contents">
                <div className="searchPageMain">
                    <div className="searchPageBar">
                        <form action="/searchresult">
                            <input
                                type="search"
                                name="mainSearch"
                                placeholder="검색"
                            />
                            <button type="submit">
                                <img
                                    src={require('../assets/search_img/noun-search-687065.png')}
                                    alt="검색"
                                />
                            </button>
                        </form>
                    </div>

                    <SearchPageBox list={procrilist} pmk={pmk} queryParams={queryParams} setQueryParams={setQueryParams}/>
                </div>
            </div>
        </div>
    );
}

function SearchPageBox({list, pmk, queryParams, setQueryParams}) {
    return (
        <div className="searchPageBox">
            <SearchPageCategories pmk={pmk} queryParams={queryParams} setQueryParams={setQueryParams}/>
            <TotalSearchArea list={list} pmk={pmk}/>
        </div>
    )
}

function SearchPageCategories({pmk, queryParams, setQueryParams}) {
    const categoryList = [
        {
            key: '전체',
            value: 0,
        },
        {
            key: '와인',
            value: 1,
        },
        {
            key: '소주',
            value: 2,
        },
        {
            key: '막걸리, 탁주',
            value: 3,
        },
        {
            key: '약주, 청주',
            value: 4,
        },
        {
            key: '과실주',
            value: 5,
        },
    ]

    return (
        <div className="searchPageCategories">
            <ul>
                {
                    categoryList.map((item,i)=>(
                        <li className={`searchCategory tab${i+1}`}>
                            <Link to='#' onClick={e=>OnClickCategory(e, item.value)}>
                                <p>
                                    <span>{item.key}</span>
                                    {/*<br />*/}
                                    {/*0 건*/}
                                </p>
                            </Link>
                        </li>
                    ))
                }
            </ul>
        </div>
    )

    function OnClickCategory(e, n) {
        e.preventDefault();
        queryParams.set("category", n);
        setQueryParams(queryParams);
    }
}

function TotalSearchArea({list, pmk}) {
    return(
        <div className="totalSearchArea">
            <div id="totalSearchList1">
                <div className="totalSearch List1">
                    <table>
                        <thead>
                        <colgroup>
                            <col width="70%" />
                            <col />
                        </colgroup>
                        <tr>
                            <th>상품/옵션 정보</th>
                            <th>상품 금액</th>
                        </tr>
                        </thead>

                        <tbody>
                        <TotalSearch />
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )

    function TotalSearch() {
        if(list[0] == null){
            return (
                <p className="noneResult">
                    검색 결과가 없습니다.
                </p>
            )

        } else {
        return (
            <>
                {
                    list.map((item, i)=> (
                        <tr key={`item${i}`}>
                            <td>
                                <Link to={`/detail?p_name=${item.p_name}`}>
                                    <img src={item.p_img} alt={item.p_name} />
                                    {item.p_name}
                                </Link>
                            </td>
                            <td><span>{item.p_price}</span>원</td>
                        </tr>
                    ))
                }
            </>
        )
    }
    }
}