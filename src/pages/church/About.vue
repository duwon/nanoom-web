<template>
  <div class="q-ma-xl text-h3 text-bold text-center col-12">
    교회 소개
  </div>
  <div
    class="q-mt-xl col-md-7 col-sm-10 col-xs-12 "
    style="max-width: 1024px;"
  >
    <!-- 제목부분 -->
    <h2 class="text-h4 text-bold text-center">
      교회창립
    </h2>
    <hr class="line ">
    <div class="text-grey-7 text-h6 text-center q-mt-xl">
      우리교회는 '하나님의 사랑을 함께 나누고 싶어' 1991년 10월 27일 종교개혁주일에 창립한 대한예수교 나눔의교회 장로회(통합) 소속 교회 입니다. <br><br>
      <q-img
        :src="require('../../assets/images/about/nanoomFull.jpg')"
        style="width: 100%;"
      />
    </div>
    <br><br>

    <!-- 제목부분 -->
    <h2 class="text-h4 text-bold text-center">
      2022년 표어
    </h2>
    <hr class="line ">

    <!-- 서브 시작 -->

    <div class="q-mt-md">
      <div class="row ">
        <div class="col-md-12  ">
          <h2 class="text-h4  text-bold text-center">
            복음으로, 교회를 새롭게 세상을 이롭게!
          </h2>
          <img
            :src="require('../../assets/images/about/watchword_2020.jpg')"
            style="width: 100%;"
          >
        </div>

        <p class="q-mb-md" />

        <div
          v-if="false"
          class="fusectionvision"
        >
          <div class="circle-box2">
            <h5 class="text-bold txt-h5">
              예배의 감격이 있는 교회
            </h5>
            <p class="text-h7">
              강한 믿음의 용사, 상한 영혼을 회복
            </p>
          </div><!-- end circle box -->

          <div class="circle-box1">
            <h5 class="text-bold txt-h5">
              말씀이 살아있는 교회
            </h5>
            <p class="text-h7">
              선한 일을 행할 수 있는 능력 향상
            </p>
          </div><!-- end circle box -->

          <div class="circle-box2">
            <h5 class="text-bold txt-h5">
              가정에 행복을 주는 교회
            </h5>
            <p class="text-h7">
              가정이 작은 천국이 되도록 가정을 회복
            </p>
          </div><!-- end circle box -->

          <div class="circle-box1">
            <h5 class="text-bold txt-h5">
              봉사와 나눔이 있는 교회
            </h5>
            <p class="text-h7">
              지역과 세계를 향해 나눔과 섬김
            </p>
          </div><!-- end circle box -->

          <div class="circle-box2">
            <h5 class="text-bold txt-h5">
              다음세대 희망 있는 교회
            </h5>
            <p class="text-h7">
              아이들의 찬양과 기도 소리가 끊이지 않게
            </p>
          </div><!-- end circle box -->
        </div>

        <p class="clearfix margin-bottom5" />

        <div class="col-md-4 col-sm-4 q-pa-sm">
          <h4 class="text-h5">
            말씀이 살아있는 교회
          </h4>
          <p class="text-grey-6">
            온전하며, 모든 선한 일을 행할 수 있는 능력을 갖춘 하나님의 사람을 세우기 위해 말씀을 스스로 읽고 묵상하는 Q.T목회를 지향하고 있습니다.
          </p>
        </div><!-- end col -->

        <div class="col-md-4 col-sm-4 q-pa-sm">
          <h4 class="text-h5">
            예배의 감격이 있는 교회
          </h4>
          <p class="text-grey-6">
            상한 영혼을 회복시키며, 강한 믿음의 용사로 거듭나게 하는 영감있는 예배, 즉 성령님의 임재가 있는 예배를 제공하는 것에 역량을 집중하고 있습니다.
          </p>
        </div><!-- end col -->

        <div class="col-md-4 col-sm-4 q-pa-sm">
          <h4 class="text-h5">
            가정에 행복을 주는 교회
          </h4>
          <p class="text-grey-6">
            인격이 형성되며, 지치고 상한 마음이 회복되는 장소인 가정이 작은 천국이 되도록 상한 가정은 회복시키고, 건강한 가정은 더욱 견고히 세우는 노력을 하고 있습니다.
          </p>
        </div><!-- end col -->
      </div>
    </div><!-- end section -->
  </div>

  <section
    class="bg-vision full-width row wrap content-start justify-center "
    :style="{ 'backgroundImage':'url('+require('../../assets/images/about/nanoomWorship.jpg')+')' }"
  >
    <div
      class="col-md-7 col-sm-10 col-xs-12"
      style="max-width:1024px"
    >
      <div class="row">
        <div class="col-12 q-mb-md">
          <div class="text-h3 text-center text-white">
            성도의 10가지 수칙
          </div>
        </div>

        <div
          v-for="rule in rule10"
          :key="rule.num"
          class="col-md-4 col-sm-6 row q-pa-sm q-pt-md"
        >
          <div class="col-md-2">
            <q-btn
              flat
              round
              class="bg-white"
            >
              {{ rule.num }}
            </q-btn>
          </div>
          <div class="col-md-10 q-pl-md">
            <div class="text-white text-h5 q-pb-sm">
              {{ rule.title }}
            </div>
            <div
              class="text-white"
              style="min-height:50px"
            >
              {{ rule.des }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section><!-- end section -->
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const rule10 = [

  { num: '1', title: '주일은 주님의 날', des: ' 주일은 반드시 지킵시다(출 20:10).' },
  { num: '2', title: '십일조는 하나님의 것', des: ' 온전한 십일조를 드립시다(말 3:8-10).' },
  { num: '3', title: '하나님의 말씀은 영혼의 양식', des: '매일 3장씩, 주일은 5장씩 성경을 읽읍시다(딤후 3:1).' },
  { num: '4', title: '기도는 영혼의 호흡', des: ' 쉬지 말고 기도합시다(살전 5:17).' },
  { num: '5', title: '선교는 주님의 지상명령', des: ' 전력을 다하여 전도합시다(행 1:8).' },
  { num: '6', title: '성도는 주님의 증인', des: ' 행함으로 증거합시다(사 43:10).' },
  { num: '7', title: '감사는 은혜의 열매', des: ' 범사에 감사합시다(살전 5:18).' },
  { num: '8', title: '화목은 성도의 단결', des: ' 서로 사랑하기에 힘씁시다(마 5:43-47).' },
  { num: '9', title: '봉사는 사랑의 실천', des: ' 내가 먼저 앞장섭시다(행 2:44-47).' },
  { num: '10', title: '가정은 지상의 천국', des: ' 가정예배를 꼭 드립시다(행 10:2).' }

]
export default defineComponent({
  name: 'AboutPage',
  components: {

  },
  setup () {
    return {
      rule10
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

.fusectionvision {
  width:100%;
  text-align:center;
}

.fusectionvision .circle-box1 {
  /*float: left;*/
  display:inline-block;
  width: 220px;
  height: 220px;
  padding: 20px 40px 30px 40px;
  text-align: center;
  color: #fff;
  font-weight: 700;
  border-radius: 100%;
  background: #9f2323;
  margin-left: -20px;
}
.fusectionvision .circle-box2 {
  /*float: left;*/
  display:inline-block;
  width: 220px;
  height: 220px;
  padding: 20px 40px 30px 40px;
  text-align: center;
  color: #fff;
  font-weight: 700;
  border-radius: 100%;
  background: #707070;
  margin-left: -20px;
}

.bg-vision {
  padding: 100px 0px 100px 0px;
  position: relative;
  background: #333 url('../../assets/images/about/nanoomWorship.jpg') 50% 0 no-repeat fixed;
}
.bg-vision::before {
  content: "";
  opacity: 1;
  position: absolute;
  background-color: #000;
  top: 0px
}
</style>
