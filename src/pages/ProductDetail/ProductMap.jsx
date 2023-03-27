import React, {useEffect, useState} from "react";

const {kakao} = window;

export function ProductMap(props) {
  const [map, setMap] = useState(null);

  useEffect(() => {
    const container = document.getElementsByClassName("map")[0];
    const options = {center: new kakao.maps.LatLng(35.12, 129.1), level: 3};
    const kakaoMap = new kakao.maps.Map(container, options);
    setMap(kakaoMap);

    const geocoder = new kakao.maps.services.Geocoder();
    geocoder.addressSearch(props.address, function (result, status) {
      if (status === kakao.maps.services.Status.OK) {
        let coords = new kakao.maps.LatLng(result[0].y, result[0].x);

        let marker = new kakao.maps.Marker({
          map: kakaoMap,
          position: coords,
        });

        marker.setMap(kakaoMap);
        kakaoMap.setCenter(coords);
      }
    });
  }, []);

  return <div className="map"></div>;
}
