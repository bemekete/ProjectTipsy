export default function Shipment() {
    if (1) { // 주문내역 없는 경우
        return (
            <>
                <div className="icon"><img src={require('../../../assets/mypage_img/noun-shipment-1540091.png')} /></div>
                <div>주문 내역이 없습니다.</div>
            </>
        );
    } else { // 주문내역이 존재하는 경우 - 추후 수정
        return null;
    }
}