//procurar botao
document.querySelector("#add-time").addEventListener('click', clone_field)

//quando clicar no botao

//executar uma ação
function clone_field() {
    //duplicar campos de hora. que campos?
    //return all the found elements with the given name
    const newFieldContainer = document.querySelector(".schedule-item").cloneNode(true) //clona tags html
    
    //limpar os campos
    const fields = newFieldContainer.querySelectorAll('input')
    //iterates through the fields and clean it all
    fields.forEach(function(element) {
        console.log(element.value)
        element.value = ""
    });

    //colocar na página. aonde?
    document.querySelector("#schedule-items").appendChild(newFieldContainer)

}    

