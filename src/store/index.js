import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    contacts: [
      { name: 'Jack', age: 29, phone: '231-121-0000' , email: 'jack@gmailz.com' },
      { name: 'Sam', age: 32, phone: '231-121-0000' , email: 'Sam@gmailz.com' },
      { name: 'Randy', age: 43, phone: '231-121-0000' , email: 'Randy@gmailz.com' },
    ],
    searchUser: '',
    name: '',
    age: null,
    phone: '',
    email: ''
  },
  getters: {
    getContacts: state => state.contacts,
    getSearchUser: state => state.searchUser,
    getName: state => state.name,
    getAge: state => state.age,
    getPhone: state => state.phone,
    getEmail: state => state.email
  },
  mutations: {
    deleteContact(state, name) {
      let idx = state.contacts.findIndex(el => el.name === name)
      state.contacts.splice(idx,1)
    },
    setContacts(state, payload) {
      state.contacts = payload
    },
    setSearchUser(state, payload) {
      state.searchUser = payload
    },
    setName(state, payload) {
      state.name = payload
    },
    setAge(state,payload) {
      state.age = payload
    },
    setPhone(state, payload) {
      state.phone = payload
    },
    setEmail(state, payload) {
      state.email = payload;
    },
    addContact(state) {
      let contactObject = {
        name: state.name,
        age: state.age,
        phone:state.phone,
        email: state.email
      }
      state.contacts.push(contactObject);
      state.name = ''
      state.age = ''
      state.phone= ''
      state.email = ''
    },
    resetForm(state) {
      state.name = ''
      state.age = ''
      state.phone= ''
      state.email = ''
    },
    updateName(state, payload) {
      state.contacts[payload.index].name = payload.name;
    },
    updateAge(state, payload) {
      state.contacts[payload.index].age = payload.age;
    },
    updatePhone(state, payload) {
      state.contacts[payload.index].phone = payload.phone;
    },
    updateEmail(state, payload) {
      state.contacts[payload.index].email = payload.email;
    }
  },
  actions: {
  },
  modules: {
  }
})
