var setaDireita = window.document.getElementById("seta-direita")
var alexandre = window.document.getElementById("alexandre")
var bruna = window.document.getElementById("bruna")
var samantha = window.document.getElementById("samantha")
var setaEsquerda = window.document.getElementById("seta-esquerda")

function rolarparadireita(){
    alexandre.style = "display:none"
    samantha.style = "display:flex"
    setaDireita.style ="display:none"
    setaEsquerda.style = "display:flex; margin-top:95px"
}
function rolarparaesquerda(){
    alexandre.style = "display:flex"
    samantha.style = "display:none"
    setaDireita.style ="display:flex"
    setaEsquerda.style = "display:none"
}
