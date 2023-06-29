import React, { useState } from 'react';
import axios from 'axios';
import { Dateformat } from '../../components/Function';

export function DocForm({ code }) {
    const [state, setState] = useState({
        formcode: '',
        title: '',
        contents: '',
    });
    const onSubmitForm = async (e) => {
        try {
            e.preventDefault();

            const formdata = {
                asi_code: state.formcode,
                asi_title: state.title,
                asi_contents: state.contents,
                asi_date: Dateformat(),
            };

            await axios
                .post('/asi/insertboard', formdata)
                .then((response) => {
                    console.log(response.data);

                    if (response.data === '1')
                        window.location.href = '/notice'; // notice
                    else window.location.href = '/faq'; // faq
                })
                .catch((error) => {
                    console.log(error);
                    alert('게시글 작성을 실패했습니다.');
                });
        } catch (error) {
            console.log(error);
            alert('게시글 작성을 실패했습니다.');
        }
    };

    return (
        <form onSubmit={onSubmitForm} className="forminfo">
            <table className="userinfoTable boardform">
                <thead>
                    <tr>
                        <th>분류</th>
                        <td className="asi_code">
                            {code.map((item, index) => (
                                <>
                                    <input
                                        key={index}
                                        type="radio"
                                        name="asi_code"
                                        value={item.code}
                                        onChange={(e) =>
                                            setState({ ...state, formcode: e.target.value })
                                        }
                                    />
                                    {item.value}
                                </>
                            ))}
                        </td>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th>제목</th>
                        <td>
                            <input
                                type="text"
                                name="asi_title"
                                onChange={(e) => setState({ ...state, title: e.target.value })}
                            />
                        </td>
                    </tr>

                    <tr>
                        <th>내용</th>
                        <td>
                            <textarea
                                name="asi_contents"
                                onChange={(e) => setState({ ...state, contents: e.target.value })}
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
    );
}
