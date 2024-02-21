let lista = []




let formulario = document.querySelector("#form")

formulario.addEventListener("submit", (event)=>{
    event.preventDefault()

    let dadosInput = document.querySelector(".dados").value
    let novaVariavel = document.createElement("li")
    const ulGeral = document.querySelector(".listaGeral")
    novaVariavel.textContent = dadosInput
    lista.push(novaVariavel)   
    novaVariavel.classList.add("semEstilo")
    for (item of lista){
        lista.pop()
        console.log(item)
        ulGeral.appendChild(novaVariavel)
        apagar()
    }
    
})



function apagar(){
    let novoBotao = document.createElement("button")
    const ulGeral = document.querySelector(".listaGeral")
    novoBotao.textContent = "APAGAR ITEM"
    ulGeral.appendChild(novoBotao)

    
}