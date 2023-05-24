import { reactive } from "vue";

export const store = reactive({
    cards: [],
    urlApi: "https://db.ygoprodeck.com/api/v7/cardinfo.php?num=20&offset=0",
    loading: true
})

export const archtype = reactive({
    types : [],
    urlApis : "https://db.ygoprodeck.com/api/v7/archetypes.php",
    urlGetCardsByArchetype:
        "https://db.ygoprodeck.com/api/v7/cardinfo.php?archetype=",
    loading: true
})