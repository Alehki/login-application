
// ¿Qué hace esta función? Básicamente, le das un objeto localStorage (ya definido) y te devuleve una tarjeta
// en un fragmen lista para insertar.

const cards_content = document.getElementById(`cards-content`)

const createCard = (objet) =>{
    const fragment = document.createDocumentFragment()

    const card = document.createElement(`DIV`);
    card.classList.add(`card`)

    const img = document.createElement(`IMG`);
    img.classList.add(`card__img`)
    img.setAttribute(`src`, objet.src)

    const card__body = document.createElement(`DIV`);
    card__body.classList.add(`card__body`);

    const card__title = document.createElement(`H2`);
    card__title.classList.add(`card__title`);
    card__title.textContent = objet.name_avatar

    const card__description = document.createElement(`P`);
    card__description.classList.add(`card__description`)
    card__description.textContent = objet.name_cuenta

    card__body.appendChild(card__title)
    card__body.appendChild(card__description)

    card.appendChild(img)
    card.appendChild(card__body)

    fragment.appendChild(card)

    return fragment
}

const readerLocalStorage = ()=>{
    const keyArray = Object.keys(localStorage)

    for(const key of keyArray){
        const element = JSON.parse(localStorage.getItem(key))
        // console.log(element)
        const fragmentR = createCard(element)
        cards_content.appendChild(fragmentR)
    }
}


// Remove misma clase. La uso dos veces. Tienen timers porque asi se eliminan luego de apretarle
// el volver o registrarse. SE ELIMINA EL COLOR VERDE.
const funRemove = () =>{
    form_register__input__file.classList.remove(`form-register__input--valid`)
    form_register__input__name_avatar.classList.remove(`form-register__input--valid`)
    form_register__input__name_cuenta.classList.remove(`form-register__input--valid`)
    form_register__input__pass.classList.remove(`form-register__input--valid`)
    form_register__input__repitpass.classList.remove(`form-register__input--valid`)
}


// CLOSED REGISTER.

const closed_register = document.getElementById(`closed-register`);

const closedFun = () =>{
    form_register.classList.add(`click-volver`)

    setTimeout(() => {
        // Movimiento del form principal
        form.classList.remove(`form-link--active`)

        // Remover para que vuelva a bloque el menu principal
        form.classList.remove(`form--display-none`)

        // Remover esta clase para que el registro vuelva a display none
        form_register.classList.remove(`form-register--display-block`)

        // Remover el display none del card contetn (TODAS LAS TARJETAS)
        cards_content.classList.remove(`cards-content--display-none`)
    }, 800);
}


