let eat = [
    {

        "name": "Pizza Krabben",
        "zusatz": "mit Fisch, Meeresfrüchte und Pfeffer",
        "preis": 15.99,
        "cartCount": 1




    },

    {

        "name": "Nudeln pilze",
        "zusatz": "mit Hafer, Steinpilzen und Knoblauch",
        "preis": 15.99,
        "cartCount": 1


    },

    {

        "name": "Kartoffelauflauf",
        "zusatz": "mit Nüssen, Eier und Sojamilch",
        "preis": 15.99,
        "cartCount": 1


    },
]

let dessert = [
    {

        "name": "Vanille Eis",
        "zusatz": "mit Lactose und Milch",
        "preis": 3.99,
        "cartCount": 1


    },
    {

        "name": "Panacotta",
        "zusatz": "mit Milch und Fructose",
        "preis": 5.99,
        "cartCount": 1


    },
    {

        "name": "Palatschinken",
        "zusatz": "mit Weizen und Soja",
        "preis": 7.99,
        "cartCount": 1


    },
]

let drinks = [
    {

        "name": "Coke Cola",
        "zusatz": "mit viel Zucker",
        "preis": 2.99,
        "cartCount": 1


    },
    {

        "name": "Fanta",
        "zusatz": "mit Farbstoffe und viel Zucker",
        "preis": 2.99,
        "cartCount": 1


    },
    {

        "name": "Wasser",
        "zusatz": "mit oder ohne Sprudel",
        "preis": 1.99,
        "cartCount": 1


    }


]
let warenkorb = [];


function addToBasket(eat) {
    if (warenkorb.includes(eat)) {
        eat.cartCount++
    } else {
        warenkorb.push(eat);
    }
    renderBasket();
}

function renderBasket() {
    let basket = document.getElementById('basket');
    basket.innerHTML = "<p>Warenkorb<p>";

    let gesamtpreis = 0;
    let lieferkosten = 5;


    for (let i = 0; i < warenkorb.length; i++) {
        const element = warenkorb[i];
        basket.innerHTML += `
        <div> 
        <p>${element.name} - ${element.preis.toFixed(2)}€</p>
        <span>${element.cartCount}</span>
        <button onclick="removeFromBasket(${i})">Löschen</button>
        </div>`;

        gesamtpreis += element.preis * element.cartCount;



    }


    if (warenkorb.length === 0) {
        basket.innerHTML += "<p>Der Warenkorb ist leer.</p>";

    } else {

        basket.innerHTML += `
        <div class="all">
        <div class="zwischen">

        <p> Zischensumme: ${gesamtpreis.toFixed(2)}€</p>
        
<div class="zwische">
        <p> Lieferkosten: ${lieferkosten.toFixed(2)}€</p>
        </div>
        <div class="zwischenn">
        <p> Gesamtpreis: ${(gesamtpreis + lieferkosten).toFixed(2)}€</p>
         </div>
         </div>
        `;
        return (warenkorb);

    }



}

function removeFromBasket(index) {
    if (warenkorb[index].cartCount > 1) {
        warenkorb[index].cartCount--;

    } else {
        warenkorb.splice(index, 1);
    }
    

    renderBasket();


}

function render() {
    let contenteat = document.getElementById('content');
    contenteat.innerHTML = "";



    for (let i = 0; i < eat.length; i++) {
        const element = eat[i];

        contenteat.innerHTML += /*html*/`

         <div class="eat">
              
            </div>

            <div class="eatmenue">
                <div class="menueeat">

                    <p>${element.name} <br>
                        <a> ${element.zusatz} <br>
                            ${element.preis.toFixed(2)}€</a>

                    </p>
                    <div class="button" onclick="addToBasket(eat[${i}])">
                        ➕
                    </div>

                </div> `;

    }
}
function renderDessert() {
    let contenteat2 = document.getElementById('content2');
    contenteat2.innerHTML = "";


    for (let i = 0; i < dessert.length; i++) {
        const element = dessert[i];

        contenteat2.innerHTML += /*html*/`

         <div class="eat">
              
            </div>

            <div class="eatmenue">
                <div class="menueeat">

                    <p>${element.name} <br>
                        <a> ${element.zusatz} <br>
                            ${element.preis.toFixed(2)}€</a>

                    </p>
                    <div class="button" onclick="addToBasket(dessert[${i}])">
                        ➕
                    </div>

                </div> `;

    }
}





function rendertobasket() {
    let basket = document.getElementById('basket');
    basket.innerHTML = "";
    for (let i = 0; index < eat.length; index++) {
        const element = eat[i];

    }




}

function renderDrink() {
    let contenteat3 = document.getElementById('content3');
    contenteat3.innerHTML = "";


    for (let i = 0; i < drinks.length; i++) {
        const dr = drinks[i];

        contenteat3.innerHTML += /*html*/`

         <div class="eat">
                
            </div>

            <div class="eatmenue">
                <div class="menueeat">

                    <p>${dr.name} <br>
                        <a> ${dr.zusatz} <br>
                            ${dr.preis.toFixed(2)}€</a>

                    </p>
                    <div class="button" onclick="addToBasket(drinks[${i}])">
                        ➕
                    </div>

                </div> `;

    }
}

