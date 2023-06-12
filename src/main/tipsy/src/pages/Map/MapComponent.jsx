import React, { useEffect } from 'react';

const { kakao } = window;
function MapComponent() {
    useEffect(() => {
        var container = document.getElementById('map'); //지도를 담을 영역의 DOM 레퍼런스
        var options = {
            //지도를 생성할 때 필요한 기본 옵션
            center: new kakao.maps.LatLng(37.3496888, 127.1069946), //지도의 중심좌표.
            level: 3, //지도의 레벨(확대, 축소 정도)
        };
        var map = new kakao.maps.Map(container, options); //지도 생성 및 객체 리턴
        // 마커가 표시될 위치입니다
        var markerPosition = new kakao.maps.LatLng(37.3496888, 127.1069946);

        // 마커를 생성합니다
        var marker = new kakao.maps.Marker({
            position: markerPosition,
        });

        // 마커가 지도 위에 표시되도록 설정합니다
        marker.setMap(map);

        // 일반 지도와 스카이뷰로 지도 타입을 전환할 수 있는 지도타입 컨트롤을 생성합니다
        let mapTypeControl = new kakao.maps.MapTypeControl();

        // 지도에 컨트롤을 추가해야 지도위에 표시됩니다
        // kakao.maps.ControlPosition은 컨트롤이 표시될 위치를 정의하는데 TOPRIGHT는 오른쪽 위를 의미합니다
        map.addControl(mapTypeControl, kakao.maps.ControlPosition.TOPRIGHT);

        // 지도 확대 축소를 제어할 수 있는  줌 컨트롤을 생성합니다
        let zoomControl = new kakao.maps.ZoomControl();
        map.addControl(zoomControl, kakao.maps.ControlPosition.RIGHT);

        let iwContent =
                '<div style="padding:5px;"><p style="font-weight: bold; font-size: 25px; margin-bottom: 10px">Tipsy</p><p style="margin-bottom: 5px;">경기도 성남시 분당구 돌마로 46 5층</p><a href="https://map.kakao.com/link/map/Tipsy,37.3503814,127.1072135" style="color:blue; font-size: 15px;" target="_blank">큰지도보기</a> <a href="https://map.kakao.com/link/to/Tipsy,37.3503814,127.1072135" style="color:blue; font-size: 15px;" target="_blank">길찾기</a></div>',
            iwPosition = new kakao.maps.LatLng(37.3496888, 127.1069946); //인포윈도우 표시 위치입니다

        // 인포윈도우를 생성합니다
        let infowindow = new kakao.maps.InfoWindow({
            position: iwPosition,
            content: iwContent,
        });

        // 마커 위에 인포윈도우를 표시합니다. 두번째 파라미터인 marker를 넣어주지 않으면 지도 위에 표시됩니다
        infowindow.open(map, marker);
    }, []);

    return (
        <>
            <div id="map"></div>
        </>
    );
}

export default MapComponent;
