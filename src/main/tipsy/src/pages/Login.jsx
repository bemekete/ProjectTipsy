import React from 'react';
import '../styles/Login.scss';

function Login() {
    return (
        <>
            {/* <!-- ================================================= main =============================================== --> */}
            <main id="login_main">
                <div id="login_wrap">
                    <div id="login_container">
                        <form
                            action="../index.html"
                            id="login_form"
                            className="login_form"
                            name="login_form"
                        >
                            <div className="login_tit">
                                <a href="/" className="login_logo">
                                    tipsy
                                </a>
                            </div>
                            <div className="hide">간격띄우기</div>
                            <div className="login_text">
                                <div>
                                    <ul>
                                        <li>
                                            <input
                                                className="login_input"
                                                type="text"
                                                id="login_id"
                                                name="login_id"
                                                placeholder="아이디를 입력하세요."
                                                autoFocus
                                                required
                                            />
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div>
                                <ul>
                                    <li>
                                        <input
                                            className="login_input"
                                            type="password"
                                            id="login_pw"
                                            name="login_pw"
                                            placeholder="비밀번호를 입력하세요."
                                            required    
                                        />
                                    </li>
                                </ul>
                            </div>
                            <div className="keepIdDiv">
                                <input id="keepId" type="checkbox" />
                                <label htmlFor="keepId">아이디 저장</label>
                            </div>
                            <div>
                                <button className="login_btn">로그인</button>
                            </div>
                            <div className="find_div">
                                <span>
                                    <a
                                        href="/findid"
                                        className="find"
                                    >
                                        <strong>아이디찾기 &#124; </strong>
                                    </a>
                                </span>
                                <span>
                                    <a
                                        href="/findpassword"
                                        className="find"
                                    >
                                        <strong>비밀번호찾기</strong>
                                    </a>
                                </span>
                            </div>
                            <div>
                                <span>
                                    <strong>아직 회원이 아니신가요?</strong>
                                    &nbsp;
                                    <a
                                        href="../join/join.html"
                                        className="find2"
                                    >
                                        <strong>회원가입</strong>
                                    </a>
                                </span>
                            </div>
                        </form>
                        <div className="sns_login">
                            <div className="sns_login_tit">SNS 로그인</div>
                            <div>
                                <a href="https://accounts.kakao.com/login/?continue=https%3A%2F%2Fmail.kakao.com%2F">
                                    <img
                                        className="sns_login_img"
                                        src={require('../assets/login_img/kakao_login_icon.png')}
                                        alt="카카오 로그인"
                                    />
                                </a>
                            </div>
                            <div>
                                <a href="https://nid.naver.com/nidlogin.login">
                                    <img
                                        className="sns_login_img"
                                        src={require('../assets/login_img/naver_login_icon.png')}
                                        alt="네이버 로그인"
                                    />
                                </a>
                            </div>
                            <div>
                                <a href="https://accounts.google.com/accountchooser/identifier?checkedDomains=youtube&dsh=S486541525%3A1672737939199566&flowEntry=AccountChooser&flowName=GlifWebSignIn&hl=ko&ifkv=AeAAQh4DnVYnd_O3p6ugUPFpl0JlJzD23WIxi8cpZoMsU6rAWSabyk3Hp9rjCAGLV3jna0WNq5B3nw&pstMsg=1">
                                    <img
                                        className="sns_login_img2"
                                        src={require('../assets/login_img/google_login_icon.png')}
                                        alt="구글 로그인"
                                    />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}

export default Login;
