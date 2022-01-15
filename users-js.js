const cards_content = document.getElementById(`cards-content`)


// const dataPerson = [
//     {
//         src: "assets/images/personas-random/mujer.jpg",
//         name: "Michale",
//         description: "Hola mi nombre es Michale, tengo 26 años y mi sueño es poder convertirme en una gran actriz"
//     },
//     {
//         src: "assets/images/personas-random/alexander.jpg",
//         name: "Alexander",
//         description: "Hola mi nombre es Alexander, tengo 21 años y mi sueño es poder convertirme en desarrollador web"
//     }
// ]



const createCard = (createCard) =>{

    const fragment = document.createDocumentFragment()

    const card = document.createElement(`DIV`);
    card.classList.add(`card`)
    const img = document.createElement(`IMG`);
    img.classList.add(`card__img`)
    const cardBody = document.createElement(`DIV`);
    cardBody.classList.add(`card__body`)
    const card__title = document.createElement(`H2`);
    const card__description = document.createElement(`P`);
    
    img.setAttribute(`src`, createCard.src)
    card__title.textContent = createCard.name
    card__description.textContent = createCard.description

    cardBody.appendChild(card__title)
    cardBody.appendChild(card__description)

    card.appendChild(img)
    card.appendChild(cardBody)

    fragment.appendChild(card)

    return fragment
}


// for(const data of dataPerson){
//     const card__hecha = createCard(data)
//     cards_content.appendChild(card__hecha)
// }

const arrayKeys = Object.keys(localStorage);

for(const key of arrayKeys){
    const objet = JSON.parse(localStorage.getItem(key))
    const card__hecha = createCard(objet)
    cards_content.appendChild(card__hecha)
}