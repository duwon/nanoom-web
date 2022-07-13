<template>
  <div class="q-ma-xl text-h3 text-bold text-center col-12">
    담임목사
  </div>
  <div
    class="q-mt-xl col-md-7 col-sm-10 col-xs-12 row"
    style="max-width: 1024px;"
  >
    <div class="q-ma-md col-md-3 col-sm-3 col-xs-11 text-center">
      <q-img
        :src="require('../../assets/images/greeting/paster-removebg-preview.png')"
      >
        <div class="absolute-bottom text-h6 text-center">
          담임목사<br>곽충환
        </div>
      </q-img>
    </div>

    <div
      class="q-pa-md col-md-8 col-sm-8 col-xs-12"
      style="font-size:20px; line-height:3rem"
    >
      코로나 19가 일상을 바꾸어 놓은지도 만2년이 지났습니다. 2022년 새해는 코로나 3년째를 맞이합니다.<br>
      그동안 나눔의 교회는 30주년을 지났습니다.<br><br>
      한세대가 지나가는 의미있는 세월이건만,예배 출석과 신앙활동에 많은 제약을 받은 시간을 보냈습니다. 기대하기로는 그동안 기도해 왔던대로 금년부터는 코로나의 위협도 사라지고 다시 신앙과 예배의 회복으로 새힘과 생기를 얻는 시간이 되기를 기원합니다.<br><br>
      이제 31주년을 향해 달려 갑니다.<br>
      지난해 하지 못했던 중직선출, 두날개 시스템, 교육부서 수련회, 성경공부와 식당, 카페 등도 모두 다시 회복되기를 기대합니다. 그러자매, 새롭게 다짐하고 다듬어야 할 일이 많을 것입니다. ‘이 또한 지나갈 것’ 이며 ‘하나님을 사랑하는 자에게 모든 것이 합력하여 선을 이룰 것’입니다.<br><br>
      금년도 표어처럼<br>
      <q-img
        class="q-ml-xl"
        :src="require('../../assets/images/greeting/slogan_2022-removebg-preview.png')"
        style="max-width:250px"
      />
      <br>하는 한 해 되기 바랍니다.<br><br>

      “나눔의교회 잘되고 있습니다!<br>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'GreetingPage',
  components: {

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

</style>
