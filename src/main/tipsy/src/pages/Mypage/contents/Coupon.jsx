export default function Coupon() {
    if (1) { // 쿠폰 없는 경우
        return (
            <>
                <div className="icon"><img src={require('../../../assets/mypage_img/noun-coupon-139423.png')} /></div>
                <div>쿠폰이 없습니다.</div>
            </>
        );
    } else { // 쿠폰 존재하는 경우 - 추후 수정
        return null;
    }
}