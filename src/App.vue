<template>
  <div>
    <c-navbar></c-navbar>
    <div class="container">
       <router-view></router-view>
    </div>
    <c-footer></c-footer>
   
    <!-- <c-alert></c-alert> -->
  </div>
</template>

<script>
  // import alert from './components/alert.vue'
  import navbar from './components/navPrac.vue';
  import home from './components/Home.vue';
  import about from './components/About.vue';
  import footer from './components/Footer.vue';
  export default {
    components: {
      // 'c-alert' : alert,
      'c-navbar': navbar,
      'home-page': home,
      'about-page': about,
      'c-footer': footer
    },
    data() {
      return {

      }
    }
  }
</script>

<style>
  
</style>