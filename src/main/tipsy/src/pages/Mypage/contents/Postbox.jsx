export default function Postbox() {
    if (1) { // 게시글 없는 경우
        return (
            <>
                <div className="icon"><img src={require('../../../assets/mypage_img/noun-browser-552736.png')} /></div>
                <div>작성한 게시물이 없습니다.</div>
            </>
        );
    } else { // 게시글 존재하는 경우 - 추후 수정
        return null;
    }
}