<template>
  <div
    id="map"
    style="width:100%;height:300px;"
  />
</template>

<script>
export default {
  name: 'DaumMapComponent',
  mounted () {
    window.kakao && window.kakao.maps
      ? this.initMap()
      : this.addKakaoMapScript()
  },
  methods: {
    addKakaoMapScript () {
      const script = document.createElement('script')
      /* global kakao */
      script.onload = () => kakao.maps.load(this.initMap)
      script.src =
        '//dapi.kakao.com/v2/maps/sdk.js?autoload=false&appkey=3bf79c03ab7209a17ca4c8c81ee428b3'
      document.head.appendChild(script)
    },
    initMap () {
      const container = document.getElementById('map') // 지도를 담을 영역의 DOM 레퍼런스
      const options = {
        // 지도를 생성할 때 필요한 기본 옵션
        center: new kakao.maps.LatLng(37.55099, 127.007389), // 지도의 중심좌표.
        level: 4 // 지도의 레벨(확대, 축소 정도)
      }
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const map = new kakao.maps.Map(container, options) // 지도 생성 및 객체 리턴

      // 마커가 표시될 위치입니다
      const markerPosition = new kakao.maps.LatLng(37.55099, 127.007389)

      // 마커를 생성합니다
      const marker = new kakao.maps.Marker({
        position: markerPosition
      })

      // 마커가 지도 위에 표시되도록 설정합니다
      marker.setMap(map)

      // 커스텀 오버레이에 표출될 내용으로 HTML 문자열이나 document element가 가능합니다
      const content = '<div class="customoverlay">' +
    '  <a href="https://map.kakao.com/link/map/23881545" target="_blank">' +
    '    <span class="title">대한예수교장로회<br/>나눔의교회</span>' +
    '  </a>' +
    '</div>'

      // 커스텀 오버레이가 표시될 위치입니다
      const position = new kakao.maps.LatLng(37.55099, 127.007389)

      // 커스텀 오버레이를 생성합니다
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const customOverlay = new kakao.maps.CustomOverlay({
        map,
        position,
        content,
        yAnchor: 1
      })
    }
  }
}
</script>

<style>
.customoverlay {position:relative;bottom:50px;border-radius:6px;border: 1px solid #ccc;border-bottom:2px solid #ddd;float:left;}
.customoverlay:nth-of-type(n) {border:0; box-shadow:0px 1px 2px #888;}
.customoverlay a {display:block;text-decoration:none;color:#000;text-align:center;border-radius:6px;font-size:14px;font-weight:bold;overflow:hidden;background: #d95050;background: #d95050 url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png) no-repeat right 14px center;}
.customoverlay .title {display:block;text-align:center;background:#fff;margin-right:35px;padding:10px 15px;font-size:14px;font-weight:bold;}
.customoverlay:after {content:'';position:absolute;margin-left:-12px;left:50%;bottom:-12px;width:22px;height:12px;background:url('https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png')}
</style>
