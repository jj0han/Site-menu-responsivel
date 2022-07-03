var botao = document.querySelector("[data-button]")
menu.style.opacity = "0"
menu.style.display = "none"

botao.addEventListener("click", function() {
    var menu = document.querySelector("#menu")
    var display = menu.style.display
    if(display == "none") {        
        menu.style.display = "flex"
        setTimeout(function() {
            menu.style.opacity = "1" 
        }, 100)
    } else {
        menu.style.opacity = "0"
        setTimeout(function() {
            menu.style.display = "none"
        }, 300)
    }
})