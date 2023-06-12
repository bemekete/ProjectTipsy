import React from 'react';
import '../../styles/Map.scss';
import MapComponent from './MapComponent';

function Map() {
    return (
        <>
            <div id="mapWrap">
                <div class="mapContainer">
                    <div>
                        <div class="directions">
                            <h1>찾아오시는길</h1>
                        </div>
                        <MapComponent />
                        <div class="address_information">
                            <div class="address_phone">
                                <div>
                                    <img
                                        src={require('../../assets/map_img/map_adress.png')}
                                        alt="1"
                                    />
                                </div>
                                <div class="address_text">
                                    <p>ADDRESS</p>
                                    <p>경기도 성남시 분당구 돌마로 47 5층</p>
                                </div>
                            </div>
                            <div class="address_phone">
                                <div>
                                    <img
                                        src={require('../../assets/map_img//map_phone.png')}
                                        alt="2"
                                    />
                                </div>
                                <div class="address_text">
                                    <p>TEL</p>
                                    <p>031-712-7447</p>
                                </div>
                            </div>
                            <div class="address_phone">
                                <div>
                                    <img
                                        src={require('../../assets/map_img/map_fax2.png')}
                                        alt="3"
                                    />
                                </div>
                                <div class="address_text">
                                    <p>FAX</p>
                                    <p>031-711-8448</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="transportation">
                        <table>
                            <tbody>
                                <tr>
                                    <th>지하철</th>
                                    <td>
                                        신분당, 수인분당 / 미금역 6번출구, 약
                                        112m
                                    </td>
                                </tr>
                                <tr>
                                    <th>버스</th>
                                    <td>
                                        <p class="bus_tag1">일반</p>
                                        250, 310, 380, 700-2, 720-1 <br />
                                        <p class="bus_tag2">마을</p>
                                        11, 14, 15, 16, 17(미금역-동천역), 32,
                                        5(상현지구대,금호5단지-미금역,2001아울렛),
                                        7(보바스기념병원-서울대병원) <br />
                                        <p class="bus_tag3">직행</p>
                                        1241
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Map;
