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
            { name: '곽충환 목사', img: 'https://placeimg.com/400/500/people', title: '담임', etc: '' }
          ]
        },
        {
          title: '교역자',
          people: [
            { name: '곽충환 목사', img: 'https://placeimg.com/400/500/any', title: '부목사', etc: '' },
            { name: '곽충환 목사', img: 'https://placeimg.com/400/500/animals', title: '부목사', etc: '' },
            { name: '곽충환 목사', img: 'https://placeimg.com/400/500/nature', title: '교육전도사', etc: '' },
            { name: '곽충환 목사', img: 'https://placeimg.com/400/500/tech', title: '교육전도사', etc: '' },
            { name: '곽충환 목사', img: 'https://placeimg.com/400/500/sepia', title: '교육전도사', etc: '' }
          ]
        },
        {
          title: '장로',
          people: [
            { name: '곽충환 목사', img: 'https://placeimg.com/400/500/any', title: '부목사', etc: '' },
            { name: '곽충환 목사', img: 'https://placeimg.com/400/500/animals', title: '부목사', etc: '' },
            { name: '곽충환 목사', img: 'https://placeimg.com/400/500/nature', title: '교육전도사', etc: '' },
            { name: '곽충환 목사', img: 'https://placeimg.com/400/500/tech', title: '교육전도사', etc: '' }
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
