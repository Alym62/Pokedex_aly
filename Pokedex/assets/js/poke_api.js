const pokeApi = {}

pokeApi.getPokemonDetail = (poke) => {
    return fetch(poke.url).then((response) => response.json())
}

pokeApi.getPokemons = (offset = 0, limit = 55) => {
    const url = `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
        .then((response) => response.json())
        .then((jsonBody) => (jsonBody.results))
        .then((pokemonList) => pokemonList.map(pokeApi.getPokemonDetail))
        .then((detailRequests) => Promise.all(detailRequests))
        .then((pokemonsDetails) => pokemonsDetails)

}



