import React, {useState, useRef} from "react";
import axios from "axios";

export function DocForm({ code }) {
    const [[asi_title, setAsi_title], [asi_contents, setAsi_contents], [asi_date, setAsi_date]] = useState();
    setAsi_date(new Date());

    const form = new useRef();
    const formData = new FormData(form);

        axios
            .post('/insertboard', formData)
            .then((response) => {
            })
            .catch((error) => {
                console.log(error);
            });

    return (
        <form action="/insertboard" className="forminfo" ref={form}>
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
                            // value={asi_title}
                        />
                    </td>
                </tr>

                <tr>
                    <th>내용</th>
                    <td>
                        <textarea
                            name="asi_contents"
                            // value={asi_contents}
                        />
                    </td>
                </tr>
            </tbody>
            </table>

            <input
                type="hidden"
                name="asi_date"
                value={asi_date}
            />

            <div className="modifyinfoBtn">
                <button>등록</button>
                <button>취소</button>
            </div>
        </form>
    )
}