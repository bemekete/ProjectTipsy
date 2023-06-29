import React, { useEffect, useState } from 'react';
import '../styles/Simple_inquiry.scss';
import { Link } from 'react-router-dom';
import { Dateformat } from "../components/Function";
import axios from "axios";

function Simpleinquiry() {
    const [loginInfo, setLoginInfo] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/user/userinfo');
            setLoginInfo(response.data);

        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div id="simple_inquiry">
            <div id="simple_inquiry_container">
                <p className="main_first_text">간편문의</p>

                <div className="main_text">
                    <p>
                        평일: 오전 08:30 ~ 오후 17:30 ㅣ 점심시간: 오후 12:00 ~
                        오후 13:00 ㅣ 업무휴무: 토, 일, 공휴일 휴무
                        <br />
                        전국 어디서나 서비스 접수, 상담 및 기타 문의사항이
                        있으시면 연락주세요.
                    </p>

                    <div>
                        <span>고객센터</span>
                        <strong>070-1111-2222</strong>
                    </div>
                </div>

                <UploadForm loginInfo={loginInfo} />

            </div>
        </div>
    );
}

function UploadForm({ loginInfo }) {
    const [state, setState] = useState({
        category: 0,
        title: '',
        content: '',
    })

    const OnSubmitInquiry = async (e) => {
        try {
            e.preventDefault();

            const formdata = {
                id: loginInfo.id,
                q_category: state.category,
                q_title: state.title,
                q_content: state.content,
            };

            axios
                .post("/uscon/insertqna", formdata)
                .then(response => {
                    console.log(response.data);

                    if (response.data == 1) {
                        window.location.href = '/mypage/qnabox';
                    } else if (response.data == 2) {
                        alert("로그인 후 이용해주세요.");
                    }
                })
                .catch(error => {
                    console.log(error);
                    alert("게시글 작성을 실패했습니다.");
                })


        } catch (error) {
            console.log(error);
        }
    }

    return (
        <form onSubmit={OnSubmitInquiry} className="simple_inquirybox">
            <div className="contens">
                <p>
                    <span>*</span>필수 입력 사항
                </p>
                <figure>
                    <table>
                        <colgroup>
                            <col />
                            <col />
                        </colgroup>

                        <tbody>
                        <tr>
                            <th>
                                문의내용<span>&#42;</span>
                            </th>
                            <CodeInquiry />
                        </tr>

                        <tr>
                            <th>
                                제목<span>&#42;</span>
                            </th>
                            <td>
                                <input
                                    type="text"
                                    name="title"
                                    maxlength="50"
                                    size="60"
                                    minlength="5"
                                    placeholder="제목을 입력 하세요."
                                    onChange={e => setState({ ...state, title: e.target.value })}
                                    required
                                />
                            </td>
                        </tr>

                        <tr>
                            <th>
                                내용<span>&#42;</span>
                            </th>
                            <td>
                                    <textarea
                                        name="content"
                                        cols="130"
                                        rows="20"
                                        minlength="10"
                                        placeholder="내용을 입력 하세요."
                                        onChange={e => setState({ ...state, content: e.target.value })}
                                        required
                                    ></textarea>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                </figure>
            </div>

            <div className="agree_submit">
                <Link to="/customerpage">취소</Link>
                <button type="submit">확인</button>
            </div>
        </form>
    )


    function CodeInquiry() {
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

        return (
            <td>
                {
                    category.map((item, i) => (
                        <>
                            <input
                                key={i}
                                type="radio"
                                name="category"
                                value={item.value}
                                onChange={e => setState({ ...state, category: e.target.value })}
                                required
                            />
                            {item.key} 문의
                        </>
                    ))
                }
            </td>
        )
    }
}

export { Simpleinquiry, UploadForm };
