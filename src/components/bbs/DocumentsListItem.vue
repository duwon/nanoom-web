<template>
  <q-item
    clickable
    class="row"
  >
    <q-item-section
      v-if="viewCategory"
      avatar
      class="gt-xs col-1"
    >
      {{ contents.category }}
    </q-item-section>

    <q-item-section>
      <q-item-label
        lines="2"
        class="list_subject"
      >
        <a
          class="text-weight-medium"
          :href="'board/'+ contents.category + '/' + contents._id"
        > <span class="list_subject"> {{ contents.subject }} </span></a>

        <q-icon
          v-if="contents.isAttachement"
          name="attachment"
          color="grey"
          size="20px"
        />&nbsp;
        <span class="text-orange-7">{{ contents.comments.length }}</span>
      </q-item-label>

      <q-item-label
        lines="1"
        class="q-mt-xs text-body2 text-weight-bold text-primary text-uppercase"
      >
        <span
          v-for="groups in contents.group"
          :key="groups"
          class="cursor-pointer"
        >
          {{ groups }} &nbsp;

        </span>
      </q-item-label>
    </q-item-section>

    <q-item-section class="col-1">
      <q-item-label>
        {{ contents.writer.displayName }}
      </q-item-label>
    </q-item-section>

    <q-item-section class="col-1">
      <q-item-label>
        <span class="text-grey-7">{{ contents.hits }}</span>
      </q-item-label>
    </q-item-section>

    <q-item-section class="col-2">
      <q-item-label>
        {{ date.formatDate(contents.created, 'YY-MM-DD HH:mm:ss') }}
      </q-item-label>
    </q-item-section>

    <q-item-section
      v-if="isAdmin"
      side
      class="gt-sm col-2"
    >
      <div class="text-grey-8 q-gutter-xs">
        <q-btn
          size="12px"
          flat
          dense
          round
          icon="edit"
        />
        <q-btn
          size="12px"
          flat
          dense
          round
          icon="delete"
        />
      </div>
    </q-item-section>
  </q-item>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { date } from 'quasar'

export default defineComponent({
  name: 'UserListItem',
  components: {

  },
  props: {
    contents: {
      type: Object,
      default () {
        return {
          category: '',
          notice: false,
          group: '',
          writer: {
            email: '',
            displayName: ''
          },
          hits: 0,
          isComments: false,
          comments: [],
          subject: '',
          contents: '',
          isAttachment: false,
          attachment: [],
          created: Date.now
        }
      }
    },
    viewCategory: {
      type: Boolean,
      default: false
    },
    isAdmin: {
      type: Boolean,
      default: false
    }
  },
  setup () {
    return {
      date
    }
  },
  data () {
    return {
    }
  }
})
</script>

<style lang="css" scoped>
.list_subject {
    float: left;
    max-width: 320px;
    word-break: break-all;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    margin: 0 5px 0 0;
}

.list_subject a:link, a:visited {
    color: #232F3E;
    text-decoration: none;
    cursor: pointer;
}

.list_subject a:hover, a:active {
    color: #FB8C00;
    text-decoration: none;
    cursor: pointer;
}
</style>
