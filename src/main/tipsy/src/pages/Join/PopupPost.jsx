import React from 'react';
import DaumPostcode from "react-daum-postcode";
import {useState} from "react";

const PopupPost = (props) => {
    // 우편번호 검색 후 주소 클릭 시 실행될 함수, data callback 용
    const handlePostCode = (data) => {
        let fullAddress = data.address;
        let extraAddress = '';

        if (data.addressType === 'R') {
            if (data.bname !== '') {
                extraAddress += data.bname;
            }
            if (data.buildingName !== '') {
                extraAddress += (extraAddress !== '' ? `, ${data.buildingName}` : data.buildingName);
            }
            fullAddress += (extraAddress !== '' ? ` (${extraAddress})` : '');
        }

        const sendDatakToParent = () => {
            const post = [fullAddress, data.zonecode];
            console.log("post : "+post);
            props.onPopupData(post);
            // 데이터를 부모 컴포넌트로 전달하기 위해 onPopupData 함수를 호출합니다.
        };
        sendDatakToParent();
        props.onClose()
    }

    const postCodeStyle = {
        display: "block",
        position: "absolute",
        top: "10%",
        width: "600px",
        height: "600px",
        padding: "7px",
    };

    return(
        <div>
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
            // 닫기 버튼 생성
            <button type='button' onClick={() => {props.onClose()}} className='postCode_btn'>닫기</button>
        </div>
    )
}

export default PopupPost;