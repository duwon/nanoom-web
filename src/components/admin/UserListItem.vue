<template>
  <q-item>
    <q-item-section
      avatar
      top
      class="gt-xs"
    >
      <q-icon
        name="account_tree"
        color="black"
        size="34px"
      />
    </q-item-section>

    <q-item-section
      top
      style="min-width: 50px"
    >
      <q-icon
        class="xs"
        name="account_tree"
        color="black"
        size="34px"
      />
      <q-item-label class="q-mt-sm">
        {{ user.displayName }}
      </q-item-label>
    </q-item-section>

    <q-item-section
      top
      style="min-width: 200px"
    >
      <q-item-label>
        <span class="text-weight-medium">{{ user.email }}</span>
      </q-item-label>
      <q-item-label
        caption
        lines="1"
      >
        {{ user.created }}
      </q-item-label>
      <q-item-label
        lines="1"
        class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
      >
        <span
          v-for="groups in user.group"
          :key="groups"
          class="cursor-pointer"
        >
          {{ groups }} &nbsp;

        </span>
      </q-item-label>
    </q-item-section>

    <q-item-section
      top
      side
    >
      <div class="text-grey-8 q-gutter-xs">
        <q-btn
          class="gt-xs"
          size="12px"
          flat
          dense
          round
          icon="edit"
        />
        <q-btn
          class="gt-xs"
          size="12px"
          flat
          dense
          round
          icon="delete"
        />
        <q-btn
          size="12px"
          flat
          dense
          round
          icon="more_vert"
        />
      </div>
    </q-item-section>
  </q-item>
  <q-separator />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'UserListItem',
  components: {

  },
  props: {
    user: {
      type: Object,
      default () {
        return {
          email: '',
          displayName: 'name',
          admin: false,
          group: [
          ],
          created: new Date()
        }
      }
    }
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
