<script setup lang="ts">
import { } from 'vue'
import { auth } from 'src/boot/firebase'
import {
  GoogleAuthProvider,
  signInWithRedirect,
  signOut
} from 'firebase/auth'
import { firebaseUser, useAuth, nanoomUser } from 'src/composables/useAuth'

useAuth()
const provider = new GoogleAuthProvider()

</script>

<template>
  <q-btn
    v-if="nanoomUser"
    round
    color="info"
  >
    <q-avatar
      size="32px"
    >
      <img
        :src="firebaseUser.photoURL || ''"
      >
      <q-menu>
        <q-card>
          <q-list>
            <q-item>
              <q-item-section avatar>
                <q-icon name="mdi-account" />
              </q-item-section>
              <q-item-section>
                <q-item-label>이름</q-item-label>
                <q-item-label caption>
                  {{ nanoomUser?.name }}
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon name="mdi-account" />
              </q-item-section>
              <q-item-section>
                <q-item-label>닉네임</q-item-label>
                <q-item-label caption>
                  {{ firebaseUser.displayName }}
                </q-item-label>
              </q-item-section>
            </q-item>
            <q-item>
              <q-item-section avatar>
                <q-icon name="mdi-email" />
              </q-item-section>
              <q-item-section>
                <q-item-label>이메일</q-item-label>
                <q-item-label caption>
                  {{ firebaseUser.email }}
                </q-item-label>
              </q-item-section>
            </q-item>
          </q-list>
          <q-card-actions
            align="right"
          >
            <q-btn
              icon="mdi-logout"
              label="로그아웃"
              flat
              color="primary"
              @click="signOut(auth)"
            />
          </q-card-actions>
        </q-card>
      </q-menu>
    </q-avatar>
  </q-btn>

  <q-btn
    v-else
    round
    color="info"
  >
    <q-avatar
      icon="mdi-account"
      size="32px"
    >
      <q-menu>
        <q-card align="left">
          <q-card-actions>
            <q-btn
              icon="mdi-login"
              label="로그인"
              flat
              color="primary"
              class="col"
              @click="signInWithRedirect(auth, provider)"
            />
          </q-card-actions>

          <q-card-actions>
            <q-btn
              icon="mdi-account"
              label="회원가입"
              flat
              color="primary"
              class="col"
              to="/user/register"
            />
          </q-card-actions>
        </q-card>
      </q-menu>
    </q-avatar>
  </q-btn>
</template>
