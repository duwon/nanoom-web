<template>
  <div
    class="q-pa-md"
    style="max-width: 350px"
  >
    <q-toolbar class="bg-primary text-white shadow-2">
      <q-toolbar-title>Contacts</q-toolbar-title>
    </q-toolbar>

    <q-list bordered>
      <q-item
        v-for="contact in contacts"
        :key="contact.id"
        v-ripple
        class="q-my-sm"
        clickable
      >
        <q-item-section avatar>
          <q-avatar
            color="primary"
            text-color="white"
          >
            {{ contact.letter }}
          </q-avatar>
        </q-item-section>

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
    </q-list>
  </div>

  <div
    class="q-pa-md"
  >
    <q-toolbar class="bg-primary text-white shadow-2">
      <q-toolbar-title>Post</q-toolbar-title>
    </q-toolbar>
    <q-list>
      <PostListItemComponent
        v-for="item in items"
        :key="item.id"
        :item="item"
      />
    </q-list>
  </div>
  <q-page-sticky
    position="bottom-right"
    :offset="[18, 18]"
  >
    <q-btn
      round
      color="pink"
      icon="mdi-pencil"
      to="/write"
    />
  </q-page-sticky>
</template>

<script defalt lang="ts">
import { ref, defineComponent, onMounted } from 'vue'
import PostListItemComponent from './PostListItem.vue'
import { QueryDocumentSnapshot } from 'firebase/firestore'
import { Post, getPosts } from 'src/models/Post'

export default defineComponent({
  name: 'PostListComponet',
  components: { PostListItemComponent },
  setup () {
    // 변수 정의
    const items = ref<QueryDocumentSnapshot<Post>[]>([])

    const getData = async () => {
      // const q = query(collection(db, 'posts'))
      // const querySnapshot = await getDocs(q)
      // items.value = querySnapshot.docs
      // querySnapshot.forEach((doc) => {
      //  // doc.data() is never undefined for query doc snapshots
      //  console.log(doc.id, ' => ', doc.data())
      // })

      const querySnapshot = await getPosts()
      items.value = querySnapshot.docs
    }

    onMounted(getData)

    return {
      // 리턴 할 변수
      items

    }
  }
})
</script>
