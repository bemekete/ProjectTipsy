import React, {useState, useRef, useEffect} from "react";
import axios from "axios";

export function DocForm({ code }) {
    const [formcode, setFormCode] = useState('');
    const [title, setTitle] = useState('');
    const [contents, setContents] = useState('');
    const onSubmitForm = async(e) => {
        try{
            e.preventDefault();

            const formdata = {
                asi_code: formcode,
                asi_title: title,
                asi_contents: contents,
                asi_date: Dateformat(),
            };
            axios
                .post("/insertboard", formdata)
                .then(response => {
                    console.log(response.data);

                    if(response.data == "1") window.location.href = '/notice'; // notice
                    else window.location.href = '/faq'; // faq
                })
                .catch(error => {
                    console.log(error);
                    alert("게시글 작성을 실패했습니다.");
                })


        } catch (error){
            console.log(error);
        }
    }

    return (
        <form onSubmit={onSubmitForm} className="forminfo">
            <table className="userinfoTable boardform">
                <thead>
                <tr>
                    <th>분류</th>
                    <td className="asi_code">
                        {
                            code.map((item) => (
                                <>
                                    <input
                                        type="radio"
                                        name="asi_code"
                                        value={item.code}
                                        onChange={e=>setFormCode(e.target.value)}
                                    />{item.value}
                                </>
                            ))
                        }
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
                            onChange={e=>setTitle(e.target.value)}
                        />
                    </td>
                </tr>

                <tr>
                    <th>내용</th>
                    <td>
                        <textarea
                            name="asi_contents"
                            onChange={e=>setContents(e.target.value)}
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

function Dateformat() {
    const date = new Date();

    function Digit(n) {
        return n < 10 ? `0${n}` : `${n}`;
    }

    return '' + date.getFullYear() + '-' + Digit(date.getMonth()) + '-' + Digit(date.getDay()) + ' '
        + Digit(date.getHours()) + ':' + Digit(date.getMinutes()) + ':' + Digit(date.getSeconds());
}