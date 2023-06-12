import React, { useState } from "react";
import '../styles/Alcstyletest.scss';

export default function Alcstyletest() {
    const radioBtn = document.getElementsByTagName('input');
    let a, b, c, d, e = 5;

    const [i, setI] = useState(0);
    const [testQSA, setTestQSA] = useState([
        {
            testQ: "1번 질문",
            testS: [
                "1-1",
                "1-2",
            ],
            testA: 0,
        },
        {
            testQ: "2번 질문",
            testS: [
                "2-1",
                "2-2",
            ],
            testA: 0,
        },
        {
            testQ: "3번 질문",
            testS: [
                "3-1",
                "3-2",
            ],
            testA: 0,
        },
        {
            testQ: "4번 질문",
            testS: [
                "4-1",
                "4-2",
            ],
            testA: 0,
        },
        {
            testQ: "5번 질문",
            testS: [
                "5-1",
                "5-2",
            ],
            testA: 0,
        },
        {
            testQ: "6번 질문",
            testS: [
                "6-1",
                "6-2",
            ],
            testA: 0,
        },
        {
            testQ: "7번 질문",
            testS: [
                "7-1",
                "7-2",
            ],
            testA: 0,
        },
    ]);

    function onClickBtn(e) {
        if (e.target.innerText === testQSA[i].testS[0]) {
            radioBtn[i].checked = false;
        } else {
            radioBtn[i].checked = true;
        }
        testQSA[i].testA = 1;

        if (i < testQSA.length - 1) {
            setI(i + 1);
        } else {
            confirmTest();
        }
    }

    function onClickPreBtn() {
        if (i === 0) {
            alert("첫번째 페이지입니다.");
        } else {
            setI(i - 1);
        }
    }

    function onClickNextBtn() {
        if (testQSA[i].testA === 0) {
            alert("항목을 선택해주세요.");
        } else if (i === testQSA.length - 1) {
            confirmTest();
        } else {
            setI(i + 1);
        }
    }

    function confirmTest() {
        if (window.confirm('테스트 결과를 확인하시겠습니까?')) {
            if (radioBtn[0].checked === true) {
                a += 1;
            } else if (radioBtn[0].checked === false) {
                a -= 1;
            }

            if (radioBtn[1].checked === true) {
                b += 1;
            } else if (radioBtn[1].checked === false) {
                b -= 1;
            }

            if (radioBtn[2].checked === true) {
                c += 1;
            } else if (radioBtn[2].checked === false) {
                c -= 1;
            }

            if (radioBtn[3].checked === true) {
                d += 1;
            } else if (radioBtn[3].checked === false) {
                d -= 1;
            }

            if (radioBtn[4].checked === true) {
                e += 1;
            } else if (radioBtn[4].checked === false) {
                e -= 1;
            }

            if (radioBtn[5].checked === true) {
                d -= 2;
            } else if (radioBtn[5].checked === false) {
                d += 2;
            }

            if (radioBtn[6].checked === true) {
                a -= 2;
            } else if (radioBtn[6].checked === false) {
                a += 2;
            }

            // 결과 확인창으로 이동
        }
    }

    return (
        <div id="styletest_container">
            <div className="styletest_box">
                <div className="test_question">
                    <h3>
                        {testQSA[i].testQ}
                    </h3>
                </div>
                <div className="test_select">
                    <div className="selectBox">
                        <button onClick={onClickBtn}>{testQSA[i].testS[0]}</button>
                    </div>
                    <div className="selectBox">
                        <button onClick={onClickBtn}>{testQSA[i].testS[1]}</button>
                    </div>
                </div>
                <div className="test_btn">
                    <div className="btnContainer">
                        <button className="preBtn" onClick={onClickPreBtn}>
                            <img src="" alt="" />◀
                        </button>
                        <button className="nextBtn" onClick={onClickNextBtn}>
                            <img src="" alt="" />▶
                        </button>
                    </div>
                </div>
            </div>

            <div className="testRadio hidden">
                <input type="radio" value="test0" />
                <input type="radio" value="test1" />
                <input type="radio" value="test2" />
                <input type="radio" value="test3" />
                <input type="radio" value="test4" />
                <input type="radio" value="test5" />
                <input type="radio" value="test6" />
            </div>
        </div>
    );
}