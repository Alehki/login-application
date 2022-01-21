// NOTA: Ya puedo usar cards_content porque lo obtuve en el archivo functions.


// Llamamos a la funcion asi recargar de entrada todo lo del localStorage en la web
readerLocalStorage()

// RULER REGISTER.
const ruler_register = document.getElementById(`ruler-register`)
const ruler_register_open = document.getElementById(`ruler-register-open`)
// -----
const form = document.getElementById(`form`);
const form_link = document.getElementById(`form-link`);

const form_register = document.getElementById(`form-register`);

// Este código es para mover, desaparecer y qeu aparezca el registro de avatares.

form_link.addEventListener(`click`, ()=>{
    form.classList.add(`form-link--active`)
    form_register.classList.remove(`click-volver`)

    // Extra del boton de emergencia
    const emergency__btn = document.getElementById(`emergency-btn`)
    emergency__btn.classList.add(`emergency-btn--display-none`)

    setTimeout(() => {
        form_register.classList.add(`form-register--display-block`)
        // form.style.display = "none"
        form.classList.add(`form--display-none`)
        
        // cards_content.classList.add(`cards-content--active`)
        cards_content.classList.add(`cards-content--display-none`)
        ruler_register.classList.add(`ruler-register--active`)
    }, 800);
})

ruler_register.addEventListener(`click`, ()=>{
    ruler_register_open.classList.toggle(`ruler-register-open--active`)
})
// --------------------------------------------------------------------------


// Este código es para el menu que se genera en moviles, es el click y aquello que hace que aparezcan
// y desaparezcan las cards ya registradas.

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



// PARA REGISTRARSE

const form_register__input__file = document.getElementById(`form-register__input--file`);
const form_register__input__name_avatar = document.getElementById(`form-register__input--nameavatar`);
const form_register__input__name_cuenta = document.getElementById(`form-register__input--namecuenta`);
const form_register__input__pass = document.getElementById(`form-register__input--pass`);
const form_register__input__repitpass = document.getElementById(`form-register__input--repitpass`);
const form_register_btn = document.getElementById(`form-register-btn`)


//  Expresiones regulares.

// Validar nombre de usuario: /^[a-zA-Z0-9_-]{3,16}$/
// Validar email: /^([a-z0-9_\.\+-]+)@([\da-zº.-]+)\.([a-z\.]{2,6})$/

const regEx_name_avatar = /^[a-zA-Z0-9_-\s]{3,10}$/
const regEx_name_cuenta = /^[a-zA-Z0-9_-\s]{3,20}$/
const regEx_name_pass = /^[a-zA-Z0-9]{8,}$/


// Nombre de avatar: Podes usar mayusculas, minusculas numeros, signos bajos y altos. Son de 3 a 10 digitos.
// Nombre de cuenta: Podes usar mayusculas, minusculas numeros, signos bajos y altos. Son de 3 a 20 digitos.
// Contraseña: Podes usar mayusculas, minusculas numeros, signos bajos y altos. Son de 8 a infinitos digitos.


const valid = {
    file: false,
    name_avatar: false,
    name_cuenta: false,
    pass: false
}

const pass = {
    pass1: "a",
    pass2: "b"
}

form_register__input__file.addEventListener(`change`, ()=>{
    form_register__input__file.classList.add(`form-register__input--valid`)
    valid.file = true
})

form_register__input__name_avatar.addEventListener(`keyup`, (e)=>{

    const valor = regEx_name_avatar.test(e.target.value)
    if(valor){
        e.target.classList.add(`form-register__input--valid`)
        valid.name_avatar = true
    }else{
        e.target.classList.remove(`form-register__input--valid`)
        valid.name_avatar = false
    }
})

form_register__input__name_cuenta.addEventListener(`keyup`, (e)=>{
    const valor = regEx_name_cuenta.test(e.target.value)
    if(valor){
        e.target.classList.add(`form-register__input--valid`)
        valid.name_cuenta = true
    }else{
        e.target.classList.remove(`form-register__input--valid`)
        valid.name_cuenta = false
    }
})

form_register__input__pass.addEventListener(`keyup`, (e)=>{
    
    const valor = regEx_name_pass.test(e.target.value)
    if(valor){
        pass.pass1 = e.target.value
        if(pass.pass1 === pass.pass2){
            e.target.classList.add(`form-register__input--valid`)
            form_register__input__repitpass.classList.add(`form-register__input--valid`)
        }  
        else{
            e.target.classList.remove(`form-register__input--valid`)
            form_register__input__repitpass.classList.remove(`form-register__input--valid`)
        } 
    }else{
        e.target.classList.remove(`form-register__input--valid`)
        form_register__input__repitpass.classList.remove(`form-register__input--valid`)
    }
})

