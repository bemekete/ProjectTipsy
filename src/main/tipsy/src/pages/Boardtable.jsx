import '../styles/Boardtable.scss';
import { Link } from 'react-router-dom';

function Boardtable({ page, items }) {
    return (
        <>
            <div id="board_main">
                <div id="board_maincontainer">
                    <BoardTitle page={page} />
                    <BoardSearch />
                    <BoardScope page={page} items={items} />
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
    return (
        <div className="board_search">
            <form action="#">
                <label>
                    <input
                        type="text"
                        name="Search_board"
                        id="Search_board"
                        placeholder="검색어를 입력하세요"
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
}

function BoardScope({ page, items }) {
    return (
        <div>
            <ScopeBox page={page} />

            <div className="board_table_main">
                <BoardTable items={items} />
                <PageButton />
            </div>
        </div>
    );
}

function ScopeBox({ page }) {
    return (
        <div className="board_scope">
            <ul>
                {page.scope.map((item) => (
                    <li className="board_scope_box">
                        <Link to="#">{item}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

function BoardTable({ items }) {
    return (
        <div className="board_table">
            <figure>
                <table>
                    <colgroup>
                        <col width="25%" />
                        <col width="85%" />
                    </colgroup>

                    <thead>
                        <tr>
                            <th>구분</th>
                            <th>제목</th>
                        </tr>
                    </thead>

                    <tbody>
                        <BodyTable items={items} />
                    </tbody>
                </table>
            </figure>
        </div>
    );
}

function BodyTable({ items }) {
    return items.map((item, i) => (
        <tr key={'boarditem' + i}>
            <th scope="row">
                <span>{item.scope}</span>
            </th>
            <td className="contents">
                <details>
                    <summary>
                        <span>{item.title}</span>
                        <img
                            src={require('../assets/notice_img/down.svg')}
                            alt=""
                        />
                    </summary>
                </details>
                <div className="innerCon">
                    <span>{item.contents}</span>
                </div>
            </td>
        </tr>
    ));
}

function PageButton() {
    return (
        <div className="board_page_button">
            {/* <!-- <-1,2,3-> 버튼 --> */}
            <b>
                <Link to="#">1</Link>
            </b>
        </div>
    );
}

export { BoardTitle, BoardSearch, BoardScope, Boardtable, PageButton };
