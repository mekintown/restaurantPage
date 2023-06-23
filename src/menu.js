import "./style.css"

function createMenu() {
    const section = document.createElement("section");
    section.classList.add("menu");

    const h2 = document.createElement("h2");
    h2.textContent = "MENUS";
    section.appendChild(h2);

    const div = document.createElement("div");
    div.classList.add("foods");
    div.appendChild(createFoodSection("Chill", ["Cheese and cold cuts platter", "Torched Salmon", "Squash Carpaccio", "Seared Tuna"]));
    div.appendChild(createFoodSection("Sides", ["FRUIT & BERRY SALAD", "Mashed Potato", "French Fries", "Creamy spinach"]));

    section.appendChild(div);
    return section;

}

function createFoodSection(name, foods) {
    const section = document.createElement("section")
    section.classList.add("food-section")
    
    const h3 = document.createElement("h3");
    h3.textContent = name;
    section.appendChild(h3);

    foods.forEach(element => {
        section.appendChild(createFood(element, createRandomDescription(), createRandomPrice()));
    });

    return section;

}

function createRandomDescription() {
    const maxDescriptions = Math.floor(Math.random() * 5) + 1;
    const description = ['Lemon', 'Cocktail Sauce', 'Beef', 'Salmon', 'Leeks', 'Sesame', 'Pomelo', 'Chili', 'Mignonette sauce', 'Parma Ham']
    let randomDescription = "";
    for (let i = 0; i < maxDescriptions; i++) {
        const randomIndex = Math.floor(Math.random() * description.length);
        randomDescription += description[randomIndex] + ", "
    }
    
    return randomDescription.slice(0, randomDescription.length-2);
}

function createRandomPrice() {
    let price = Math.floor(Math.random() * 100) + 1;
    price += "$"

    return price
}

function createFood(name, description, price) {
    const div = document.createElement("div")
    div.classList.add("food")

    const h4 = document.createElement("h4");
    h4.textContent = name.toUpperCase();
    
    const p = document.createElement("p");
    p.textContent = description;

    const priceP = document.createElement("p");
    priceP.textContent = price;

    div.appendChild(h4);
    div.appendChild(p);
    div.appendChild(priceP);

    return div;
}

export default createMenu;