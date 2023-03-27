import React, {useEffect} from "react";

export function ProductMap() {
  useEffect(() => {
    const mapContainer = document.getElementsByClassName("map")[0];
    const mapOption = {
      center: new kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    const map = new kakao.maps.Map(mapContainer, mapOption);

    const geocoder = new kakao.maps.services.Geocoder();

    geocoder.addressSearch("제주특별자치도 제주시 첨단로 242", function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        const coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        const marker = new kakao.maps.Marker({
          map: map,
          position: coords,
        });

        const infowindow = new kakao.maps.InfoWindow({
          content: '<div style="width:150px;text-align:center;padding:6px 0;">우리회사</div>',
        });

        infowindow.open(map, marker);

        map.setCenter(coords);
      }
    });
  }, []);

  return <div className="map"></div>;
}
