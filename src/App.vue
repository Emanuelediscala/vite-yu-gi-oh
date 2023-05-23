<script >
import AppHeader from "./components/AppHeader.vue"
import AppContent from "./components/AppContent.vue"
import AppFooter from "./components/Appfooter.vue"
import {store} from "./components/data/store.js"
import axios from 'axios';

export default {
  components: {
    AppHeader,
    AppContent,
    AppFooter
  },
  data() {
    return {
   store
    }
  },
  methods: {
    CardsLoaded() {
                axios.get(this.store.urlApi).then((risposta => {
                    this.store.cards = risposta.data.data;
                    this.store.cards.num = this.store.cards[0].length 
                    console.log(this.store.cards);
                }))
            
    }
  },
  mounted() {
    this.CardsLoaded()
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
