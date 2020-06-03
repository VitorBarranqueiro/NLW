

function populateufs() {
  const ufselect =  document.querySelector("select[name=uf]")

  fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
  .then( res => res.json() )
  .then(  states => {

        for(let state of states) {
          ufselect.innerHTML += `<option value="${state.id}">${state.nome}</option>`

        }

        


  } )
}

populateufs()


function getcities (event) {
  const cityselect = document.querySelector("select[name=city]")
  
  const stateinput = document.querySelector("input[name=state]")

  const indexofselectedstate = event.target.selectedIndex
  stateinput.value = event.target.options[indexofselectedstate].text

  console.log(event.target.value)

  const ufValue = event.target.value

const url = `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${ufValue}/municipios`



fetch(url)
.then( res => res.json() )
.then(  cities=> {

      for(const city of cities) {
        cityselect.innerHTML += `<option value="${city.id}">${city.nome}</option>`

        }
        cityselect.disabled = false

    })

}

document
.querySelector("select[name=uf]")
.addEventListener("change", getcities)

      
    