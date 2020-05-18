<template>
    <v-toolbar>
        <router-link to="/">
        <v-toolbar-title class="headline font-weight-light white--text pl-3">
           Contact Manager
            </v-toolbar-title>
            </router-link> 
        <v-layout justify-center>
            <v-flex xs9>
                <v-text-field v-model="filterUsers" solo placeholder="Search for a User"></v-text-field>
            </v-flex>
        </v-layout>
        <v-btn v-if="this.$route.name !== 'AddContact'" to="/add" color="pink" dark absolute bottom right fab>
            <v-icon>add</v-icon>
        </v-btn>
        <v-btn v-if="this.$route.name == 'EditContact'" color="pink" dark absolute bottom right fab>
            <v-icon>create</v-icon>
        </v-btn>
    </v-toolbar>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
    name: 'Navbar',
    data() {
        return {
            toggleSearchbar: false
        }
    },
    computed: {
        ...mapGetters({
            getSearchUser: 'getSearchUser'
        }),
        filterUsers: {
            get() {
                return this.getSearchUser
            },
            set(val) {
                return this.$store.commit('setSearchUser', val)
            }
        }
    }
}
</script>