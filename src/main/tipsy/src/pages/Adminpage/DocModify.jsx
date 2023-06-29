import React, {useEffect, useState} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";


export function DocModify() {
    // seq 쿼리스트링 불러오기
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const asi_seq = queryParams.get('asi_seq'); // seq 쿼리스트링

    const [state, setState] = useState({
        title: '',
        contents: '',
    })

    let flag = 0; // 0:notice - 1:faq

    // boarddetail - 객체 불러오기
    useEffect(() => {
        axios
            .get(`/asi/boarddetail`, {
                params:{
                    asi_seq: asi_seq,
                }
            })
            .then((response) => {
                setState({
                    title: response.data.asi_title,
                    contents: response.data.asi_contents,
                });

                if(response.data.asi_code < 20) flag = 0;
                else flag = 1;
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);


    // submit 이벤트
    const onSubmitForm = async (e) => {
        try {
            e.preventDefault();

            const formdata = {
                asi_seq: asi_seq,
                asi_title: state.title,
                asi_contents: state.contents,
            };
            axios
                .post("/asi/updateboard", formdata)
                .then(response => {
                    if(flag == 0) window.location.href = '/notice';
                    else window.location.href = '/faq';
                })
                .catch(error => {
                    console.log(error);
                    alert("게시글 수정을 실패했습니다.");
                })


        } catch (error) {
            console.log(error);
            alert("게시글 수정을 실패했습니다.");
        }
    }

    return (
        <form onSubmit={onSubmitForm} className="forminfo">
            <table className="userinfoTable boardform">
                <tbody>
                <tr>
                    <th>제목</th>
                    <td>
                        <input
                            type="text"
                            name="asi_title"
                            value={state.title}
                            onChange={e => setState({...state, title: e.target.value})}
                            required
                        />
                    </td>
                </tr>

                <tr>
                    <th>내용</th>
                    <td>
                            <textarea
                                name="asi_contents"
                                value={state.contents}
                                onChange={e => setState({...state, contents: e.target.value})}
                                required
                            />
                    </td>
                </tr>
                </tbody>
            </table>

            <div className="modifyinfoBtn">
                <button type="submit">등록</button>
                <button>취소</button>
            </div>
        </form>
    )
}