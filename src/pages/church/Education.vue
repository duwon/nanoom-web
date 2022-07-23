<template>
  <edu :edu="eduContent" />
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import edu from 'src/components/church/EducationDisplay.vue'

const infant = {
  subject: '영아부',
  img: 'https://placeimg.com/1000/1000/nature',
  slogan: '표어 또는 주제 - 하나님께 영광을 - ',
  time: '주일 오전 11시',
  location: '중1층 영아부실',
  serving: [
    { title: '지도', name: '송경미 전도사' },
    { title: '부장', name: '김진희 권사' },
    { title: '총무', name: '이선영 집사' },
    { title: '반주', name: '김정현 집사' }
  ],
  activityImg: [
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' }
  ]
}

const kindergarden = {
  subject: '유치부',
  img: require('../../assets/images/edu/kindergarden/main.jpg'),
  slogan: '복음으로 교회를 새롭게 세상을 이롭게',
  time: '주일 오전 11시',
  location: '4층 유치부실',
  serving: [
    { title: '지도', name: '정혜연 전도사' },
    { title: '부장', name: '홍은숙 권사' },
    { title: '총무', name: '구수진 집사' },
    { title: '서기', name: '김미애 집사' },
    { title: '반주', name: '나예은 자매' }
  ],
  activityImg: [
    { title: '활동', src: require('../../assets/images/edu/kindergarden/kindergarden_01.jpg') },
    { title: '활동', src: require('../../assets/images/edu/kindergarden/kindergarden_02.jpg') },
    { title: '활동', src: require('../../assets/images/edu/kindergarden/kindergarden_03.jpg') },
    { title: '활동', src: require('../../assets/images/edu/kindergarden/kindergarden_04.jpg') },
    { title: '활동', src: require('../../assets/images/edu/kindergarden/kindergarden_05.jpg') },
    { title: '활동', src: require('../../assets/images/edu/kindergarden/kindergarden_06.jpg') },
    { title: '활동', src: require('../../assets/images/edu/kindergarden/kindergarden_07.jpg') },
    { title: '활동', src: require('../../assets/images/edu/kindergarden/kindergarden_08.jpg') },
    { title: '활동', src: require('../../assets/images/edu/kindergarden/kindergarden_09.jpg') },
    { title: '활동', src: require('../../assets/images/edu/kindergarden/kindergarden_10.jpg') },
    { title: '활동', src: require('../../assets/images/edu/kindergarden/kindergarden_11.jpg') },
    { title: '활동', src: require('../../assets/images/edu/kindergarden/kindergarden_12.jpg') },
    { title: '활동', src: require('../../assets/images/edu/kindergarden/kindergarden_13.jpg') },
    { title: '활동', src: require('../../assets/images/edu/kindergarden/kindergarden_14.jpg') },
    { title: '활동', src: require('../../assets/images/edu/kindergarden/kindergarden_15.jpg') }

  ]
}

const children = {
  subject: '아동부',
  img: require('../../assets/images/edu/children/main.jpg'),
  slogan: '예수님의 사랑으로 변화되는 아동부',
  time: '주일 오전 11시',
  location: '4층 아동부실',
  serving: [
    { title: '지도', name: '유귀귀 목사' },
    { title: '부장', name: '최종범 안수집사' },
    { title: '총무', name: '박경미 집사' },
    { title: '회계', name: '김석정 집사' },
    { title: '서기', name: '한정옥 집사' },
    { title: '반주', name: '박재현 형제' }
  ],
  activityImg: [
    { title: '활동', src: require('../../assets/images/edu/children/children_117.jpg') },
    { title: '활동', src: require('../../assets/images/edu/children/children_123.jpg') },
    { title: '활동', src: require('../../assets/images/edu/children/children_141.jpg') },
    { title: '활동', src: require('../../assets/images/edu/children/children_128.jpg') },
    { title: '활동', src: require('../../assets/images/edu/children/children_201.jpg') }
  ]
}

const secondary = {
  subject: '중고등부',
  img: 'https://placeimg.com/1000/1000/nature',
  slogan: '표어 또는 주제 - 하나님께 영광을 - ',
  time: '주일 오전 11시',
  location: '3층 중고등부실',
  serving: [
    { title: '지도', name: '송병주 전도사' },
    { title: '부장', name: '이명화 사모' },
    { title: '총무', name: '배경하 집사' },
    { title: '서기', name: '임미애 집사' },
    { title: '회계', name: '박연화 집사' },
    { title: '반주', name: '이예슬, 박서희, 이예찬' }
  ],
  activityImg: [
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' }
  ]
}

const youth = {
  subject: '청년부',
  img: 'https://placeimg.com/1000/1000/nature',
  slogan: '표어 또는 주제 - 하나님께 영광을 - ',
  time: '주일 오후 1시',
  location: '본당',
  serving: [
    { title: '지도', name: '김상욱 목사' },
    { title: '부장', name: '이환 안수집사' },
    { title: '회장', name: '김윤정' },
    { title: '부회장', name: '유주영' },
    { title: '총무', name: '이상빈 정예원' }

  ],
  activityImg: [
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' },
    { title: '1', src: 'https://placeimg.com/500/300/nature' }
  ]
}

export default defineComponent({
  name: 'EducationPage',
  components: {
    edu
  },
  setup () {
    const eduContent = ref(infant)

    return {
      eduContent
    }
  },
  created () {
    // watch the params of the route to fetch the data again
    this.$watch(
      () => this.$route.params,
      () => {
        this.fetchData()
      },
      // fetch the data when the view is created and the data is
      // already being observed
      { immediate: true }
    )
  },
  methods: {
    fetchData () {
      switch (this.$route.params.id) {
        case 'infant':
          this.eduContent = infant
          break

        case 'kindergarden':
          this.eduContent = kindergarden
          break

        case 'children':
          this.eduContent = children
          break

        case 'secondary':
          this.eduContent = secondary
          break

        case 'youth':
          this.eduContent = youth
          break
      }
    }
  }
})

</script>
