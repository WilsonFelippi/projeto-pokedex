const botaoTema = document.getElementById("botao-tema");
const body = document.querySelector("body");
const imgBotaoTema = document.querySelector(".img-botao");

botaoTema.addEventListener("click", () => {
    const nightMode = body.classList.contains("night-mode")
    body.classList.toggle("night-mode");
    if (nightMode) {
        imgBotaoTema.setAttribute("src","./imagens/sun.png");
    } else {
        imgBotaoTema.setAttribute("src","./imagens/moon.png");
    }
})

