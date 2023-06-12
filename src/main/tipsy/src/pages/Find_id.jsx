import React from "react";
import '../styles/Find.scss';

export default function FindId() {
    return (
        <div id="find_container">
            <main>
                <div class="find_wrap">
                    <div class="find_logo_div">
                        <a href="/" class="find_logo">tipsy</a>
                    </div>
                    <div class="find_form_wrap">
                        <ul class="find_tab_btn">
                            <li>
                                <a href="#">아이디 찾기</a>
                            </li>
                            <li>
                                <a href="/findpassword">비밀번호 찾기</a>
                            </li>
                        </ul>

                        <form action="#" id="find_form">
                            <div class="form_container">
                                <div class="form_tit">
                                    아이디 찾기
                                </div>
                                <ul class="form_list">
                                    <li>
                                        <dl>
                                            <dt>이름</dt>
                                            <dd>
                                                <div class="input_line">
                                                    <input class="input_type1" type="text" id="user_name" name="user_name"
                                                        maxlength="50" placeholder="이름입력 (2자 이상)" required />
                                                </div>
                                            </dd>
                                        </dl>
                                    </li>
                                    <li>
                                        <dl>
                                            <dt>휴대폰 번호</dt>
                                            <dd>
                                                <div class="input_line">
                                                    <input class="input_type1" type="text" id="user_mobile"
                                                        name="user_mobile" maxlength="15" placeholder="- 제외하고 숫자만 입력" />
                                                    <button type="button" class="button_type1" onclick="find_check()">인증번호 받기</button>
                                                </div>
                                                <div class="input_line">
                                                    <input class="input_type1" type="text" id="check_num" name="check_num"
                                                        maxlength="6" placeholder="인증번호 입력" />
                                                    <button type="button" class="button_type1" onclick="find_check()">확인</button>
                                                </div>
                                            </dd>
                                        </dl>
                                    </li>
                                </ul>
                                <a href="#" class="btnList" onclick="find_check()">아이디 찾기</a>
                            </div>
                        </form>
                    </div>
                </div>
            </main>
        </div>
    );
}