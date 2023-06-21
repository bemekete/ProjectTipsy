import React, { useEffect, useState } from 'react';
import '../../styles/JoinForm.scss';
import axios from 'axios';
import {Link, useNavigate} from 'react-router-dom';
import Popup from "./Popup";
import PopupPost from "./PopupPost";



function JoinForm() {
    return (
        <>
            <div id="joinform_container">
                <p className="pageTitle">회원가입</p>
                <div className="contents">
                    <JoinBox />
                </div>
            </div>
        </>
    );
}

// DB로 데이터 전달 (form의 회원 정보 db로 전송)
const fetchData = async (userData)=>{
    try {
        console.log(userData);
        const response = await axios.post("/user/join",userData);
        alert("회원가입에 성공하셨습니다.");
        return response.data;
    }catch{
        alert("회원가입에 실패하셨습니다. 필수 입력 정보를 모두 입력해주세요.");
    }
};


const JoinBox = () => {
    // 회원 전체 정보 변수
    const [userData, setUserData] = useState({});
    // 회원 전화번호 변수
    const [phoneNum, setPhoneNum] = useState({
        firstNum: '',
        secondNum: '',
        lastNum: '',
    });
    const navigate = useNavigate();

    // 각 핸드폰 번호 데이터 취합 함수 - 1/2
    const phoneFunc = (e) => {
        // 객체구조 분해 할당으로 각 input태그 별 값 저장
        const { name, value } = e.target;
        setPhoneNum((phoneData) => ({
            ...phoneData,
            [name]: value,
        }));
    };

    // 각 핸드폰 번호 데이터 취합 함수 - 2/2
    useEffect(() => {
        // 회원 전화번호 함수에 담긴 정보 통합 후 회원 전체 정보 변수에 추가
        setUserData((data) => ({
            ...data,
            phone: `${phoneNum.firstNum}-${phoneNum.secondNum}-${phoneNum.lastNum}`,
        }));
    }, [phoneNum]);

    // 입력 데이터 저장 함수
    const handleChange = (e) => {
        // DB로 전달될 데이터 저장
        const { name: varName, value: varValue } = e.target;
        setUserData((data) => ({
            ...data,
            [varName]: varValue,
        }));
    };

    // 회원가입 완료 버튼
    const dataSubmit =  (e) => {
        e.preventDefault();
        fetchData(userData);
        navigate("/login");
    };

    // useEffect(()=>{
    //     if( window.confirm("로그인 페이지로 이동하시겠습니까?")){
    //         navigate("/login");
    //     }else{
    //         navigate("/");
    //     }
    // },[dataSubmit])

    // 유효성 검사 완료 유무 확인 변수
    const [completeVal, setCompletVal]= useState({});
    // 유효성 검사 문구 변수
    const [valText, setValText]= useState({
        address_1 : "필수 입력사항입니다.",
        postal : "필수 입력사항입니다.",
    });
    //데이터 유효성 검사 함수
    const validation = (e)=>{
        const {id, value}=e.target;
        switch (id) {
            case "userID" :
                if (value === '') {
                    setValText((prev)=>({
                        ...prev,
                        [id] : "필수 입력정보입니다."
                    }));
                } else if (/^(?=.*[a-z])(?=.*[0-9])[a-z0-9]{8,15}$/g.test(value)) {
                    setValText((prev)=>({
                        ...prev,
                        [id] : "올바른 입력입니다."
                    }));
                    setCompletVal((prev)=>({
                        ...prev,
                        [id]: null,
                    }));
                } else {
                    setValText((prev)=>({
                        ...prev,
                        [id] : "영어, 숫자 조합으로 8자 이상 15자리 이하로 입력하세요."
                    }));
                }
                break;
            case "userPSW" :
                if (value === '') {
                    setValText((prev)=>({
                        ...prev,
                        [id] : "필수 입력 정보입니다."
                    }));
                } else if (/^(?=.*[a-z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-z0-9!@#$%^&*]{8,15}$/g.test(value)) {
                    setValText((prev)=>({
                        ...prev,
                        [id] : "올바른 입력입니다."
                    }));
                    setCompletVal((prev)=>({
                        ...prev,
                        [id]: null,
                    }));
                } else {
                    setValText((prev)=>({
                        ...prev,
                        [id] : "영어, 숫자, 특수문자 조합으로 8자이상 15자 이하로 입력해주세요."
                    }));
                }
                break;
            case "rePSW" :
                if(userData.password === value){
                    setValText((prev)=>({
                        ...prev,
                        [id] : "비밀번호가 일치합니다."
                    }));
                    setCompletVal((prev)=>({
                        ...prev,
                        [id]: null,
                    }));
                }else{
                    setValText((prev)=>({
                        ...prev,
                        [id] : "비밀번호가 일치하지 않습니다."
                    }));
                }
                break;
            case "passRequest" :
                console.log(value);
                if(value === ''){
                    setValText((prev)=>({
                    ...prev,
                    [id] : "필수 입력 정보입니다.",
                    }))
                }else{
                    setValText((prev)=>({
                        ...prev,
                        [id] : null,
                    }))
                }
                break;
            case "ckpwa" :
                if(value === ''){
                    setValText((prev)=>({
                        ...prev,
                        [id] : "필수 입력 정보입니다.",
                    }))
                }else if(/^(?=.{3,20}$).*$/.test(value)){
                    setValText((prev)=>({
                        ...prev,
                        [id] : "3자 이상 20자 이하로 입력해 주세요."
                    }))
                } else{
                    setValText((prev)=>({
                        ...prev,
                        [id] : null,
                    }))
                }
                break;
            case "userName" :
                if(/^[가-힣]{2,5}$/.test(value)){
                    setValText((prev)=>({
                        ...prev,
                        [id] : null
                    }));
                }else{
                    setValText((prev)=>({
                        ...prev,
                        [id] : "한글 2글자 이상 5글자 이하로 입력해주세요."
                    }));
                }
                break;
            case "firstNum" :
                if(typeof value === "number"){
                    setValText((prev)=>({
                        ...prev,
                        [id] : null
                    }));
                }else{
                    setValText((prev)=>({
                        ...prev,
                        [id] : "올바르지 않은 휴대폰 번호입니다."
                    }));
                }
                break;
            case "secondNum" :
                break;
            case "thirdNum" :
                break;
            case "email" :
                if(/^[\w.-]+@[a-zA-Z_-]+?\.[a-zA-Z]{2,3}$/.test(value)) {
                    setValText((prev) => ({
                        ...prev,
                        [id]: null,
                    }));
                }else if(value === ''){
                    setValText((prev) =>({
                        ...prev,
                        [id] : "필수 입력 정보입니다."
                    }));
                }
                else{
                    setValText((prev)=>({
                        ...prev,
                        [id] : "이메일 형식이 올바르지 않습니다.",
                    }));
                }
                break;
        }
    }

    // ID 중복 체크
    const checkid = async (e)=>{
        e.preventDefault();
        if(/^(?=.*[a-z])(?=.*[0-9])[a-z0-9]{8,15}$/g.test(userData.id)) {
           await axios.get("/user/checkid")
                .then((response) => {
                    console.log(response.data);
                    if( response.data.includes(userData.id)){
                        setValText((prev)=>({
                            ...prev,
                            userID : "이미 사용중인 아이디입니다."
                        }));
                    }else{
                        setValText((prev)=>({
                            ...prev,
                            userID : "사용 가능한 아이디입니다."
                        }));
                    }
                })
                .catch()
        }else {
            setValText((prev)=>({
                ...prev,
                id : "영어, 숫자 조합으로 8자 이상 15자리 이하로 입력하세요."
            }));
        }
    }

    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [popupPostData, setPopupPostData] = useState([]);
    // 팝업창 열기
    const openPostCode = (e) => {
        e.preventDefault();
        setIsPopupOpen(true)
    }

    // 팝업창 닫기
    const closePostCode = () => {
        setIsPopupOpen(false)
    }


    // 팝업에서 데이터를 전달받는 함수
    const handlePopupData = (data) => {
        console.log("joinForm : "+data);
         setPopupPostData(data);
    };

    // DB에 전달할 객체에 주소 및 우편번호 저장
    useEffect(()=>{
        setUserData((prev)=>({
            ...prev,
            postal : popupPostData[1],
            address_1 : popupPostData[0],
        }))
    },[popupPostData])

    return (
        <>
            <form onSubmit={dataSubmit} className="joinbox" method="post">
                <p>
                    <span>*</span> 필수 입력 사항
                </p>
                <figure>
                    <figcaption>기본정보</figcaption>
                    <table>
                        <colgroup>
                            <col />
                            <col />
                        </colgroup>

                        <tbody>
                            <tr>
                                <th>
                                    아이디 <span>*</span>
                                </th>
                                <td>
                                    <input
                                        type="text"
                                        minLength="4"
                                        maxLength="16"
                                        name="id"
                                        id="userID"
                                        // placeholder="영어, 숫자 조합으로 8자 이상 15자 이하로 입력하세요."
                                        onChange={handleChange}
                                        onBlur={validation}
                                    />
                                    <button onClick={checkid} >중복확인</button>
                                    {valText.userID&&<div>{valText.userID}</div>}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    비밀번호 <span>*</span>
                                </th>
                                <td>
                                    <input
                                        type="password"
                                        minLength="6"
                                        maxLength="16"
                                        name="password"
                                        id="userPSW"
                                        // placeholder="영어, 숫자, 특수문자 조합으로 8자이상 15자 이하로 입력해주세요."
                                        onChange={handleChange}
                                        onBlur={validation}
                                    />
                                    <span>

                                    </span>
                                    {valText.userPSW&&<div>{valText.userPSW}</div>}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    비밀번호 확인 <span>*</span>
                                </th>
                                <td>
                                    <input
                                        type="password"
                                        minLength="6"
                                        maxLength="16"
                                        id="rePSW"
                                        onBlur={validation}
                                    />
                                    {valText.rePSW&&<div className="confirmPSW notice">{valText.rePSW}</div>}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    비밀번호 확인 질문 <span>*</span>
                                </th>
                                <td>
                                    <select
                                        id = "passRequest"
                                        name="password_q"
                                        onChange={handleChange}
                                        onBlur={validation}
                                    >
                                        <option value="">
                                            선택하세요.
                                        </option>
                                        <option value="pswQ1">
                                            기억에 남는 추억의 장소는?
                                        </option>
                                        <option value="pswQ2">
                                            자신의 인생 좌우명은?
                                        </option>
                                        <option value="pswQ3">
                                            자신의 보물 제 1호는?
                                        </option>
                                        <option value="pswQ4">
                                            가장 기억에 남는 선생님 성함은?
                                        </option>
                                        <option value="pswQ5">
                                            타인이 모르는 자신만의 신체 비밀이
                                            있다면?
                                        </option>
                                        <option value="pswQ6">
                                            추억하고 싶은 날짜가 있다면?
                                        </option>
                                        <option value="pswQ7">
                                            받았던 선물 중 기억에 남는 독특한
                                            선물은?
                                        </option>
                                        <option value="pswQ8">
                                            유년시절 가장 생각나는 친구 이름은?
                                        </option>
                                        <option value="pswQ9">
                                            인상 깊게 읽은 책 이름은?
                                        </option>
                                        <option value="pswQ10">
                                            읽은 책 중에서 좋아하는 구절이
                                            있다면?
                                        </option>
                                        <option value="pswQ11">
                                            자신이 두 번째로 존경하는 인물은?
                                        </option>
                                        <option value="pswQ12">
                                            친구들에게 공개하지 않은 어릴 적
                                            별명이 있다면?
                                        </option>
                                        <option value="pswQ13">
                                            초등학교 때 기억에 남는 짝꿍 이름은?
                                        </option>
                                        <option value="pswQ14">
                                            다시 태어나면 되고 싶은 것은?
                                        </option>
                                        <option value="pswQ15">
                                            내가 좋아하는 캐릭터는?
                                        </option>
                                    </select>
                                    {valText.passRequest&&<div>{valText.passRequest}</div>}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    비밀번호 확인 답변 <span>*</span>
                                </th>
                                <td>
                                    <input
                                        type="text"
                                        name="password_a"
                                        size="70px"
                                        id="ckpwa"
                                        onChange={handleChange}
                                        onBlur={validation}
                                    />
                                    {valText.ckpwa&&<div>{valText.ckpwa}</div>}
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    이름 <span>*</span>
                                </th>
                                <td>
                                    <input
                                        type="text"
                                        minLength="2"
                                        maxLength="10"
                                        name="name"
                                        id="userName"
                                        onChange={handleChange}
                                        onBlur={validation}
                                    />
                                    {valText.userName&&<div>{valText.userName}</div>}
                                </td>
                            </tr>
                            <tr>
                                <th>주소<span>*</span></th>
                                <td>
                                    <input
                                        type="text"
                                        name="postal"
                                        size="10px"
                                        value={popupPostData[1]}
                                        readOnly
                                    />
                                    <button onClick={openPostCode}>우편번호</button>
                                    <div id="popupDom">
                                        {isPopupOpen && (
                                            <Popup>
                                                <PopupPost onPopupData={handlePopupData} onClose={closePostCode} />
                                            </Popup>
                                        )}
                                    </div>
                                    <br />
                                    <input
                                        type="text"
                                        name="address_1"
                                        size="50"
                                        value={popupPostData[0]}
                                        readOnly
                                    />
                                    <span>기본주소</span>
                                    <br />
                                    <input
                                        type="text"
                                        name="address_2"
                                        size="50"
                                        id="address"
                                        onChange={handleChange}
                                        onBlur={validation}
                                    />
                                    <span>상세주소</span>
                                </td>
                            </tr>
                            <tr>
                                <th>
                                    휴대전화 <span>*</span>
                                </th>
                                <td>
                                    <select
                                        id ="firstNum"
                                        name="firstNum"
                                        onChange={phoneFunc}
                                    >
                                        <option value="선택">선택</option>
                                        <option value="010">010</option>
                                        <option value="011">011</option>
                                        <option value="016">016</option>
                                        <option value="017">017</option>
                                        <option value="018">018</option>
                                        <option value="019">019</option>
                                    </select>
                                    -
                                    <input
                                        type="text"
                                        name="secondNum"
                                        minLength="3"
                                        maxLength="4"
                                        size="5px"
                                        id="secondNum"
                                        onChange={phoneFunc}
                                    />
                                    -
                                    <input
                                        type="text"
                                        name="lastNum"
                                        minLength="4"
                                        maxLength="4"
                                        size="5px"
                                        id="thirdNum"
                                        onChange={phoneFunc}
                                    />

                                </td>
                            </tr>
                            <tr>
                                <th>
                                    이메일 <span>*</span>
                                </th>
                                <td>
                                    <input
                                        type="email"
                                        name="email"
                                        size="30px"
                                        id="email"
                                        onChange={handleChange}
                                        onBlur={validation}
                                    />
                                    {valText.email && <div>{valText.email}</div>}
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </figure>
                <div className="joinButton">
                    <button type="submit" onClick={dataSubmit}>
                        회원가입
                    </button>
                </div>
            </form>
        </>
    );
};

export default JoinForm;