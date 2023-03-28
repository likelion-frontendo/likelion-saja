import React, {useCallback, useEffect, useRef} from "react";

const {kakao} = window;

export function ProductMap(props) {
  const kakakoMapRef = useRef({});

  const drawMap = useCallback(
    (address) => {
      const {geocoder, kakaoMap} = kakakoMapRef.current;

      geocoder.addressSearch(address, function (result, status) {
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
    },
    [kakakoMapRef]
  );

  useEffect(() => {
    const container = document.getElementsByClassName("map")[0];
    const options = {center: new kakao.maps.LatLng(35.12, 129.1), level: 3};

    kakakoMapRef.current.kakaoMap = new kakao.maps.Map(container, options);
    kakakoMapRef.current.geocoder = new kakao.maps.services.Geocoder();

    drawMap(props.address);
  }, []);

  useEffect(() => {
    drawMap(props.address);
  }, [drawMap, props.address]);

  return <div className="map"></div>;
}
