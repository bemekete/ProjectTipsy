import { useParams, Link } from 'react-router-dom';

export default function Category() {
    function onClickCategory(e) {
        const category = document.querySelectorAll('.categoryList li');

        for (let i = 0; i < category.length; i++) {
            category[i].classList.remove('nowpage');
        }
        e.target.parentNode.classList.add('nowpage');
    }

    return (
        <div className="category" id="category">
            <ul className="categoryList">
                <li className="nowpage">
                    <Link
                        to="/mypage/shipment"
                        onClick={(e) => {
                            onClickCategory(e);
                        }}
                    >
                        주문내역
                    </Link>
                </li>
                <li>
                    <Link
                        to="/mypage/postbox"
                        onClick={(e) => {
                            onClickCategory(e);
                        }}
                    >
                        게시글
                    </Link>
                </li>
                <li>
                    <Link
                        to="/mypage/likecon"
                        onClick={(e) => {
                            onClickCategory(e);
                        }}
                    >
                        관심 상품
                    </Link>
                </li>
                <li>
                    <Link
                        to="/mypage/currentcon"
                        onClick={(e) => {
                            onClickCategory(e);
                        }}
                    >
                        최근 본 상품
                    </Link>
                </li>
                <li>
                    <Link
                        to="/mypage/alcstyle"
                        onClick={(e) => {
                            onClickCategory(e);
                        }}
                    >
                        나의 음주 스타일
                    </Link>
                </li>
            </ul>

            <ListContents />
        </div>
    );
}

function ListContents() {
    const { data } = useParams();

    return (
        <div className="listContents">
            {data == 'shipment' && <Shipment />}
            {data == 'postbox' && <Postbox />}
            {data == 'likecon' && <Likecon />}
            {data == 'currentcon' && <Currentcon />}
            {data == 'alcstyle' && <Alcstyle />}
        </div>
    );

    // 주문배송
    function Shipment() {
        if (1) {
            // 주문내역 없는 경우
            return (
                <>
                    <div className="icon">
                        <img
                            src={require('../../assets/mypage_img/noun-shipment-1540091.png')}
                        />
                    </div>
                    <div>주문 내역이 없습니다.</div>
                </>
            );
        } else {
            // 주문내역이 존재하는 경우 - 추후 수정
            return null;
        }
    }

    // 게시물
    function Postbox() {
        if (1) {
            // 게시글 없는 경우
            return (
                <>
                    <div className="icon">
                        <img
                            src={require('../../assets/mypage_img/noun-browser-552736.png')}
                        />
                    </div>
                    <div>작성한 게시물이 없습니다.</div>
                </>
            );
        } else {
            // 게시글 존재하는 경우 - 추후 수정
            return null;
        }
    }

    // 찜한 상품
    function Likecon() {
        if (1) {
            // 찜한 상품 없는 경우
            return (
                <>
                    <div className="icon">
                        <img
                            src={require('../../assets/mypage_img/noun-heart-10024.png')}
                        />
                    </div>
                    <div>찜한 상품이 없습니다.</div>
                </>
            );
        } else {
            // 찜한 상품 존재하는 경우 - 추후 수정
            return null;
        }
    }

    // 최근 본 상품
    function Currentcon() {
        if (1) {
            // 최근 본 상품이 없는 경우
            return (
                <>
                    <div className="icon">
                        <img
                            src={require('../../assets/mypage_img/noun-produce-2823265.png')}
                        />
                    </div>
                    <div>최근 본 상품이 없습니다.</div>
                </>
            );
        } else {
            // 최근 본 상품이 존재하는 경우 - 추후 수정
            return null;
        }
    }

    // 나의 음주스타일
    function Alcstyle() {
        if (1) {
            // 테스트 실행하지 않은 경우
            return (
                <>
                    <div className="icon">
                        <img
                            src={require('../../assets/mypage_img/noun-style-4384241.png')}
                        />
                    </div>
                    <div>테스트 결과가 없습니다.</div>
                    <button>그거뭐냐</button>
                    <Link to="#">그거뭐냐</Link>
                </>
            );
        } else {
            // 테스트 결과 존재하는 경우 - 추후 수정
            return null;
        }
    }
}
