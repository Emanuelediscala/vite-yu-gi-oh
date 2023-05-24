<script>
import { store } from "./data/store"

export default {
    data() {
        return {
            store
        }

    },
    methods: {
        // FARE IL METODO PER FILTRARE  SULL ARRAY E IN HTML CICLARE DIRETTAMENTE SULLA FUNZIONE METTERE IL RETURN []
    },
    mounted() {

    }
}

</script>
<template>
    <main>
        <div class="container">
            <div class="row justify-content-center bg-white p-2 gap-2 ">
                <div class="bg-black text-white p-2">
                    <p v-show="this.store.cards.length" class="m-0">Found {{ this.store.cards.length }} cards</p>
                </div>
                <div v-show="this.store.loading" ><img src="../assets/Spinner-1s-200px.gif" alt=""></div>
                <div id="Cards" class="bg-Coral text-center p-0" v-show="!this.store.loading"
                    v-for="(card, i) in this.store.cards">
                    <img class="img-fluid" :src="card.card_images[0].image_url" alt="">
                    <p class="text-white ">{{ card.name }}</p>
                    <span>{{ card.archetype }}</span>
                </div>
            </div>
        </div>
    </main>
</template>

<style scoped>
main {
    background-color: coral;
}

.bg-Coral {
    background-color: coral;
}

img {
    width: 100%;
    display: block;
}

#Cards {
    width: calc(100% / 5 - 1rem);
}
</style>
