<template>
  <div class="q-ma-xl text-h3 text-bold text-center col-12">
    섬기는 사람들
  </div>
  <div>
    <div
      v-for="group in peoples"
      :key="group.title"
      class="row"
    >
      <div class="q-mt-xl q-ml-md text-h4 text-bold col-12">
        {{ group.title }}
      </div>
      <div
        v-for="people in group.people"
        :key="people.name"
        class="q-pa-sm col-md-3 col-sm-4 col-xs-10"
      >
        <q-card>
          <q-img
            :src="people.img"
            :ratio="1"
          />
          <q-card-section>
            <div class="text-h5 text-bold">
              {{ people.name }}
            </div>
            <div class="text-subtitle1 text-bold">
              {{ people.title }}
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'PeoplePage',
  components: {

  },
  setup () {
    return {
      peoples: [
        {
          title: '담임 목사',
          people: [
            { name: '곽충환 목사', img: require('../../assets/images/people/1991_paster_kawg.jpg'), title: '담임', etc: '' }
          ]
        },
        {
          title: '교역자',
          people: [
            { name: '유귀귀 목사', img: require('../../assets/images/people/2020_paster_yougigi.jpg'), title: '부목사', etc: '' },
            { name: '김상욱 목사', img: require('../../assets/images/people/2021_paster_kim.jpg'), title: '부목사', etc: '' },
            { name: '송병주 전도사', img: require('../../assets/images/people/2018_edu_songbj.jpg'), title: '교육전도사', etc: '' },
            { name: '정혜연 전도사', img: require('../../assets/images/people/2019_edu_jeonghy.jpg'), title: '교육전도사', etc: '' },
            { name: '송경미 전도사', img: require('../../assets/images/people/2020_edu_songgm.jpg'), title: '교육전도사', etc: '' }
          ]
        },
        {
          title: '장로',
          people: [
            { name: '노춘식 장로', img: require('../../assets/images/people/elder_2006_nohcs.jpg'), title: '장로', etc: '' },
            { name: '김용선 장로', img: require('../../assets/images/people/elder_2011_kimys.jpg'), title: '장로', etc: '' },
            { name: '설양길 장로', img: require('../../assets/images/people/elder_2018_seolyg.jpg'), title: '장로', etc: '' },
            { name: '유영종 장로', img: require('../../assets/images/people/elder_2018_youyg.jpg'), title: '장로', etc: '' }
          ]
        }
      ]
    }
  },
  data () {
    return {
    }
  }
})
</script>

<style>
.testcss {
  background: radial-gradient(circle, #35a2ff 0%, #014a88 100%);
}
.testcss2 {
  background: radial-gradient(circle, #118c3c 0%, #15321f 100%);
}
.testcss2 {
  background: radial-gradient(circle, #856bb8 0%, #35046c 100%);
}
</style>
