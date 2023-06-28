import '../styles/Boardtable.scss';
import { Link, useLocation } from 'react-router-dom';
import axios from 'axios';
import { useState } from 'react';

function Boardtable({ page, items, pmk }) {
    return (
        <>
            <div id="board_main">
                <div id="board_maincontainer">
                    <BoardTitle page={page} />
                    <BoardSearch />
                    <BoardScope page={page} items={items} pmk={pmk} />
                </div>
            </div>
        </>
    );

    //=================================================================
    //=================================================================
    //=================================================================
}

function BoardTitle({ page }) {
    return <p className="board_first_text">{page.korTitle}</p>;
}

function BoardSearch() {
    const location = new useLocation();
    const [input, setInput] = useState('');

    return (
        <div className="board_search">
            <form onSubmit={onSubmitSearch}>
                <label>
                    <input
                        type="text"
                        name="Search_board"
                        id="Search_board"
                        placeholder="검색어를 입력하세요"
                        onChange={(e) => setInput(e.target.value)}
                    />
                </label>
                <button type="submit">
                    <img
                        src={require('../assets/notice_img/noun-search-687065.png')}
                        alt=""
                    />
                </button>
            </form>
        </div>
    );

    function onSubmitSearch(e) {
        e.preventDefault();

        let que = location.search;
        que = que.substring(que.indexOf('asicode')).split('&')[0];

        window.location.href =
            location.pathname + '?' + que + '&keyword=' + input;
    }
}

function BoardScope({ page, items, pmk }) {
    return (
        <div>
            <ScopeBox page={page} />

            <div className="board_table_main">
                <BoardTable page={page} items={items} />
                <PageButton pmk={pmk} />
            </div>
        </div>
    );
}

function ScopeBox({ page }) {
    const location = new useLocation();

    return (
        <div className="board_scope">
            <ul>
                <li className="board_scope_box">
                    <Link to={`${location.pathname}?asicode=${page.value}`}>
                        전체
                    </Link>
                </li>

                {page.scope.map((item) => (
                    <li className="board_scope_box">
                        <Link to={`${location.pathname}?asicode=${item.value}`}>
                            {item.key}
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function BoardTable({ page, items }) {
    return (
        <div className="board_table">
            <figure>
                <table>
                    <colgroup>
                        <col width="20%" />
                        <col width="80%" />
                    </colgroup>

                    <thead>
                        <tr>
                            <th>구분</th>
                            <th>제목</th>
                        </tr>
                    </thead>

                    <tbody>
                        <BodyTable page={page} items={items} />
                    </tbody>
                </table>
            </figure>
        </div>
    );
}

function BodyTable({ page, items }) {
    const deleteBoard = async (e, seq) => {
        try {
            e.preventDefault();

            if (window.confirm('정말 삭제하시겠습니까?')) {
                await axios
                    .post('/deleteboard', {
                        asi_seq: seq, // qna와 통합할 경우, 컬럼명도 받아와야 함
                    })
                    .then((response) => {
                        console.log(response.data);
                        window.location.reload();
                    })
                    .catch((error) => {
                        console.log(error);
                    });
            }
        } catch (error) {
            console.log(error);
        }
    };

    return items.map((item, i) => (
        <tr key={'boarditem' + i}>
            <th scope="row">
                <span>{page.scope[item.asi_code % 10].key}</span>
            </th>
            <td className="contents">
                <details>
                    <summary>
                        <span>{item.asi_title}</span>
                        <img
                            src={require('../assets/notice_img/down.svg')}
                            alt=""
                        />
                    </summary>
                </details>
                <div className="innerCon">
                    <span>
                        {item.asi_contents}

                        {/* admin 기능 */}
                        {1 == 1 && (
                            <div className="conModify">
                                <Link
                                    to={`/adminpage/updateboard?asi_seq=${item.asi_seq}`}
                                >
                                    수정
                                </Link>
                                <Link
                                    to="/"
                                    onClick={(e) =>
                                        deleteBoard(e, item.asi_seq)
                                    }
                                >
                                    삭제
                                </Link>
                            </div>
                        )}
                    </span>
                </div>
            </td>
        </tr>
    ));
}

function PageButton({ pmk }) {
    const location = new useLocation();

    return (
        <div className="board_page_button">
            <ul>
                {PreBtn()}
                {viewNumbers()}
                {NxtBtn()}
            </ul>
        </div>
    );

    function pathbuild(ppp) {
        let path = '';

        if (location.search.includes('keyword')) {
            // 검색 키워드 有
            const que = location.search;
            const asicode = que.substring(que.indexOf('asicode')).split('&')[0];
            const keyword = que.substring(que.indexOf('keyword')).split('&')[0];
            path =
                location.pathname +
                '?' +
                asicode +
                '&' +
                keyword +
                '&currpage=' +
                ppp;
        } else {
            // 검색 키워드 無
            let que = location.search;
            que = que.substring(que.indexOf('asicode')).split('&')[0];
            path = location.pathname + '?' + que + '&currpage=' + ppp;
        }

        return path;
    }

    // 페이지 넘버 버튼
    function viewNumbers() {
        const page = [];
        for (let i = pmk.spageNo; i < pmk.epageNo + 1; i++) {
            page.push(i);
        }

        return (
            <>
                {page.map((n, i) => (
                    <li key={n}>
                        <Link to={`${pathbuild(n)}`}>
                            <span>{n}</span>
                        </Link>
                    </li>
                ))}
            </>
        );
    }

    // 앞번호로 넘기는 버튼
    function PreBtn() {
        if (pmk.prev === true) {
            return (
                <li>
                    <Link to={`${pathbuild(pmk.spageNo - pmk.displayPageNo)}`}>
                        <span className="prebtn"></span>
                    </Link>
                </li>
            );
        }
    }

    // 뒷번호로 넘기는 버튼
    function NxtBtn() {
        if (pmk.next === true) {
            return (
                <li>
                    <Link to={`${pathbuild(pmk.spageNo + pmk.displayPageNo)}`}>
                        <span className="nxtbtn"></span>
                    </Link>
                </li>
            );
        }
    }
}

export { BoardTitle, BoardSearch, BoardScope, Boardtable, PageButton };
