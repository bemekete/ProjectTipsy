import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Home from '../pages/HomePage/Home';
import Mainpage from '../pages/Mainpage';
import Detail from '../pages/Detail';
import Login from '../pages/Login';
import Join from '../pages/Join';
import Mypage from '../pages/Mypage/Mypage';
import JoinForm from '../pages/JoinForm';
import Customerpage from '../pages/Customerpage';
import Notice from '../pages/Notice';
import Searchpage from '../pages/Searchpage';
import Simpleinquiry from '../pages/Simple_inquiry';
import Orderend from '../pages/Orderend';
import Eventboard from '../pages/Eventboard';
import FindId from '../pages/Find_id';
import FindPassword from '../pages/Find_password';
import FAQ from '../pages/FAQ';
import CreateOrder from '../pages/CreateOrder';
import Shopbasket from '../pages/Shopbasket/Shopbasket';
import Alcstyletest from '../pages/Alcstyletest';
import Map from '../pages/Map/Map';

function Main({ handleLogin }) {
    return (
        <>
            <div>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/mainpage" element={<Mainpage />} />
                    <Route path="/detail" element={<Detail />} />
                    <Route
                        path="/login"
                        element={<Login handleLogin={handleLogin} />}
                    />
                    <Route path="/join" element={<Join />} />
                    <Route path="/joinform" element={<JoinForm />} />
                    <Route path="/mypage" element={<Mypage />} />
                    <Route
                        path="/customerpage"
                        element={<Customerpage />}
                    />
                    <Route path="/notice" element={<Notice />} />
                    <Route path="/searchresult" element={<Searchpage />} />
                    <Route
                        path="/simpleinquiry"
                        element={<Simpleinquiry />}
                    />
                    <Route path="/orderend" element={<Orderend />} />
                    <Route path="/eventboard" element={<Eventboard />} />
                    <Route path="/findid" element={<FindId />} />
                    <Route
                        path="/findpassword"
                        element={<FindPassword />}
                    />
                    <Route path="/faq" element={<FAQ />} />
                    <Route path="/createorder" element={<CreateOrder />} />
                    <Route path="/shopbasket" element={<Shopbasket />} />
                    <Route
                        path="/alcstyletest"
                        element={<Alcstyletest />}
                    />
                    <Route path="/map" element={<Map />} />
 {/*                   <Route path="/adminpage/:data" element={<Adminpage />}/>
                    <Route path="/usermodify" element={<UserModify />} />*/}
                </Routes>
            </div>k
        </>
    );
}

export default Main;