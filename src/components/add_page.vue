<template>
    <v-container>
        <v-toolbar flat color="blue">
            <v-toolbar-title>
                    <span class="mx-auto">화장실 추가</span>
            </v-toolbar-title>
        </v-toolbar>
        <v-row>
            <v-col cols="12" sm="6">
                <v-text-field label="주소"></v-text-field>
                <v-btn>검색</v-btn>
            </v-col>
            <v-col cols="12" sm="6">
                <v-text-field label="장소이름"></v-text-field>
            </v-col>
            <v-col cols="12" sm="6">
                <v-textarea label="설명"></v-textarea>
            </v-col>
            <v-col cols="12">
                <v-checkbox label="male" value="male"></v-checkbox>
                <v-checkbox label="female" value="female"></v-checkbox>
            </v-col>
            <v-col cols="12">
                <v-btn type="submit">등록</v-btn>
            </v-col>
        </v-row>
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