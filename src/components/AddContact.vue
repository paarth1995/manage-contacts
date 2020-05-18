<template>
  <v-container grid-list-md text-xs-center>
    <v-layout justify-center row wrap>
      <v-flex md6 xs12>
        <v-card class="px-5">
          <v-form ref="form" v-model="valid" lazy-validation>
            <v-text-field clearable class="pt-3" solo v-model="name" :rules="nameRules" placeholder="Enter a Name"></v-text-field>
            <v-text-field clearable solo v-model="age" placeholder="Enter Age"></v-text-field>
            <v-text-field clearable solo v-model="phone" placeholder="Enter Phone"></v-text-field>
            <v-text-field clearable solo v-model="email" :rules="emailRules" placeholder="Enter Email"></v-text-field>
            <v-btn class="mb-4" @click="addNewContact">Add New Contact</v-btn>
          </v-form>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import {mapGetters} from 'vuex';
export default {
  name: 'AddContact',
  beforeRouteLeave (to, from, next) {
    this.$store.commit('resetForm')
    next()
  },
  data() {
    return {
      valid: false,
      nameRules: [
      v => !!v || 'Name is required',
      v => (v && v.length <= 10) || 'Name must be less than 10 characters'
      ], 
      emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+/.test(v) || 'E-mail must be valid'
    ],
    }
  },
  computed: {
    ...mapGetters({
       getName: 'getName',
       getAge: 'getAge',
       getPhone: 'getPhone',
       getEmail: 'getEmail'
    }),
    name: {
      get() {
        return this.getName
      },
      set(val) {
        return this.$store.commit('setName', val)
      }
    },
    age: {
      get() {
        return this.getAge
      },
      set(val) {
        return this.$store.commit('setAge', val)
      }
    },
    phone: {
      get() {
        return this.getPhone
      },
      set(val) {
        return this.$store.commit('setPhone', val)
      }
    },
    email: {
      get() {
        return this.getEmail
      },
      set(val) {
        return this.$store.commit('setEmail', val)
      }
    }
  },
  methods: {
    addNewContact() {
      if(this.valid && this.getName !== '' && this.getAge !== '' && this.getPhone !== '' && this.getEmail !== '') {
        this.$store.commit('addContact');
        this.$router.push('/')
      }
    }
  }
}
</script>

