function converterTipos(pokemonstype) {
    return pokemonstype.map((typeSlot) => `<li class="tipo">${typeSlot.type.name}</li>`)
}

function converterPokemon(poke) {
    return `
    <li class="poke${poke.types}">
    <span class="number">#${poke.order}</span>
    <span class="name">${poke.name}</span>
    <div class="mon">
        <ol class="move">
${converterTipos(poke.types).join('')}
        </ol>

        <img src="${poke.sprites.other.dream_world.front_default}" alt="${poke.name}">
    </div>
</li>
    `
}

const pokemonList = document.getElementById('pokemonList')
const limit = 55;
let offset = 0;
const button = document.getElementById('btn')

function load(offset, limit) {

    pokeApi.getPokemons().then((pokemonLista = []) => {

        pokemonList.innerHTML += pokemonLista.map(converterPokemon).join('')
    })
}

load(offset, limit)

button.addEventListener('click', () => {
    offset += limit
    load(offset, limit)
})






