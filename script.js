let lista_nomes = ["Mago", "Magro", "seco"]
let lista_filtrada = lista_nomes.filter(nome => nome.length >= 5)

function renderizar() {
   const lista_pagina = document.getElementById("lista")
   const lista_pagina_m = document.getElementById("lista_maiusculo")

   lista_pagina.innerHTML = ""
  lista_nomes.forEach(nome => {
   let li = document.createElement("li")
   li.innerText = nome
   lista_pagina.appendChild(li)
  })
   contarnome()
}

document.addEventListener("DOMContentLoaded", () => {
   renderizar()
})

function contarnome() {
   const contagem = document.getElementById("contagem")
   let contador = 0;

   for (let nome of lista_nomes) {
      if (nome.length >= 5) {
         contador++
      }
      contagem.innerText = contador;
   }

}


document.getElementById("add_final").addEventListener("click", () => {
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

document.getElementById("maiusculo").addEventListener("click", () => {
   let lista_maiusculo = lista_nomes.map(nome => nome.toUpperCase())
   renderizar2(lista_maiusculo)
})

document.getElementById("filtrar").addEventListener("click", () => {
   renderizar2("lista_filtrada")
})



function renderizar2(lista_qualquer){
const lista_nova = document.getElementById("lista_2")

lista_nova.innerHTML = ""

lista_qualquer.forEach(nome => {
   let li = document.createElement("li")
   li.innerText = nome
   lista_nova.appendChild(li)
})
}
