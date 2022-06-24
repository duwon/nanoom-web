<template>
  <div v-if="displayItem">
    <q-item
      style="min-height: 80px, max-width: 350px"
    >
      <q-item-section>
        <q-item-label
          lines="1"
        >
          {{ user.name }}
        </q-item-label>
        <q-item-label
          caption
          lines="1"
        >
          {{ user.title }}
        </q-item-label>
        <q-item-label
          caption
          lines="1"
        >
          {{ date.formatDate(user.createdAt, 'YYYY-MM-DD HH:mm:ss') }}
        </q-item-label>
        <q-item-label
          caption
        />
      </q-item-section>
    </q-item>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed, ref } from 'vue'
import { date } from 'quasar'
import { QueryDocumentSnapshot } from 'firebase/firestore'
import { UserList } from 'src/models/User'

const props = defineProps<{
  item: QueryDocumentSnapshot<UserList>
}>()

const user = computed(() => props.item.data())

const displayItem = ref(true)

</script>
