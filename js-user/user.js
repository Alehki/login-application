const title = document.getElementById(`title`);
const namee = document.getElementById(`name`);
const perfil__img = document.getElementById(`perfil__img`);
const cerar_sesion = document.getElementById(`cerrar_sesion`);


const keys = Object.keys(localStorage)

for(const key of keys){
    const objeto = JSON.parse(localStorage.getItem(key))
    
    if(objeto.status){
        namee.textContent = objeto.name_cuenta
        perfil__img.setAttribute(`src`, objeto.src)

        cerar_sesion.addEventListener(`click`, ()=>{
            objeto.status = false
            localStorage.setItem(objeto.id, JSON.stringify(objeto))
            location.href = "../"
        })
    } 
}

const menu_icon = document.getElementById(`menu-icon`);
const menu = document.getElementById(`menu`);

menu_icon.addEventListener(`click`, ()=>{
    menu.classList.toggle(`menu-active`)
})

