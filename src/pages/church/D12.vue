<template>
  <q-page
    padding
    class="text-h5 q-ma-lg "
  >
    <div
      class="q-mb-xl text-h4"
      style="font-family:'batang';"
    >
      우리는 하나님을 기쁘시게 하며, 예수 믿어 하나님 자녀된 행복한 교인으로 다음세대를 세우며, 지역과 세계를 향하여 나눔과 섬김으로 일하는 교회를 이룬다.
    </div>
    <div class="text-bold text-h3 text-blue-7">
      하나님을 <br>기쁘시게 하는
    </div>
    <div class="q-mb-xl">
      <q-btn
        rounded
        size="30px"
        class="q-ma-md"
        color="green-8"
      >
        행복한 교인
      </q-btn>
      <q-btn
        rounded
        size="30px"
        class="q-ma-md"
        color="purple-8"
      >
        일하는 교회
      </q-btn>
    </div>
    <div class="row">
      <div class="row">
        <div>
          <q-btn
            round
            size="45px"
            padding="xl sm"
            label="하나님"
            class="text-white"
            style="background: radial-gradient(circle, #35a2ff 0%, #014a88 100%)"
          />
        </div>

        <div class="column">
          <q-btn
            size="15px"
            class="q-ma-xs"
            rounded
          >
            임 재 예 배
          </q-btn>
          <q-btn
            size="15px"
            class="q-ma-xs"
            rounded
          >
            영 혼 사 랑
          </q-btn>
          <q-btn
            size="15px"
            class="q-ma-xs"
            rounded
          >
            역 동 영 성
          </q-btn>
        </div>
      </div>
      <div class="row">
        <div>
          <q-btn
            round
            size="45px"
            padding="xl"
            label="교회"
            class="text-white"
            style="background: radial-gradient(circle, #118c3c 0%, #15321f 100%)"
          />
        </div>

        <div class="column">
          <q-btn
            size="15px"
            class="q-ma-xs"
            rounded
          >
            영 적 가 족
          </q-btn>
          <q-btn
            size="15px"
            class="q-ma-xs"
            rounded
          >
            성 숙 교 인
          </q-btn>
          <q-btn
            size="15px"
            class="q-ma-xs"
            rounded
          >
            다 음 세 대
          </q-btn>
        </div>
      </div>
      <div class="row">
        <div>
          <q-btn
            round
            size="45px"
            padding="xl"
            label="세상"
            class="text-white"
            style="background: radial-gradient(circle, #856bb8 0%, #35046c 100%)"
          />
        </div>

        <div class="column">
          <q-btn
            size="15px"
            class="q-ma-xs"
            rounded
          >
            지 역 섬 김
          </q-btn>
          <q-btn
            size="15px"
            class="q-ma-xs"
            rounded
          >
            선 한 나 눔
          </q-btn>
          <q-btn
            size="15px"
            class="q-ma-xs"
            rounded
          >
            세 계 선 교
          </q-btn>
        </div>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'D12Page',
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
