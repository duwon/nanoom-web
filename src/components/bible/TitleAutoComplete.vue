<template>
  <div class="q-pa-md">
    <div class="q-gutter-md row">
      <q-select
        v-model="model"
        clearable
        filled
        use-input
        hide-selected
        fill-input
        input-debounce="0"
        :options="options"
        label="성경"
        style="width: 250px; padding-bottom: 32px"
        @filter="filterFn"
      >
        <template #no-option>
          <q-item>
            <q-item-section class="text-grey">
              No results
            </q-item-section>
          </q-item>
        </template>
      </q-select>
    </div>
  </div>
</template>

<script default>
import { ref } from 'vue'

const stringOptions = [
  '창세기',
  '출애굽기',
  '레위기',
  '민수기',
  '신명기',
  '여호수아서',
  '사사기',
  '룻기',
  '사무엘상',
  '사무엘하',
  '열왕기상',
  '열왕기하',
  '역대기상',
  '역대기하',
  '에스라서',
  '느헤미야서',
  '에스더서',
  '욥기',
  '시편',
  '잠언',
  '전도서',
  '아가',
  '이사야서',
  '예레미야서',
  '예레미야애가',
  '에스겔서',
  '다니엘서',
  '호세아서',
  '요엘서',
  '아모스서',
  '오바댜서',
  '요나서',
  '미가',
  '나훔서',
  '하박국서',
  '스바냐서',
  '학개서',
  '스가랴서',
  '말라기',
  '마태복음',
  '마가복음',
  '누가복음',
  '요한복음',
  '사도행전',
  '로마서',
  '고린도전서',
  '고린도후서',
  '갈라디아서',
  '에베소서',
  '빌립보서',
  '골로새서',
  '데살로니가전서',
  '데살로니가후서',
  '디모데전서',
  '디모데후서',
  '디도서',
  '빌레몬서',
  '히브리서',
  '야고보서',
  '베드로전서',
  '베드로후서',
  '요한1서',
  '요한2서',
  '요한3서',
  '유다서',
  '요한계시록',
  'google'

]

export default {
  setup () {
    const options = ref(stringOptions)
    return {
      model: ref(null),
      options,

      // eslint-disable-next-line @typescript-eslint/ban-types, @typescript-eslint/no-unused-vars
      filterFn (val, update, abort) {
        // if (val.length < 1) {
        //  abort()
        //  return
        // }

        update(() => {
          options.value = stringOptions.filter(v => v.search(val) > -1)
          console.log(val)
        })
      }

    }
  }
}
</script>
