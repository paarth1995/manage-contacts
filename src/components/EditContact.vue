<template>
    <v-container grid-list-md text-xs-center class="mt-5">
        <v-layout justify-center row wrap>
            <v-flex md6 xs12>
                <v-card class="px-5">
                    <v-form ref="form" v-model="valid" lazy-validation>
                        <v-text-field clearable class="pt-3" solo v-model="name" :rules="nameRules"></v-text-field>
                        <v-text-field clearable solo v-model="age"></v-text-field>
                        <v-text-field clearable solo v-model="phone"></v-text-field>
                        <v-text-field clearable solo v-model="email" :rules="emailRules"></v-text-field>
                        <v-btn class="mb-4" @click="updateInfo">Update Contact</v-btn>
                    </v-form>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'EditContact',
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
    methods: {
        updateInfo() {
            this.$router.push('/')
        }
    },
    computed: {
        ...mapGetters({
            getContacts: 'getContacts',
            getName: 'getName',
            getAge: 'getAge',
            getPhone: 'getPhone',
            getEmail: 'getEmail'
        }),
        index(){
            return this.$route.params.index;
        },
        name: {
            get() {
                return this.getName
            },
            set(val) {
                return this.$store.commit('updateName', {
                    name: val,
                    index: this.index
                })
            }
        },
        age: {
            get() {
                return this.getAge
            },
            set(val) {
                return this.$store.commit('updateAge', {
                    age: val,
                    index: this.index
                })
            }
        },
        phone: {
            get() {
                return this.getPhone
        },
            set(val) {
                return this.$store.commit('updatePhone', {
                    phone: val,
                    index: this.index
                })
            }
        },
        email: {
            get() {
                return this.getEmail
        },
            set(val) {
                return this.$store.commit('updateEmail', {
                    email: val,
                    index: this.index
                })
            }
        }
    }
}
</script>