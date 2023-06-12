import React from "react";
import '../styles/Eventboard.scss';

export default function Eventboard() {
    return <div id="event_main">
        <div id="event_maincontainer">
            <p class="event_first_text">이벤트</p>
            <ul class="event_contents">
                <li><a href="#"><img src={require('../assets/eventboard_img/event (8).png')} alt="전통주 최대 10% 할인" /></a></li>
                <li><a href="#"><img src={require('../assets/eventboard_img/event (1).png')} alt="첫눈을 닮은 금설 할인 이벤트" /></a></li>
                <li><a href="#"><img src={require('../assets/eventboard_img/event (2).png')} alt="국내산 배 증류주 고려주조 담금주" /></a></li>
                <li><a href="#"><img src={require('../assets/eventboard_img/event (3).png')} alt="해창막걸리 18도 한정 수량 입고" /></a></li>
                <li><a href="#"><img src={require('../assets/eventboard_img/event (4).png')} alt="계묘년 맞이 서울의 밤 할인" /></a></li>
                <li><a href="#"><img src={require('../assets/eventboard_img/event (5).png')} alt="새해 선물용 도르리set 42,000원" /></a></li>
                <li><a href="#"><img src={require('../assets/eventboard_img/event (6).png')} alt="막쿠르트 450ml 13,000원" /></a></li>
                <li><a href="#"><img src={require('../assets/eventboard_img/event (7).png')} alt="대선 500ml 1,600원" /></a></li>
            </ul>
        </div>
    </div>
}