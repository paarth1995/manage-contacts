<template>
  <div id="app">
    <v-app dark>
      <v-content>
        <Navbar />
        <transition name="fade" mode="out-in" appear>
          <router-view ref="view"></router-view>
        </transition>
      </v-content>
    </v-app>
  </div>
</template>

<script>
import Navbar from './components/layout/Navbar'
export default {
  components: {
    Navbar
  }
}
</script>