const getPokemonUrl = id => `https://pokeapi.co/api/v2/pokemon/${id}`

const fetchPokemon = (idPokemon) => {
    
    const listaPokemons = []

   
    listaPokemons.push(fetch(getPokemonUrl(idPokemon))
    .then(response => response.json()))
   
   

   Promise.all(listaPokemons)
    .then(pokemons => {
        const liPokemons = pokemons.reduce((accumulator, pokemon) => {
            const types = pokemon.types.map(typeInfo => typeInfo.type.name)

            accumulator += `
            
            <li class="card ${types[0]}"  onclick="escolherPokemon(${pokemon.id})">
            <img class="card-image" alt="${pokemon.name}"src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" />
            <h2 class="card-title">${pokemon.name}</h2> 
            <p class="card-subtitle">${types.join(' | ')}</p>
            </li>
            
            `
            return accumulator
        }, '')

        const ul = document.querySelector('[data-js="pokedex"]')
        
        ul.innerHTML += liPokemons
    })
}


function pokedexUnico() {
    var element = document.getElementById("pokedex");
    element.classList.add("pokedex-short");
}

const fetchPokemonUnico = (idPokemon) => {
    
    const listaPokemons = []

   
    listaPokemons.push(fetch(getPokemonUrl(idPokemon))
    .then(response => response.json()))
   
   

   Promise.all(listaPokemons)
    .then(pokemons => {
        const liPokemons = pokemons.reduce((accumulator, pokemon) => {
            const types = pokemon.types.map(typeInfo => typeInfo.type.name)

            accumulator += `
            <a>
            <li class="card ${types[0]}">
            <img class="card-image" alt="${pokemon.name}"src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png" />
            <h2 class="card-title">${pokemon.name}</h2> 
            <p class="card-subtitle">${types.join(' | ')}</p>
            </li>
            </a>
            `
            return accumulator
        }, '')
        
        pokedexUnico()
        const ul = document.querySelector('[data-js="pokedex"]')
        
        ul.innerHTML = liPokemons
    })
}

