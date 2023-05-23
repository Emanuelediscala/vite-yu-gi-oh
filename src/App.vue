<script >
import AppHeader from "./components/AppHeader.vue"
import AppContent from "./components/AppContent.vue"
import AppFooter from "./components/Appfooter.vue"

import axios from 'axios';

export default {
  components: {
    AppHeader,
    AppContent,
    AppFooter
  }
}

</script>

<template>
  <AppHeader />
  <AppContent />
  <AppFooter  />

    
</template>

<style lang="scss" scoped>
@use './styles/generic.scss' as *;
</style>
