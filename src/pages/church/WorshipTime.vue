<template>
  <div class="q-ma-xl text-h3 text-bold text-center col-12">
    예배 시간
  </div>
  <div class="q-mt-xl col-md-7 col-sm-10 col-xs-12">
    <q-table
      title="정기 예배"
      :rows="worshipRows"
      :columns="worshipColumns"
      row-key="name"
      hide-bottom
      :rows-per-page-options="[0]"
    />
  </div>

  <div class="q-mt-xl col-md-7 col-sm-10 col-xs-12">
    <q-table
      title="주일학교 예배"
      :rows="eduRows"
      :columns="eduColumns"
      row-key="name"
      hide-bottom
      :rows-per-page-options="[0]"
    />
  </div>
</template>

<script>
const worshipColumns = [
  { name: '구분', align: 'center', label: '구분', field: row => row.name, sortable: false, classes: 'text-h5 ' },
  { name: '시간', align: 'center', label: '시간', field: row => row.time, sortable: false },
  { name: '장소', align: 'center', label: '장소', field: row => row.location, sortable: false }
]

const worshipRows = [
  { name: '주일 오전 1부 예배', time: '주일 오전 9:00', location: '본당' },
  { name: '주일 오전 2부 예배', time: '주일 오전 11:00', location: '본당' },
  { name: '주일 오전 3부 예배', time: '주일 오후 1:00', location: '본당' },
  { name: '주일 오후 예배', time: '주일 오후 3:00', location: '본당' },
  { name: '수요 오전 예배', time: '수요일 오전 10:00', location: '본당' },
  { name: '수요 오후 예배', time: '수요일 오후 7:30', location: '본당' },
  { name: '새벽기도회', time: '매일 새벽 5:20', location: '본당' }
]

const eduColumns = [
  { name: '구분', align: 'center', label: '구분', field: row => row.name, sortable: false },
  { name: '시간', align: 'center', label: '시간', field: row => row.time, sortable: false },
  { name: '장소', align: 'center', label: '장소', field: row => row.location, sortable: false }
]

const eduRows = [
  { name: '영아부', time: '주일 오전 11:00', location: '중1층 영아부실' },
  { name: '유치부', time: '주일 오전 11:00', location: '4층 유치부실' },
  { name: '아동부', time: '주일 오전 11:00', location: '4층 아동부실' },
  { name: '중고등부', time: '주일 오전 11:00', location: '3층 중고등부실' },
  { name: '청년부', time: '주일 오후 1:00', location: '본당' }
]

export default {
  name: 'WorshipTimePage',
  setup () {
    return {
      worshipColumns,
      worshipRows,
      eduColumns,
      eduRows
    }
  }
}
</script>

<style>
  .q-table tbody td {
    font-family: "NotoSans", "Apple SD Gothic Neo", Dotum,"돋움", Verdana, AppleSDGothicNeo, sans-serif;
    color: #2c3e50;
    font-size: 14px;
  }

  .q-table th {
    font-family: "Nanum Square";
    font-size: 14px;
    font-weight: 700;
    background-color: #E9EDF5;
  }

  .q-table__title {
    font-family: "Nanum Square";
    font-size: 23px;
    font-weight: 700;
  }
</style>
