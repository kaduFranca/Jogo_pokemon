class Battle {
    constructor() {

    }

    createElement() {
        this.element = document.createElement("div");
        this.element.classList.add("Battle");
        this.element.innerHTML = (`
        <div class="Pokemon">
            <img src="${'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png'}" alt="Pokemon" />
        <div/>

        <div class="Pokemon-inimigo">
            <img src="${'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png'}" alt="Inimigo" />
        <div/>
        `)
    }

    init(container) {
        this.createElement();
        container.appendChild(this.element);
    }
}