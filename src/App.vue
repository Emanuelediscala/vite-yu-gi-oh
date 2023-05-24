<script >
import AppHeader from "./components/AppHeader.vue"
import AppContent from "./components/AppContent.vue"
import AppFooter from "./components/Appfooter.vue"
import {store} from "./components/data/store.js"
import axios from 'axios';
import { archtype } from "./components/data/store"

export default {
  components: {
    AppHeader,
    AppContent,
    AppFooter
  },
  data() {
    return {
   store,
   archtype,
   selectedType: "",
    }
  },
  methods: {
    CardsLoaded(adress) {
                axios.get(adress).then((risposta => {
                    this.store.cards = risposta.data.data;
                    this.store.loading = false;
                    this.store.cards.num = this.store.cards[0].length 
                    console.log(this.store.cards);
                }))        
    },
    SaveNewDate() {
      let adress = this.archtype.apiUrl
      this.CardsLoaded(adress);
    }
  },
  mounted() {
    this.CardsLoaded(this.store.urlApi)
    this.SaveNewDate(this.archtype.urlApi)
  }
}

</script>

<template>
  <AppHeader />
  <select name="" id="" class="my-3 p-1" v-model="selectedType">
        <option v-for="validtype in this.archtype.types" value="">{{ validtype }}</option>
  </select>
  <AppContent />
  <AppFooter  />

    
</template>

<style lang="scss" scoped>
@use './styles/generic.scss' as *;
</style>
