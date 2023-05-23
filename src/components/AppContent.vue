<script>
import {store} from "./data/store"

export default {
    data() {
        return {
            store
        }
        
    }
}

</script>
<template>
    <main>
        <div class="container p-2">
            <select name="" id="" class="mb-3">
                <option value="">Alien</option>
            </select>
            <div id="cardContainer" class="row container p-2 bg-white ">
                <div class="bg-black text-white p-2 mb-3">
                    <p v-show="this.store.cards.length" class="m-0">Found {{ this.store.cards.length }} cards</p>
                </div>
                    <div v-if="this.store.cards < 50"><img src="../assets/Spinner-1s-200px.gif" alt=""></div>
                    <div id="Cards" v-if="this.store.cards.length === 50" class="mb-2" v-for="(card,i) in this.store.cards">
                        <img :src="card.card_images[0].image_url" alt="">
                        <div class="bg-Coral text-center p-2">
                        <p class="text-white">{{ card.name }}</p>
                        <span>{{ card.archetype }}</span>
                        </div>
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
    height: 280px;
}
#Cards {
    width: calc(100% / 5);
}

</style>
