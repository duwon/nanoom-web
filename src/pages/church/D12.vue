<template>
  <div class="q-ma-xl text-h3 text-bold text-center col-12">
    제자훈련
  </div>
  <div
    class="q-ma-md col-md-7 col-sm-10 col-xs-12"
    style="max-width:1024px;"
  >
    <div class="q-ma-md justify-center row">
      <q-img
        :src="require('src/assets/images/d12/d12Img.png')"
        style="max-width: 500px"
      />
    </div>

    <q-card
      v-for="list in d12Content"
      :key="list.step"
      class="q-ma-md"
    >
      <q-card-section
        class="text-h5 text-bold"
        flat
      >
        {{ list.step }} - {{ list.title }}
      </q-card-section>
      <q-separator
        dark
        inset
      />
      <q-card-section class="text-h6">
        {{ list.des }}
      </q-card-section>
    </q-card>
  </div>

  <q-card
    padding
    class="q-pa-md text-h5 q-ma-lg col-md-7 col-sm-10 col-xs-12 text-center"
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
    <div class="row justify-center">
      <div class="row q-mt-xl">
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
      <div class="row q-mt-xl">
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
      <div class="row q-mt-xl">
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
  </q-card>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

const d12Content = [
  { step: '1단계', title: '전도', des: '전도소그룹 열린모임은 12주로 진행되며 3~4명이 팀을 이루어 한 지역을 거점으로 하여 누룩과 겨자씨처럼 그 지역을 장악해 가는 소그룹 침투전도, 능력전도, 관계전도입니다. 주님과 사도바울의 전도방법이었으며 21세기 포스트모던시대의 전도대안입니다. ' },
  { step: '2단계', title: '정착', des: '새가족 섬김이 사역은 교회에 처음 온 새가족이 잘 정착할 수 있도록 돕는 사역이며, 전도와 양육의 연결 과정입니다. ' },
  { step: '3단계', title: '양육', des: '양육반은 총 12주 과정으로 내면의 쓴뿌리와 견고한 진을 파하는 1일 전인적 치유수양회를 통해 영육의 치유와 회복을, 양육의 기쁨에는 구원의 확신 등 기본 확신과 묵상의 시간(Q,T)등으로 신앙의 기초를 다지는 동시에 성령세례(충만)을 경험합니다. 또한 은사발견세미나를 통해 주신 은사를 발견하여 기쁨으로 섬길 수 있게 합니다. 양육반은 하나님의 자녀로서의 자기 정체성을 확립하며 말씀과 성령이 충만한 일꾼이 되도록 그 기초를 다지는 양육과정입니다. ' },
  { step: '4단계', title: '제자훈련', des: '그리스도의 주재권과 제자로의 부르심을 깨닫고 스승과 같은 말, 같은 마음, 같은 뜻, 같은 열매를 맺으며 그리스도의 장성한 분량에 이르기 위해 자신을 포기하며 복종하는 헌신된 제자와 열린모임 인도자로 훈련하는 제자대학 1학기 과정입니다. ' },
  { step: '5단계', title: '군사훈련', des: '자신의 사생활에 매이지 않는 군사, 주님의 명령이라면 생명도 아까워 하지 않는 군사, 비록 힘들고 어려운 일이 생긴다 할지라도 사명을 위해 초지일관 달려갈 수 있는 그리스도의 군사 셀리더로 훈련하는 제자대학 2학기 과정입니다. ' },
  { step: '6단계', title: '재생산', des: '자신이 셀리더가 되어 가정, 직장, 캠퍼스 등 삶의 현장으로 파송받아 또 다른 셀리더를 세우는 초대교회 사도와 같은 재생산 사역자의 삶을 살도록 훈련하는 제자대학 3학기 과정입니다. ' }
]

export default defineComponent({
  name: 'D12Page',
  components: {

  },
  setup () {
    return {
      d12Content
    }
  },
  data () {
    return {
    }
  }
})
</script>
