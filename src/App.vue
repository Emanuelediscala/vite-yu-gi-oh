<script >
import AppHeader from "./components/AppHeader.vue"
import AppContent from "./components/AppContent.vue"
import AppFooter from "./components/Appfooter.vue"
import { store } from "./components/data/store.js"
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
      selectedType: null,
    }
  },
  methods: {
    CardsLoaded(adress) {
      axios.get(adress).then((risposta => {
        this.store.cards = risposta.data.data;
        this.store.loading = false;
        this.store.cards.num = this.store.cards[0].length
    console.log(this.store.cards)
      }))
    },
    SaveNewDate(adress) {
      console.log(adress);
      axios.get(adress).then((risposta => {
        this.archtype.types = risposta.data;
        this.archtype.loading = false;
      }))
    }
  },
  computed: {  
        filterCards() {
            axios.get(this.archtype.urlGetCardsByArchetype + this.selectedType)
            .then(r => {
                this.store.cards = []
                this.store.cards = r.data.data;
                this.store.loading = false;
            })
          }
        }, 
  mounted() {
    this.CardsLoaded(this.store.urlApi)
    this.SaveNewDate(this.archtype.urlApis)
    console.log(this.store.cards);
  }
}

</script>

<template>
  <AppHeader />
  <select @change="filterCards" name="" id="" class="my-3 p-1" v-model="selectedType">
    <option v-for="validtype in archtype.types" :value="validtype.archetype_name">{{ validtype.archetype_name }}</option>
  </select>
  <AppContent />
  <AppFooter />
</template>

<style lang="scss" scoped>
@use './styles/generic.scss' as *;
</style>
