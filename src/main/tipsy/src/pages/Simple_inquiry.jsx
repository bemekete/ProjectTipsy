import React from 'react';
import '../styles/Simple_inquiry.scss';
import { Link } from 'react-router-dom';

function Simpleinquiry() {
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

                <UploadForm onSubmit={onSubmit} />

            </div>
        </div>
    );
}

function onSubmit() {

}

function UploadForm({ onSubmit }) {
    return (
        <form onSubmit={onSubmit} className="simple_inquirybox">
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
                                <td>
                                    <label>
                                        <input
                                            type="radio"
                                            name="contens"
                                            value="purchase"
                                            checked
                                        />
                                        구입 문의
                                    </label>

                                    <label>
                                        <input
                                            type="radio"
                                            name="contens"
                                            value="product"
                                        />
                                        제품 문의
                                    </label>

                                    <label>
                                        <input
                                            type="radio"
                                            name="contens"
                                            value="event"
                                        />
                                        이벤트 문의
                                    </label>

                                    <label>
                                        <input
                                            type="radio"
                                            name="contens"
                                            value="homepage"
                                        />
                                        홈페이지 문의
                                    </label>

                                    <label>
                                        <input
                                            type="radio"
                                            name="contens"
                                            value="shipping_inquiry"
                                        />
                                        배송 문의
                                    </label>

                                    <label>
                                        <input
                                            type="radio"
                                            name="contens"
                                            value="shipping_complaint"
                                        />
                                        배송 불만
                                    </label>
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    이름<span>&#42;</span>
                                </th>
                                <td>
                                    <input
                                        type="text"
                                        minlength="2"
                                        maxlength="10"
                                        name="userName"
                                        placeholder="이름을 입력해 주세요."
                                        required
                                    />
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    비밀번호<span>&#42;</span>
                                </th>
                                <td>
                                    <input
                                        type="password"
                                        name="inquiryPSW"
                                        minlength="3"
                                        maxlength="4"
                                        size="20px"
                                        placeholder="비밀번호를 입력해 주세요."
                                        required
                                    />
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    제목<span>&#42;</span>
                                </th>
                                <td>
                                    <input
                                        type="text"
                                        name="Title"
                                        maxlength="50"
                                        size="60"
                                        minlength="5"
                                        placeholder="제목을 입력 하세요."
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
                                        name="inquiries"
                                        cols="130"
                                        rows="20"
                                        minlength="10"
                                        placeholder="내용을 입력 하세요."
                                        required
                                    ></textarea>
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    주소<span>&#42;</span>
                                </th>
                                <td>
                                    <input
                                        type="text"
                                        name="userPostcode1"
                                        size="10px"
                                        placeholder="우편번호"
                                        required
                                    />
                                    <Link to="#">우편번호</Link>
                                    <br />
                                    <input
                                        type="text"
                                        name="userPostcode2"
                                        size="50"
                                        placeholder="주소"
                                        required
                                    />
                                    <span>기본주소</span>
                                    <br />
                                    <input
                                        type="text"
                                        name="userPostcode3"
                                        size="50"
                                        placeholder="상세 주소"
                                    />
                                    <span>상세주소 (선택입력)</span>
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
}

export { Simpleinquiry, UploadForm };