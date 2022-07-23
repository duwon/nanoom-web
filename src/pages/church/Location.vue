<template>
  <div class="q-ma-xl text-h3 text-bold text-center col-12">
    오시는 길
  </div>

  <div class="q-mt-xl col-md-7 col-sm-10 col-xs-12">
    <h2 class="text-h4 text-bold text-center">
      교회 주차 안내
    </h2>
    <hr class="line">
    <div class="text-center q-mt-md text-h6">
      교회 주차장은 장애인, 노약자, 새가족에게 양보합니다.<br>
      송도병원 주차장을 이용 하실 수 있습니다.
    </div>

    <h2 class="q-mt-xl text-h4 text-bold text-center">
      대중교통
    </h2>
    <hr class="line ">
    <div class="text-center q-mt-md row q-gutter-col-md justify-center">
      <q-card class="q-ma-md col-md-5 col-sm-5 col-xs-11">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">
            지하철
          </div>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <div class="text-h6">
            버티고개역 (6호선)
          </div>
          <div class="text-subtitle1">
            1번 출구 도보 5분
          </div>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <div class="text-h6">
            약수역 (3호선)
          </div>
          <div class="text-subtitle1">
            8번 출구 도보 7분
          </div>
        </q-card-section>
      </q-card>
      <q-card class="q-ma-md col-md-5 col-sm-5 col-xs-11">
        <q-card-section class="bg-primary text-white">
          <div class="text-h6">
            버스
          </div>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <div class="text-h6">
            송도병원앞(02197) 신당동 방향(84m)
          </div>
          <div class="text-subtitle1">
            간선 142, 144, N13(심야), N72(심야) <br>
            지선 6211
          </div>
        </q-card-section>

        <q-separator />

        <q-card-section>
          <div class="text-h6">
            송도병원앞(02198) 한남동 방향(112m)
          </div>
          <div class="text-subtitle1">
            간선 142, 144, N13(심야), N72(심야) <br>
            지선 6211
          </div>
        </q-card-section>
      </q-card>
    </div>
  </div>

  <div class="q-mt-xl col-md-7 col-sm-10 col-xs-12">
    <h2 class="q-mt-md text-h4 text-bold text-center">
      지도
    </h2>
    <hr class="line ">
    <location class="q-mt-xl" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import location from 'src/components/DaumMapComponent.vue'

export default defineComponent({
  name: 'LocationPage',
  components: {
    location
  },
  setup () {
    return {
    }
  },
  data () {
    return {
    }
  }
})
</script>

<style>

hr.line {
  float: center;
  width: 80px;
  border: 0;
  height: 2px;
  background: #9f2323;
}
</style>
