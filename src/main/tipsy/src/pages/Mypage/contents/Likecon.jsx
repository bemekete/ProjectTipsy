export default function Likecon() {
    if (1) { // 찜한 상품 없는 경우
        return (
            <>
                <div className="icon"><img src={require('../../../assets/mypage_img/noun-heart-10024.png')} /></div>
                <div>찜한 상품이 없습니다.</div>
            </>
        );
    } else { // 찜한 상품 존재하는 경우 - 추후 수정
        return null;
    }
}