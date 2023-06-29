import React, { useState, useEffect } from 'react';
import '../../styles/Mypage.scss';
import Category from './Category';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default function Mypage() {
    const [loginInfo, setLoginInfo] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        try {
            const response = await axios.get('/user/userinfo');
            setLoginInfo(response.data);
        } catch (error) {
            console.error(error);
        }
    };
    return (
        <div id="mypage_container">
            <p className="pageTitle">마이페이지</p>
            <div id="contents">
                <div className="myPageBox">
                    <div className="profileBox">
                        <div className="profile part1">
                            <div>
                                <span style={{ fontWeight: 'bold' }}>
                                    {loginInfo.name}
                                </span>
                                &nbsp;회원님
                            </div>
                            <div>
                                <Link to="#">배송지 목록</Link>
                                <Link to="/myinfo">개인정보 수정</Link>
                            </div>
                        </div>
                        <div className="profile part2">
                            <div>적립금</div>
                            <div>
                                <span>{loginInfo.point}</span> Point
                            </div>
                        </div>
                        <div className="profile part4">
                            <Link to="#">
                                <div>마이 스타일</div>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="shipmentBorder">
                    <p>주문처리 현황</p>
                    <div className="shipmentBox">
                        <div className="ship Course1">
                            <p>입금전</p>
                            <div>0</div>
                        </div>
                        <div className="ship Course2">
                            <p>배송준비중</p>
                            <div>0</div>
                        </div>
                        <div className="ship Course3">
                            <p>배송중</p>
                            <div>0</div>
                        </div>
                        <div className="ship Course4">
                            <p>배송완료</p>
                            <div>0</div>
                        </div>
                    </div>
                </div>
                <Category loginInfo={loginInfo} />
            </div>
        </div>
    );
}
