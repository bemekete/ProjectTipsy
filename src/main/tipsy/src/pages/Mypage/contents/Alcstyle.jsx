export default function Alcstyle() {

    if (1) { // 테스트 실행하지 않은 경우
        return (
            <>
                <div className="icon"><img src={require('../../../assets/mypage_img/noun-style-4384241.png')} /></div>
                <div>테스트 결과가 없습니다.</div>
                <button>그거뭐냐</button>
                <a href="#">그거뭐냐</a>
            </>
        );
    } else { // 테스트 결과 존재하는 경우 - 추후 수정
        return null;
    }
}