let lista_nomes = ["Mago", "Magro", "seco"]

function renderizar() { 
     const lista_pagina = document.getElementById("lista")
     lista_pagina.innerHTML = ""
      for(let item of lista_nomes) {
      let elemento = document.createElement("li")
      elemento.innerText = item
      lista_pagina.appendChild(elemento)
    
    }
    
 }

 document.addEventListener("DOMContentLoaded", () => {
    renderizar()
 })

 function contarNomesGrandes(){
   let contador = 0

   for(let nome  of lista_nomes) {
      if (nome.length > 5) {
         contador ++
      }
   }
   return contador
 }
 document.getElementById("add_final") .addEventListener("click", () => {
   const input = document.getElementById("inputnome")
   lista_nomes.push(input.value)
   input.value = ""
   renderizar()
 })

 document.getElementById("rem_ultimo").addEventListener("click", () => {
    lista_nomes.pop()
    renderizar()
})

document.getElementById("rem_primeiro").addEventListener("click", () => {
    lista_nomes.shift()
    renderizar()
})

document.getElementById("add_inicio").addEventListener("click", () => {
    const input = document.getElementById("inputnome")
    lista_nomes.unshift(input.value)
    input.value = ""
    renderizar()
})
