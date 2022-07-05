const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

var random = (num) => Math.floor(Math.random() * num);
var aleatorio = random(151)
var pokemonBag = sessionStorage.pokemonBag
const fetchPokemon = (aleatorio) => {
   
    const listaPokemons = []

   
    listaPokemons.push(fetch(getPokemonUrl(aleatorio))
    .then(response => response.json()))
   
   

   Promise.all(listaPokemons)
    .then(pokemons => {
        const liPokemons = pokemons.reduce((accumulator, pokemon) => {
            const types = pokemon.types.map(typeInfo => typeInfo.type.name)

            accumulator += `
            <li class="card-inimigo">
            <h2 class="titulo-inimigo">${pokemon.name}</h2>
            <img class="card-image" alt="${pokemon.name}"src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" />
            </li>
            `
            return accumulator
        }, '')

        const ul = document.querySelector('[data-js="pokedex2"]')

        ul.innerHTML += liPokemons
    })
}
// ------------------------------------------------------------------------------------------------------
const fetchMyPokemon = (aleatorio) => {
   
    const listaPokemons = []

   
    listaPokemons.push(fetch(getPokemonUrl(aleatorio))
    .then(response => response.json()))
   
   

   Promise.all(listaPokemons)
    .then(pokemons => {
        const liPokemons = pokemons.reduce((accumulator, pokemon) => {
            const types = pokemon.types.map(typeInfo => typeInfo.type.name)

            accumulator += `
            <li class="card">
            <h2 class="card-title">${pokemon.name}</h2>
            <img class="image-meuPokemon" alt="${pokemon.name}"src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemon.id}.png" />
            </li>
            `
            return accumulator
        }, '')

        const ul = document.querySelector('[data-js="pokedex"]')

        ul.innerHTML += liPokemons
    })
}
console.log(pokemonBag)
fetchPokemon(aleatorio)
fetchMyPokemon(9)
