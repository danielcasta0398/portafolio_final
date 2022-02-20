let button = document.getElementById("menu-principal")


function showMenu() {
    let menu = document.getElementById("menu")
    if (menu.classList.contains("disable-menu")) {
        menu.classList.remove("disable-menu")
        menu.classList.add("menu-hamburg")
    } else if(menu.classList.contains("menu-hamburg")){
        menu.classList.remove("menu-hamburg")    
        menu.classList.add("disable-menu")
    }

    
}

button.addEventListener("click", showMenu)