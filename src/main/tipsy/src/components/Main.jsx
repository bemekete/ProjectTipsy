import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from '../pages/HomePage/Home';
import Mainpage from '../pages/MainPage/Mainpage';
import Detail from '../pages/Detail';
import Login from '../pages/Login';
import Join from '../pages/Join/Join';
import Mypage from '../pages/Mypage/Mypage';
import JoinForm from '../pages/Join/JoinForm';
import Customerpage from '../pages/Customerpage';
import Notice from '../pages/Notice';
import Searchpage from '../pages/Searchpage';
import { Simpleinquiry } from '../pages/Simple_inquiry';
import Orderend from '../pages/Orderend';
import Eventboard from '../pages/Eventboard';
import FindId from '../pages/Find/Find_id';
import FindPassword from '../pages//Find/Find_password';
import FAQ from '../pages/FAQ';
import CreateOrder from '../pages/CreateOrder';
import Shopbasket from '../pages/Shopbasket/Shopbasket';
import Map from '../pages/Map/Map';
import Adminpage from '../pages/Adminpage/Adminpage';
import UserModify from '../pages/Adminpage/UserModify';
import MyInfo from '../pages/Mypage/MyInfo';
import ChangePw from '../pages/Find/ChangePw';

function Main({ setIsLoggedIn, handleLoginFormSubmit, isLoggedIn, navigate }) {
    const [productData, setProductData] = useState({
        donghak:
            'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/TOnv-1655794504098-1.jpg',
        hans: 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/fe1w-1631180181351-hsocd+ap0.jpg',
        hansiwool:
            'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/7DjO-1669259690558-%ED%95%9C%EC%8B%9C%EC%9A%B8.jpg',
        mildam: 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/r9a3-1653530958733-mildam40_thumbnail.jpg',
        monkey: 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/Gt8e-1623070755884-%EC%88%A0%EC%B7%A8%ED%95%9C%EC%9B%90%EC%88%AD%EC%9D%B4-5.jpg',
        saint: './detail_img/1.jpg',
        yeon: 'https://d38cxpfv0ljg7q.cloudfront.net/admin_contents/detail/5YHz-1651137039043-1.jpg',
    });

    return (
        <>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mainpage" element={<Mainpage />} />
                    <Route
                        path="/detail"
                        element={
                            <Detail
                                productData={productData}
                                setProductData={setProductData}
                            />
                        }
                    />
                    <Route
                        path="/login"
                        element={
                            <Login
                                handleLoginFormSubmit={handleLoginFormSubmit}
                            />
                        }
                    />
                    <Route path="/join" element={<Join />} />
                    <Route path="/joinform" element={<JoinForm />} />
                    <Route path="/mypage/:data" element={<Mypage />} />
                    <Route
                        path="/customerpage"
                        element={
                            <Customerpage
                                isLoggedIn={isLoggedIn}
                                navigate={navigate}
                            />
                        }
                    />
                    <Route path="/notice" element={<Notice />} />
                    <Route path="/searchresult" element={<Searchpage />} />
                    <Route path="/simpleinquiry" element={<Simpleinquiry />} />
                    <Route path="/orderend" element={<Orderend />} />
                    <Route path="/eventboard" element={<Eventboard />} />
                    <Route path="/findid" element={<FindId />} />
                    <Route path="/findpassword" element={<FindPassword />} />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/createorder" element={<CreateOrder />} />
                    <Route path="/shopbasket" element={<Shopbasket />} />
                    <Route path="/map" element={<Map />} />
                    <Route path="/adminpage/:data" element={<Adminpage />} />
                    <Route path="/usermodify" element={<UserModify />} />
                    <Route
                        path="/myinfo"
                        element={<MyInfo setIsLoggedIn={setIsLoggedIn} />}
                    />
                    <Route
                        path="/changepw"
                        element={<ChangePw setIsLoggedIn={setIsLoggedIn} />}
                    />
                </Routes>
            </div>
        </>
    );
}

export default Main;
