var nomeJogador;
var pokemonBag = [];
closePokemons()
showDialog()

function  showDialog(){
    var element = document.getElementById("dialog");
    element.classList.remove("close-dialog");
}
function closeDialog() {
    var element = document.getElementById("dialog");
    element.classList.add("close-dialog");
}
function showDialogEscolha() {
    var element = document.getElementById("dialogEscolha");
    element.classList.add("show-dialog");
}
function closeDialogEscolha() {
    var element = document.getElementById("dialogEscolha");
    element.classList.remove("show-dialog");
}
function showPokemons() {
    var element = document.getElementById("container");
    element.classList.remove("close-pokemon");
}
function closePokemons() {
    var element = document.getElementById("container");
    element.classList.add("close-pokemon");
}
function showIcon(nameTag) {
    nameTag.classList.add("show-icon");
}
function closeIcon(nameTag) {
    nameTag.classList.remove("show-icon");
}


function pegarNome() {
    if(document.getElementById("playerName").value.length >= 1) {
        nomeJogador = playerName.value
        closeDialog()
        showDialogEscolha()
        showPokemons()
        fetchPokemon(1)
        fetchPokemon(4)
        fetchPokemon(7)

    document.getElementById("titulo").innerHTML = nomeJogador + "..."
    document.getElementById("corpo").innerHTML = "Muito prazer em conhece-lo, agora escolha o seu pokemon inicial:"
               
    } else {    
        document.getElementById("dialogLable").innerHTML = `<label class="erro" for="fname" id="dialogLable">
        <b>Inválido</b> 
        </label>`
    }
}

function escolherPokemon(pokemonId) { 
    
    var pokemonInicial = [pokemonId]

    if (pokemonBag.length == 0) {

        pokemonBag.push(pokemonInicial)
    sessionStorage.pokemonBag = pokemonBag
    
    fetchPokemonUnico(pokemonId)

    document.getElementById("titulo").innerHTML = "Ótima escolha " + nomeJogador + "!" 
    document.getElementById("corpo").innerHTML = `Agora que tem um pokemon, vamos lá!
    <img class="icon-short" id="res2" src="../img/icone_hover.png">
    <a onmouseover="showIcon(res2)" onmouseout="closeIcon(res2)" href="../battle/battleIndex.html" class="menu-button-short">
                Continuar
            </a>
            `
} else {
    console.log("Não é possível escolher mais de um pokemon inicial")
}

}




