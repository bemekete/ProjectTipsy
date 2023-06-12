import React from "react";
import '../styles/Simple_inquiry.scss';

export default function Simple_inquiry() {
    return (
        <div id="simple_inquiry">
            <div id="simple_inquiry_container">
                <p className="main_first_text">간편문의</p>

                <div className="main_text">

                    <p>
                        평일: 오전 08:30 ~ 오후 17:30 ㅣ 점심시간: 오후 12:00 ~ 오후 13:00 ㅣ 업무휴무: 토, 일, 공휴일 휴무
                        <br />
                        전국 어디서나 서비스 접수, 상담 및 기타 문의사항이 있으시면 연락주세요.
                    </p>

                    <div>
                        <span>고객센터</span>
                        <strong>070-1111-2222</strong>
                    </div>
                </div>

                <form action="../faq/faq.html" className="simple_inquirybox">
                    <div className="contens">
                        <p><span>*</span>필수 입력 사항</p>
                        <figure>
                            <table>
                                <colgroup>
                                    <col />
                                    <col />
                                </colgroup>

                                <tbody>
                                    <tr>
                                        <th>문의내용<span>&#42;</span></th>
                                        <td>
                                            <label>
                                                <input type="radio" name="contens" value="purchase" checked />
                                                구입 문의
                                            </label>

                                            <label>
                                                <input type="radio" name="contens" value="product" />
                                                제품 문의
                                            </label>

                                            <label>
                                                <input type="radio" name="contens" value="event" />
                                                이벤트 문의
                                            </label>

                                            <label>
                                                <input type="radio" name="contens" value="homepage" />
                                                홈페이지 문의
                                            </label>

                                            <label>
                                                <input type="radio" name="contens" value="shipping_inquiry" />
                                                배송 문의
                                            </label>

                                            <label>
                                                <input type="radio" name="contens" value="shipping_complaint" />
                                                배송 불만
                                            </label>
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>이름<span>&#42;</span></th>
                                        <td>
                                            <input type="text" minlength="2" maxlength="10" name="userName"
                                                placeholder="이름을 입력해 주세요." required />
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>비밀번호<span>&#42;</span></th>
                                        <td>
                                            <input type="password" name="inquiryPSW" minlength="3" maxlength="4" size="20px"
                                                placeholder="비밀번호를 입력해 주세요." required />
                                        </td>
                                    </tr>

                                    <tr>
                                        <th>제목<span>&#42;</span></th>
                                        <td><input type="text" name="Title" maxlength="50" size="60" minlength="5"
                                            placeholder="제목을 입력 하세요." required /></td>
                                    </tr>

                                    <tr>
                                        <th>내용<span>&#42;</span></th>
                                        <td><textarea name="inquiries" cols="130" rows="20" minlength="10"
                                            placeholder="내용을 입력 하세요." required></textarea></td>
                                    </tr>

                                    <tr>
                                        <th>주소<span>&#42;</span></th>
                                        <td>
                                            <input type="text" name="userPostcode1" size="10px" placeholder="우편번호"
                                                required /><a href="#">우편번호</a><br />
                                            <input type="text" name="userPostcode2" size="50" placeholder="주소"
                                                required /><span>기본주소</span><br />
                                            <input type="text" name="userPostcode3" size="50"
                                                placeholder="상세 주소" /><span>상세주소 (선택입력)</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </figure>
                    </div>

                    <div className="agree_container">
                        <p>개인정보 수집 및 이용동의<span>&#42;</span></p>
                        <div className="agree_text">
                            <p>
                                1. 수집 항목 이름, 휴대전화번호, 주소
                                <br />
                                2. 수집 및 이용목적 고객상담서비스 제공을 위한 원활한 의사소통의 경로 확보
                                <br />
                                3.보유 및 이용기간 수집일로부터 3년(전자상거래등에서의소비자보호에관한법률에 따라 3년간 보관)
                                <br />
                                ※ 위 항목 ’개인정보 수집 및 이용동의‘를 거부하실 수 있습니다 . 동의를 거부하실 경우, 온라인을 통한 고객문의 접수가 되지 않습니다.
                            </p>
                            <div className="agree_use">
                                <label for="agree_use"><span>개인정보 수집 및 이용동의 확인</span></label>
                                <input type="checkbox" name="agree_use" id="agree_use" value="agree_use" required />
                            </div>
                        </div>

                        <div className="agree_submit">
                            <a href="../customerpage/customerpage.html">취소</a>
                            <button type="submit">확인</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}