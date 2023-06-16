export default function Currentcon() {
    if (1) { // 최근 본 상품이 없는 경우
        return (
            <>
                <div className="icon"><img src={require('../../../assets/mypage_img/noun-produce-2823265.png')} /></div>
                <div>최근 본 상품이 없습니다.</div>
            </>
        );
    } else { // 최근 본 상품이 존재하는 경우 - 추후 수정
        return null;
    }
}