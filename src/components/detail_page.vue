<!--
    참고
    https://apis.map.kakao.com/web/sample/keywordList/ 
    chat gpt
    https://goodteacher.tistory.com/432    
-->
<template>
    <v-container fluid>
        <div class="map_wrap">
            <div ref="map" style="width:100%;height:100%;position:relative;overflow:hidden;"></div>
    
            <v-row>
                <v-col cols="6">
                    <v-form @submit.prevent="searchPlaces">
                        <v-row>
                            <v-col cols="8">
                                <v-text-field v-model="keyword" label="키워드" outlined></v-text-field>
                            </v-col>
                            <v-col cols="4">
                                <v-btn type="submit" color="primary">검색</v-btn>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-col>
            </v-row>

            <v-divider class="my-4"></v-divider>
                
            <v-row>
                <v-col cols="6">
                    <v-list>
                        <v-list-item v-for="(place, index) in places" :key="index" @mouseover="displayInfowindow(place)" @mouseout="infowindow.close()">
                            <span :class="'markerbg marker_' + (index + 1)"></span>
                            <v-list-item-content>
                                <v-list-item-title>{{ place.place_name }}</v-list-item-title>
                                <v-list-item-subtitle v-if="place.road_address_name">{{ place.road_address_name }}</v-list-item-subtitle>
                                <v-list-item-subtitle class="jibun gray--text">{{ place.address_name }}</v-list-item-subtitle>
                                <v-list-item-subtitle class="tel">{{ place.phone }}</v-list-item-subtitle>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list>
                    <v-pagination v-model="pagination.current" :length="pagination.last"></v-pagination>
                </v-col>
                <v-col cols="6">
                    <div ref="map" style="width: 100%; height: 500px;"></div>
                </v-col>
            </v-row>
        </div>
    </v-container>
</template>

<style>
.jibun {padding-left:26px;background:url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/places_jibun.png) no-repeat;}
.markerbg {float:left;position:absolute;width:36px; height:37px;margin:10px 0 0 10px;background:url(https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/marker_number_blue.png) no-repeat;}
</style>

<script>
export default {
    data() {
        return {
            map: null,
            places: [],
            keyword: "",
            pagination: null,
            markers: [],
            infowindow: new kakao.maps.InfoWindow({ zIndex: 1 }),
        };
    },
    methods: {
        initMap() {
            const mapContainer = this.$refs.map;
            const mapOption = {
                center: new kakao.maps.LatLng(37.566826, 126.9786567),
                level: 3,
            };
            this.map = new kakao.maps.Map(mapContainer, mapOption);
        },
        searchPlaces() {
            const keyword = this.keyword.trim();
            if (!keyword) {
                alert("키워드를 입력해주세요!");
                return;
            }
            const ps = new kakao.maps.services.Places();
            ps.keywordSearch(keyword, this.placesSearchCB);
        },
        placesSearchCB(data, status, pagination) {
            if (status === kakao.maps.services.Status.OK) {
                this.places = data;
                this.pagination = pagination;
            } else if (status === kakao.maps.services.Status.ZERO_RESULT) {
                alert("검색 결과가 존재하지 않습니다.");
            } else if (status === kakao.maps.services.Status.ERROR) {
                alert("검색 결과 중 오류가 발생했습니다.");
            }
        },
        displayInfowindow(place) {
            const content = `<div style="padding:5px;z-index:1;">${place.place_name}</div>`;
            this.infowindow.setContent(content);
            this.infowindow.open(this.map, place.marker);
        },
        removeMarker() {
            for (let i = 0; i < this.markers.length; i++) {
                this.markers[i].setMap(null);
            }
            this.markers = [];
        },
        removeAllChildNodes(el) {
            while (el.firstChild) {
                el.removeChild(el.firstChild);
            }
        },
    },
    mounted() {
        /// https://goodteacher.tistory.com/432 참고해서 script삽입
        if(!window.kakao || !window.kakao.maps){
            const script = document.createElement('script')
            script.src = '//dapi.kakao.com/v2/maps/sdk.js?appkey=a94b20af546ccbc16088bd33eaf12dc5&autoload=false&libraries=services'
            script.addEventListener("load",()=>{
                kakao.maps.load(this.initMap)
            })
            document.head.appendChild(script)
        } else{
            this.initMap()
        }
        // this.initMap();
        // this.searchPlaces();
    },
    watch: {
        places() {
            const bounds = new kakao.maps.LatLngBounds();
            this.removeMarker();
            for (let i = 0; i < this.places.length; i++) {
                const place = this.places[i];
                const position = new kakao.maps.LatLng(place.y, place.x);
                const marker = this.addMarker(position, i);
                place.marker = marker;
                bounds.extend(position);
            }
            this.map.setBounds(bounds);
        },
    },
    beforeDestroy() {
        kakao.maps.event.clearListeners(this.map, "mouseout");
        kakao.maps.event.clearListeners(this.map, "mouseover");
    },
};
</script>