import React, {useState} from "react";
import '../../styles/Mypage.scss';
import {PageButton} from "../Boardtable";
import {Link} from "react-router-dom";
import axios from "axios";

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

function QnaboxForm({list, pmk, loginInfo}) {
    const [comment, setComment] = useState('');

    const DeleteQna = async (e, seq) => {
        try {
            e.preventDefault();

            if (window.confirm("정말 삭제하시겠습니까?")) {
                await axios.post('/uscon/deleteqna', {
                    q_seq: seq,

                }).then(response => {
                    console.log(response.data);
                    if(response.data == 1){
                        window.location.reload();
                    } else {
                        alert("게시글 삭제를 실패했습니다.");
                    }

                }).catch(error => {
                    console.log(error);
                    alert("게시글 삭제를 실패했습니다.");
                })
            }

        } catch (error) {
            console.log(error);
            alert("게시글 삭제를 실패했습니다.");
        }
    }

    const onSubmitComment = async (seq) => {
        try{
            await axios
                .post('/uscon/commentqna',{
                    q_seq: seq,
                    q_comment: comment,
                }).catch(response => {
                    console.log(response.data);
                    if(response.data == 1){
                        window.location.reload();
                    } else {
                        alert("답변 등록을 실패했습니다.");
                    }
                }).catch(error => {
                    console.log(error);
                    alert("답변 등록을 실패했습니다.");
                })
        } catch (e) {
            console.log(e);
            alert("답변 등록을 실패했습니다.");
        }
    }

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
                            <td>{Category(item.q_category)}</td>
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

                                        {/* admin 기능 */}
                                        {('admin' == loginInfo.id || item.id == loginInfo.id) && (
                                            <div className='conModify'>
                                                <Link to="/" onClick={e => DeleteQna(e, item.q_seq)}>삭제</Link>
                                            </div>
                                        )}
                                    </div>
                                    {CommentVisible(item.q_comment)}
                                </div>
                            </td>
                        </tr>
                    ))
                }
            </table>

            <PageButton pmk={pmk} />
        </div>
    )

    function Category(item) {
        const category = [
            {
                key: "상품",
                value: 1,
            },
            {
                key: "주문/배송",
                value: 2,
            },
            {
                key: "홈페이지",
                value: 3,
            },
        ]

        for(let i = 0; i < category.length; i++){
            if(item == category[i].value){
                return category[i].key;
            }
        }
    }

    function AnswerMiss(item) {
        if(item == null){
            return '미답변';
        } else {
            return '답변완료';
        }
    }

    function CommentVisible(item) {
        if(item == null){
            if('admin' == loginInfo.id){
                return (
                    <div className="innerComment">
                        <textarea
                            name="comment"
                            cols="130"
                            rows="20"
                            minLength="10"
                            placeholder="답변을 입력 하세요."
                            onChange={e => setComment(e.target.value)}>
                        </textarea>
                        <button onClick={()=>onSubmitComment(item.q_seq)}></button>
                    </div>
                )
            } else {
                return null;
            }

        } else {
            return (
                <div className="innerComment">
                    {item.q_comment}
                </div>
            );
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

export { ShipmentForm, QnaboxForm, ReviewboxForm, ContentsForm, StarScore };