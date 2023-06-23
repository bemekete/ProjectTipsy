import React from 'react';
import DaumPostcode from "react-daum-postcode";

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
            console.log("post : " + post);
            props.onPopupData(post);
            // 데이터를 부모 컴포넌트로 전달하기 위해 onPopupData 함수를 호출합니다.
        };
        sendDatakToParent();
        props.onClose()
    }

    const postCodeStyle = {
        display: "block",
        width: "400px",
        height: "600px",
        padding: "7px",
        
        boxShadow: "0 0 0 1.5px rgba(0, 0, 0, 0.2)",
        
        zIndex: "9999",
        position: "fixed",
        left: "50%",
        top: "40%",
        transform: "translate(-50%, -30%)"
    };

    const postCloseBtn = {
        width: "25px",
        lineHeight: "25px",
        padding : 0,
        zIndex: "9999",
        textAlign : "center",
        
        fontSize : "1.5rem",
        color : "rgba(0,0,0,0.6)",

        position: "fixed",
        left: "75%",
        top: "25%",
        transform: "translate(-150%, -60%)",

        border : "none",
        backgroundColor: 'white',
        cursor: "pointer",
    }

    return (
        <div>
            <DaumPostcode style={postCodeStyle} onComplete={handlePostCode} />
            <button
                style={postCloseBtn} type='button'
                onClick={(e) => {
                    e.preventDefault();
                    props.onClose();
                }} className='postCode_btn'>&times;</button>
        </div>
    )
}

export default PopupPost;