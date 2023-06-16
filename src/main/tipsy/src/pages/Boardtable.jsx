import '../styles/Boardtable.scss';
import { Link } from 'react-router-dom';

export default function Boardtable({ items }) {
    return (
        <>
            <div className="board_table_main">
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
                                {
                                    items.map((item, i) => (
                                        <tr key={'boarditem' + i}>
                                            <th scope="row">
                                                <span>{item.scope}</span></th>
                                            <td className="contents">
                                                <details>
                                                    <summary>
                                                        <span>{item.title}</span>
                                                        <img src={require('../assets/notice_img/down.svg')} alt="" />
                                                    </summary>
                                                </details>
                                                <div className="innerCon">
                                                    <span>{item.contents}</span>
                                                </div>
                                            </td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                    </figure>
                </div>

                <div className="board_page_button">
                    {/* <!-- <-1,2,3-> 버튼 --> */}
                    <b>
                        <a href="#">1</a>
                    </b>
                </div>
            </div>
        </>
    )
}
