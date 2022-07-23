<template>
  <div>
    <div class="content_signin">
      <div class="signin_section">
        <h2 class="signin_title">
          나눔의교회 로그인
        </h2>

        <div class="signin-section">
          <UserLogin />
        </div>

        <div class="hr_or text-center">
          또는
        </div>
        <q-btn
          to="/auth/join"
          class="button_join"
        >
          회원가입하기
        </q-btn>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import UserLogin from 'src/components/auth/LoginComponent.vue'

export default defineComponent({
  name: 'LoginPage',
  components: {
    UserLogin
  },
  setup () {
    return {
    }
  }
})

</script>

<style lang="css" scoped>
.signin_title {
    display: inline-block;
    font-size: 26px;
    font-weight: 300;
    padding: 5px 0;
    margin: 20px 0;
    border-bottom: 1px solid rgb(0, 0, 0);
}

.content_signin .signin-section {
    padding: 15px 0 35px;
    border-bottom: 1px solid rgb(0, 0, 0);
}

.hr_or {
    position: relative;
    top: -7px;
    width: 40px;
    margin: 0 auto;
    background-color: rgb(255, 255, 255);
}

.button_join {
    display: block;
    width: 130px;
    font-size: 14px;
    color: #555;
    margin: 30px auto;
    padding: 13px 20px;
    border: 1px solid #444;
    border-radius: 2px;
}
</style>
