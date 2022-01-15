const form_btn = document.getElementById(`form-btn`);

form_btn.addEventListener(`click`, (e)=>{
    e.preventDefault()
})

const form = document.getElementById(`form`);
const form_link = document.getElementById(`form-link`);

const form_register = document.getElementById(`form-register`);
const cards_content = document.getElementById(`cards-content`)

form_link.addEventListener(`click`, ()=>{
    form.classList.add(`form-link--active`)
    form_register.classList.remove(`click-volver`)
    setTimeout(() => {
        form_register.classList.add(`form-register--display-block`)
        // form.style.display = "none"
        form.classList.add(`form--display-none`)
        
        // cards_content.classList.add(`cards-content--active`)
        cards_content.classList.add(`cards-content--display-none`)

    }, 1000);
})


// --------------------------------------------------------------------------

const icon_menu = document.getElementById(`icon-menu`)

icon_menu.addEventListener(`click`, ()=>{
    cards_content.classList.toggle(`cards-content-desplegue`)
    const cards = document.querySelectorAll(`.card`)

    // Atento! Tuviste un error, pusiste el llamado a todos los .card antes del evento. Y no!
    // Tiene que ser luego que ocurre el evento la recolección porque puede que existan otros
    // que al principio no agarro. RECORDAR QUE UN EVENTO SI PUEDE EJECUTAR INTERNAMENTE,
    // LO QUE ESTARIA AFUERA DE ESTO YA QUEDA ASI (El otro código fuera de eventos).
    if(cards_content.classList.contains(`cards-content-desplegue`)){
        for(const card of cards){
            card.classList.add(`card--inline`)
        }
    }else{
        for(const card of cards){
            card.classList.remove(`card--inline`)
        }
    }
})



// ¿Qué hace esta función? Básicamente, le das un objeto localStorage (ya definido) y te devuleve una tarjeta
// en un fragmen lista para insertar.

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

readerLocalStorage()


// PARA REGISTRARSE

const form_register__input__file = document.getElementById(`form-register__input--file`);
const form_register__input__name_avatar = document.getElementById(`form-register__input--nameavatar`);
const form_register__input__name_cuenta = document.getElementById(`form-register__input--namecuenta`);
const form_register__input__pass = document.getElementById(`form-register__input--pass`);
const form_register__input__repitpass = document.getElementById(`form-register__input--repitpass`);
const form_register_btn = document.getElementById(`form-register-btn`)


const valid = {
    file: false,
    name: false,
    description: false,
    pass: false
}

const pass = {
    pass1: "a",
    pass2: "b"
}

form_register__input__file.addEventListener(`change`, ()=>{ 
    valid.file = true
})

form_register__input__name_avatar.addEventListener(`change`, ()=>{
    if(form_register__input__name_avatar.value.length >=3) valid.name = true
})

form_register__input__name_cuenta.addEventListener(`change`, ()=>{
    if(form_register__input__name_cuenta.value.length >=3) valid.description = true
})

form_register__input__pass.addEventListener(`change`, ()=>{
    if(form_register__input__pass.value.length >=8) pass.pass1 = form_register__input__pass.value
})

form_register__input__repitpass.addEventListener(`change`, ()=>{
    if(form_register__input__repitpass.value.length >=8) pass.pass2 = form_register__input__repitpass.value
})


form_register_btn.addEventListener(`click`, ()=>{
    let valor = 0;
    if(pass.pass1 === pass.pass2) valid.pass = true
    
    for(const key in valid){
        if(valid[key] === false){
            console.log("No se completo correctamente");
            break
        }else valor+= 1
    if(valor === 4){
        console.log("Datos completados correctamente")
        console.log(form_register__input__name_cuenta.value)

        const reader = new FileReader()
        reader.readAsDataURL(form_register__input__file.files[0])

        setTimeout(() => {
            const random = Math.floor(Math.random()*100)
            const person = {
                id: random,
                src: reader.result,
                name_avatar: form_register__input__name_avatar.value,
                name_cuenta: form_register__input__name_cuenta.value,
                pass: form_register__input__repitpass.value
            }

            localStorage.setItem(person.id, JSON.stringify(person))

            const inputs = document.querySelectorAll(`.form-register__input`)
            for(const input of inputs){
                input.value = ""
            }

            // Esto es para que nunca se eliminen los primero dos elementos (de estar en display o no), pues son
            // el icono de menú y el titulo 
            while(cards_content.children.length>2){
                cards_content.removeChild(cards_content.lastChild)
            }
    
            readerLocalStorage()

        }, 100);

        

        // primero hace esto, luego el evento a pesar de que el evento este antes. Es por eso, para escuchar 
        // cuando cargue la img
        } 
    }
})

// -----------------------------------------

// const tia = document.getElementById(`tia`);

// tia.addEventListener(`click`, ()=>{
//     localStorage.clear()
// })

const closed_register = document.getElementById(`closed-register`);

closed_register.addEventListener(`click`, ()=>{
    
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
    }, 1000);
})