form_register__input__repitpass.addEventListener(`keyup`, (e)=>{
    // if(form_register__input__repitpass.value.length >=8) pass.pass2 = form_register__input__repitpass.value

    const valor = regEx_name_pass.test(e.target.value)

    if(valor){
        pass.pass2 = e.target.value
        if(pass.pass1 === pass.pass2){
            form_register__input__pass.classList.add(`form-register__input--valid`)
            e.target.classList.add(`form-register__input--valid`)
        }  
        else{
            form_register__input__pass.classList.remove(`form-register__input--valid`)
            e.target.classList.remove(`form-register__input--valid`)
        }   
    }else{
        form_register__input__pass.classList.remove(`form-register__input--valid`)
        e.target.classList.remove(`form-register__input--valid`)
    }
})




form_register_btn.addEventListener(`click`, (e)=>{
    e.preventDefault()
    if(pass.pass1 === pass.pass2) valid.pass = true
    console.log(valid)
    
    // let valor = 0;
    // for(const key in valid){
    //     if(valid[key] === false){
    //         console.log("No se completo correctamente");
    //         break
    // }else valor+= 1

    const values = Object.values(valid)
    const isValid = values.findIndex(element => element == false)

        
    if(isValid == -1){
        console.log("Datos completados correctamente")

        const reader = new FileReader()

        reader.addEventListener(`load`, ()=>{
            const random = Math.floor(Math.random()*100)
            const person = {
                id: random,
                src: reader.result,
                name_avatar: form_register__input__name_avatar.value,
                name_cuenta: form_register__input__name_cuenta.value,
                pass: form_register__input__repitpass.value,
                status: false
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

            closedFun()

            setTimeout(() => {
                funRemove()
                ruler_register.classList.remove(`ruler-register--active`)
            }, 800);
        })
        reader.readAsDataURL(form_register__input__file.files[0])        

        // primero hace esto, luego el evento a pesar de que el evento este antes. Es por eso, para escuchar 
        // cuando cargue la img
        
    }
})

// -----------------------------------------



closed_register.addEventListener(`click`, ()=>{

    setTimeout(() => {
        funRemove()
        ruler_register.classList.remove(`ruler-register--active`)
        // Extra del boton de emergencia
        const emergency__btn = document.getElementById(`emergency-btn`)
        emergency__btn.classList.remove(`emergency-btn--display-none`)
    }, 800);
    closedFun()
})

// INICIAR SESION.


const form__name = document.getElementById(`name`);
const form__pass = document.getElementById(`pass`);
const form_btn = document.getElementById(`form-btn`);

form_btn.addEventListener(`click`, (e)=>{
    e.preventDefault()

    // Esto es el botón de ingreso......Luego definimos el código para ingresar.

    const valid_sesion = {
        name: false,
        pass: false
    }

    const keys = Object.keys(localStorage)
    for(const key of keys){
        const objeto = JSON.parse(localStorage.getItem(key))

        if(form__name.value===objeto.name_cuenta && form__pass.value===objeto.pass){
            valid_sesion.name = true
            valid_sesion.pass = true
            objeto.status = true
            localStorage.setItem(key, JSON.stringify(objeto)) 
        }     
    }

    if(valid_sesion.name && valid_sesion.pass){
        console.log(`El usuario es correcto`)
        // location.href = "../html-user/user.html"
        location.href = "../login-application/html-user/user.html"
    } 
    else console.log(`Este usuario no está registrado`)
})


// EMERGENCY

const emergency_btn = document.getElementById(`emergency-btn`);
const emergency = document.getElementById(`emergency`);
const form_emergency__input = document.getElementById(`form-emergency__input`);
const emergency_closed_btn = document.getElementById(`emergency-closed-btn`);
const emergency_closed = document.getElementById(`emergency-closed`);

emergency_btn.addEventListener(`click`, (e)=>{
    e.preventDefault()

    emergency.classList.add(`emergency--active`)

})

emergency_closed.addEventListener(`click`, ()=>{
    emergency.classList.remove(`emergency--active`)
})

emergency_closed_btn.addEventListener(`click`, (e)=>{
    e.preventDefault()
    if(form_emergency__input.value === "alehki1234") {
        localStorage.clear()
        // location.href = "/"
        location.href = "../login-application/"
    }
})