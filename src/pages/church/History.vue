<template>
  <div class="q-ma-xl text-h3 text-bold text-center col-12">
    발자취
  </div>
  <div class="q-mt-xl col-md-7 col-sm-10 col-xs-12">
    <q-tabs
      v-model="tab"
      inline-label
      class="bg-grey-6 text-white shadow-2"
    >
      <q-tab
        name="sel1990"
        label="1990년대"
      />
      <q-tab
        name="sel2000"
        label="2000년대"
      />
      <q-tab
        name="sel2010"
        label="2010년대"
      />
      <q-tab
        name="sel2020"
        label="2020년대"
      />
    </q-tabs>

    <q-tab-panels
      v-model="tab"
      animated
      class="bg-grey-1"
    >
      <div
        v-for="tabs in history"
        :key="tabs.name"
      >
        <q-tab-panel
          :name="tabs.name"
        >
          <div class="row wrap">
            <div class="text-h6">
              1991-10-31
            </div>
            <div class="self-center q-pl-md">
              나눔의교회
            </div>
          </div>
        </q-tab-panel>
      </div>
    </q-tab-panels>

    <q-tab-panels
      v-model="tab"
      animated
      class="bg-grey-1"
    >
      <q-tab-panel
        name="sel1990"
      >
        <div class="row wrap">
          <div class="text-h6">
            1991-10-31
          </div>
          <div class="self-center q-pl-md">
            나눔의교회
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel
        name="sel2000"
      >
        <div class="row wrap">
          <div class="text-h6">
            2000-01-01
          </div>
          <div class="self-center q-pl-md">
            나눔의교회
          </div>
        </div>
      </q-tab-panel>

      <q-tab-panel
        name="sel2010"
      >
        <div class="row wrap">
          <div class="text-h6">
            2010-01-01
          </div>
          <div class="self-center q-pl-md">
            나눔의교회
          </div>
        </div>
      </q-tab-panel>
    </q-tab-panels>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

const history = [
  {
    name: 'sel1990',
    history: [
      { date: '1991-10-31', des: '나눔의교회 시작' },
      { date: '1991-10-31', des: '나눔의교회 시작' },
      { date: '1991-10-31', des: '나눔의교회 시작' }
    ]
  },
  {
    name: 'sel2000',
    history: [
      { date: '2000-10-31', des: '나눔의교회 시작' },
      { date: '2000-10-31', des: '나눔의교회 시작' },
      { date: '2000-10-31', des: '나눔의교회 시작' }
    ]
  },
  {
    name: 'sel2010',
    history: [
      { date: '2000-10-31', des: '나눔의교회 시작' },
      { date: '2000-10-31', des: '나눔의교회 시작' },
      { date: '2000-10-31', des: '나눔의교회 시작' }
    ]
  }
]

export default defineComponent({
  name: 'HistoryPage',
  components: {

  },
  setup () {
    return {
      tab: ref('sel2020'),
      history
    }
  },
  data () {
    return {
    }
  }
})
</script>
