<template>
    <v-container grid-list-md text-xs-center class="mt-5">
        <v-layout justify-center row wrap>
            <v-flex md4 xs12 v-for="(contact,index) in filteredUsers" :key="index" class="px-3">
                <v-card>
                    <v-card-text class="title font-weight-light font-italic">
                        {{contact.name}}
                    </v-card-text>
                    <v-icon class="edit mr-4" @click="enterEditMode(index)">create</v-icon>
                    <v-icon class="delete" @click="deleteContact(contact.name)">delete</v-icon>
                    <v-list class="font-weight-light subheading">Age: {{contact.age}}</v-list>
                    <v-list class="font-weight-light subheading">Phone: {{contact.phone}}</v-list>
                    <v-list class="font-weight-light subheading">Email: {{contact.email}}</v-list>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex'
export default {
    name: 'Dashboard',
    data() {
        return {
        }
    },
    computed: {
        ...mapGetters({
            getContacts: 'getContacts',
            getSearchUser: 'getSearchUser',
        }),
        filteredUsers() {
            return this.getContacts.filter( contact => {
                return contact.name.toLowerCase().includes(this.getSearchUser.toLowerCase());
            }) 
        }
    },
    methods: {
        ...mapMutations({
            deleteContact: 'deleteContact',
            setName: 'setName',
            setAge: 'setAge',
            setPhone: 'setPhone',
            setEmail: 'setEmail'
        }),
        enterEditMode(index) {
            this.setName(this.filteredUsers[index].name);
            this.setAge(this.filteredUsers[index].age);
            this.setPhone(this.filteredUsers[index].phone);
            this.setEmail(this.filteredUsers[index].email);
            this.$router.push( {name: 'EditContact', params: { index: index }});
        }
    }
}
</script>