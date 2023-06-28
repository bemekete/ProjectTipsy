import React from "react";
import '../../styles/Mypage.scss';
import {PageButton} from "../Boardtable";

function FormContainer() {
    return (
        <div className="mypageform">
            <table>

            </table>
        </div>
    )
}

function ShipmentForm() {
    return (
        <div className="mypageform">
            <table className="shipmenttable">
                <tr>
                    <td><img src={require('../../assets/mainpage_img/cheongju1.jpg')} /></td>
                    <td>20120101-01010101</td>
                    <td>주문 완료</td>
                </tr>
                <tr>
                    <td><img src={require('../../assets/mainpage_img/cheongju1.jpg')} /></td>
                    <td>20120101-01010101</td>
                    <td>배송 준비 중</td>
                </tr>
                <tr>
                    <td><img src={require('../../assets/mainpage_img/cheongju1.jpg')} /></td>
                    <td>20120101-01010101</td>
                    <td>배송 중</td>
                </tr>
                <tr>
                    <td><img src={require('../../assets/mainpage_img/cheongju1.jpg')} /></td>
                    <td>20120101-01010101</td>
                    <td>배송 완료</td>
                </tr>
                <tr>
                    <td><img src={require('../../assets/mainpage_img/cheongju1.jpg')} /></td>
                    <td>20120101-01010101</td>
                    <td>배송 완료</td>
                </tr>
            </table>

             {/*<PageButton pmk={pmk}  /> */}
        </div>
    )
}

function QnaboxForm({list, pmk}) {
    return (
        <div className="mypageform">
            <table className="qnaboxtable">
                <colgroup>
                    <col width="10%" />
                    <col width="10%" />
                    <col width="80%" />
                </colgroup>
                {
                        list.map((item, i) => (
                            <tr key={`list${i}`}>
                                <td>{item.q_category}</td>
                                <td>{AnswerMiss(item.q_comment)}</td>
                                <td>
                                    <details>
                                        <summary>
                                            <span>{item.q_title}</span>
                                            <img
                                                src={require('../../assets/notice_img/down.svg')}
                                                alt=""
                                            />
                                        </summary>
                                    </details>
                                    <div className="innerCon">
                                        <div>
                                            {item.q_content}
                                        </div>
                                        <div className="innerComment">
                                            {item.q_comment}
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        ))
                    }
            </table>

             <PageButton pmk={pmk} />
        </div>
    )

    function AnswerMiss(item) {
        if(item == null){
            return '미답변';
        } else {
            return '답변완료';
        }
    }
}

function ReviewboxForm({list, pmk}) {
    return (
        <div className="mypageform">
            <table className="reviewboxtable">
                <colgroup>
                    <col width="20%" />
                    <col width="80%" />
                </colgroup>
                <tbody>
                {
                    list.map((item, i)=>(
                        <>
                            <tr className={`review${i}`}>
                                <td>
                                    {/*<img src={require(item.p_img)} />*/}
                                    <img src={require('../../assets/mainpage_img/cheongju1.jpg')} />
                                </td>
                                <td>
                                    <div className="review_star"></div>
                                    <div>{item.re_content}</div>
                                </td>
                            </tr>

                             <style jsx>{`
                                .review${i} .review_star::after {
                                    content: '${StarScore(item.re_score)}';
                                }
                            `}</style>
                        </>
                    ))
                }
                </tbody>
            </table>

            <PageButton pmk={pmk} />
        </div>
    )
}

function StarScore(star) {
    switch (star) {
        case 1:
            return ' ★ ☆ ☆ ☆ ☆ ';
        case 2:
            return ' ★ ★ ☆ ☆ ☆ ';
        case 3:
            return ' ★ ★ ★ ☆ ☆ ';
        case 4:
            return ' ★ ★ ★ ★ ☆ ';
        case 5:
            return ' ★ ★ ★ ★ ★ ';
        default:
            return ' ☆ ☆ ☆ ☆ ☆ ';
    }
}

function ContentsForm({list, pmk}) {
    return (
        <div className="mypageform">
            <table className="contentstable">
                <tr>
                    {
                        list.map((item, i)=>(
                            <td key={`list${i}`}>
                                {item.p_name}
                                {/*<img src={require('../../assets/mainpage_img/cheongju1.jpg')} />*/}
                            </td>
                        ))
                    }
                </tr>
            </table>

            <PageButton pmk={pmk} />
        </div>
    )
}

// function Nullbox({ img }) {
//     return (
//         <>
//             <div className="icon">
//                 <img
//                     src={require('../../assets/mypage_img/noun-produce-2823265.png')}
//                 />
//             </div>
//             <div>최근 본 상품이 없습니다.</div>
//         </>
//     )
// }

export { ShipmentForm, QnaboxForm, ReviewboxForm, ContentsForm, StarScore };