import '../../styles/Mypage.scss';
import Category from './Category';
import { Link } from 'react-router-dom';

export default function Mypage() {
    return (
        <div id="mypage_container">
            <p className="pageTitle">마이페이지</p>
            <div id="contents">
                <div className="myPageBox">
                    <div className="profileBox">
                        <div className="profile part1">
                            <div>회원 님</div>
                            <div>
                                <Link to="#">배송지 목록</Link>
                                <Link to="/usermodify">개인정보 수정</Link>
                            </div>
                        </div>
                        <div className="profile part2">
                            <div>적립금</div>
                            <div>
                                <span>0</span> 원
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
                <Category />
            </div>
        </div>
    );
}
