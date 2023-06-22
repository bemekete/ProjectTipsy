import React, {useEffect, useState} from "react";
import axios from "axios";
import {useLocation} from "react-router-dom";


export function DocModify() {
    // seq 쿼리스트링 불러오기
    const location = useLocation();
    const queryParams = new URLSearchParams(location.search);
    const asi_seq = queryParams.get('asi_seq'); // seq 쿼리스트링

    const [detail, setDetail] = useState({}); // AsiVO 객체
    const [title, setTitle] = useState(detail.asi_title); // form title
    const [contents, setContents] = useState(detail.asi_contents); // form contents

    // boarddetail - 객체 불러오기
    useEffect(() => {
        axios
            .get(`/boarddetail?asi_seq=${asi_seq}`)
            .then((response) => {
                setDetail(response.data);

                setTitle(detail.asi_title);
                setContents(detail.asi_contents);
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
                asi_code: detail.asi_code,
                asi_title: title,
                asi_contents: contents,
                asi_date: detail.asi_date,
            };
            axios
                .put("/updateboard", formdata)
                .then(response => {
                    console.log(response.data);
                })
                .catch(error => {
                    console.log(error);
                    alert("게시글 수정을 실패했습니다.");
                })


        } catch (error) {
            console.log(error);
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
                                value={title}
                                onChange={e => setTitle(e.target.value)}
                            />
                        </td>
                    </tr>

                    <tr>
                        <th>내용</th>
                        <td>
                            <textarea
                                name="asi_contents"
                                value={contents}
                                onChange={e => setContents(e.target.value)}
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