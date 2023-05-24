import { reactive } from "vue";

export const store = reactive({
    cards: [],
    urlApi: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=50&offset=0",
    loading: true
})

export const archtype = reactive({
    types : [],
    urlApi : "https://db.ygoprodeck.com/api/v7/archetypes.php"
})