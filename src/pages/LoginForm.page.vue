<template>
  <n-card>
    <n-tabs
      class="card-tabs"
      default-value="signin"
      size="large"
      animated
      pane-wrapper-style="margin: 0 -4px"
      pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
    >
      <n-tab-pane name="Connexion" tab="Connexion">
        <n-form>
          <n-form-item-row label="Email">
            <n-input v-model:value="email" placeholder="Entrez votre email"/>
          </n-form-item-row>
          <n-form-item-row label="Mot de passe">
            <n-input type="password" v-model:value="mdp" placeholder="Entrez votre mot de passe"/>
          </n-form-item-row>
        </n-form>
        <n-button type="primary" block secondary strong @click="Login">
          Connexion
        </n-button>
      </n-tab-pane>

      <n-tab-pane name="Inscription" tab="Inscription">
        <n-form>
          <n-form-item-row label="Email">
            <n-input v-model:value="registerEmail" placeholder="Entrez votre email"/>
          </n-form-item-row>
          <n-form-item-row label="Mot de passe">
            <n-input type="password" v-model:value="registerMdp" placeholder="Entrez votre mot de passe"/>
          </n-form-item-row>
          <n-form-item-row label="Valider mot de passe">
            <n-input type="password" v-model:value="confirmMdp" placeholder="Confirmez votre mot de passe"/>
          </n-form-item-row>
        </n-form>
        <n-button type="primary" block secondary strong @click="Create">
          Inscription
        </n-button>
      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<script setup>
import { ref } from 'vue';
import { loginUser, createUser } from './../store/User.store.ts';
import {useRouter} from 'vue-router'

const router = useRouter();

const email = ref('');
const mdp = ref('');
const registerEmail = ref('');
const registerMdp = ref('');
const confirmMdp = ref('');

const Login = async () => {
    try {
        const response = await loginUser({
            email: email.value,
            password: mdp.value
        });
        console.log(response);
        const TOKEN = response.token;
        //const ID = response.user.id;
        const ID = response.id;

        localStorage.token = TOKEN;
        localStorage.id = ID;
        router.push('/deck-builder');
    } catch (error) {
        console.error('Erreur de connexion :', error);
    }
};

const Create = async () => {
    try {
        if (registerMdp.value !== confirmMdp.value) {
            console.error('Les mots de passe ne correspondent pas.');
            return;
        }
        
        const response = await createUser({
            email: registerEmail.value,
            password: registerMdp.value
        });
        console.log('Utilisateur créé :', response);

        window.location.reload();
    } catch (error) {
        console.error('Erreur lors de l’inscription :', error);
    }
};
</script>

<style scoped>
.card-tabs .n-tabs-nav--bar-type {
  padding-left: 4px;
}
button {
  background-color: lightskyblue;
  color: black;
  font-weight: bold;
}
</style>
