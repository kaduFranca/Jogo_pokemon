const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

var pokemonBag = sessionStorage.pokemonBag

const fetchMyPokemon = (idPokemon) => {
   
    const listaPokemons = []

   
    listaPokemons.push(fetch(getPokemonUrl(idPokemon))
    .then(response => response.json()))
   
   

   Promise.all(listaPokemons)
    .then(pokemons => {
        const liPokemons = pokemons.reduce((accumulator, pokemon) => {
            const types = pokemon.types.map(typeInfo => typeInfo.type.name)

            accumulator += `
            <li class="card">
            <h2 class="card-title">${pokemon.name}</h2>
            <img class="card-image" alt="${pokemon.name}"src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemon.id}.png" />
            </li>
            `
            return accumulator
        }, '')

        const ul = document.querySelector('[data-js="pokedex2"]')

        ul.innerHTML += liPokemons
    })
}

fetchMyPokemon(pokemonBag)