

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

cityselect.innerHTML = ""
cityselect.disabled = true

fetch(url)
.then( res => res.json() )
.then(  cities=> {
  
      for(const city of cities) {
        cityselect.innerHTML += `<option value="${city.nome}">${city.nome}</option>`

        }
        cityselect.disabled = false

    })

}

document
.querySelector("select[name=uf]")
.addEventListener("change", getcities)

      
    const itemToCollect = document.querySelectorAll (".items-grid li")

    for (const item of itemToCollect) {
      item.addEventListener("click", handleSelectedItem)
    }

    let selectedItems = []
    
    function handleSelectedItem(event) {

      const itemli = event.target
     
     //Serve para adicionar ou remover uma classe com javascript
      itemli.classList.toggle("selected")

      const itemId = event.target.dataset.id




      //PARA VERIFICAR SE EXISTEM ITENS SELECIONADOS E COLETA-LOS

    const alreadySelected = selectedItems.findIndex( function (item) { 
      const itemFound = item == itemId
      return itemFound
      
    })



    // SE JA SELECIONADO REMOVER DA SELECAO

    if( alreadySelected >=0 ){
      const filteredItems = selectedItems.filter( item => {
        const itemIsDifferent = item != itemId
        return itemIsDifferent
      })

      selectedItems = filteredItems //remove os item filtrados acima 

    }
    else {
      selectedItems.push(itemId) //adiciona itens 

    }


    //atualizar o campo de itens selecionados

    collectedItems.value = selectedItems


   


      


      
    }


