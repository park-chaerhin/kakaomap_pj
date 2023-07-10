<template>
    <v-container>
        <v-row>
            위치
            <v-text-field id="s_addr" value="주소검색"></v-text-field>
            <v-btn @click="s_Postcode()">검색</v-btn>
        </v-row>
        <div id="view" style="width:100vw;height: 10vh;display: none;"></div>
        장소이름 <v-text-field></v-text-field>
        설명 <v-textarea variant="outlined"></v-textarea>
        <v-btn type="submit"></v-btn>
    </v-container>
</template>

<script>
export default{
    methods: {
        s_Postcode(){
            //지도표시할 div
            var mapContainer = document.getElementById('view')
            mapOptions = {
                center : new daum.maps.LatLng,
                level: 5
            }

            //지도 생성
            var map = new daum.maps.Map(mapContainer, mapOptions)
            var geocoder = new daum.maps.services.Geocoder()
            var marker = new daum.maps.Marker({
                positon: new daum.maps.LatLng(37.54134, 126.96213),
                map: map
            })

            new daum.Postcode({
                oncomplete: function(data){
                    var addr = data.address;

                    document.getElementById('s_addr').value = addr
                    geocoder.addressSearch(addr, function(results, status){
                        if(status === daum.maps.services.Status.OK){
                            var result = results[0]
                            var coords = new daum.maps.LatLng(result.y, result.x)

                            mapContainer.style.display = 'block'
                            map.relayout()
                            map.setCenter(coords)
                            marker.setPosition(coords)
                        }
                    })
                }
            }).open()
        }
    }
}
</script>