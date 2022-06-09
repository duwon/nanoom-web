<template>
  <q-item>
    <q-item-seciton avatar>
      <q-avatar
        color="primary"
        text-color="white"
      >
        {{ item.id }}
      </q-avatar>
    </q-item-seciton>
    <q-item-section>
      <q-item-label>{{ post.title }}</q-item-label>
      <q-item-label
        caption
        lines="1"
      >
        {{ post.content }}
      </q-item-label>
    </q-item-section>

    <q-item-section side>
      <q-icon
        name="chat_bubble"
        color="green"
      />
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue'
import { QueryDocumentSnapshot, DocumentData } from 'firebase/firestore'

const props = defineProps<{
  item: QueryDocumentSnapshot<DocumentData>
}>()
const post = computed(() => props.item.data())
</script>
