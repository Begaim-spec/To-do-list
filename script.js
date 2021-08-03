const addText = document.querySelector('.add-text')
const addBtn = document.querySelector('.add-btn')
const list = document.querySelector('.list')
const delAll = document.querySelector('.del-all')
const checkbox = document.querySelector('.checkbox')

addBtn.addEventListener('click', () => {
    if (addText.value.trim()){
        list.innerHTML += `<li> 
                          <input type="checkbox">
                          ${addText.value}
                          <button class="del-btn">Удалить</button>
                       </li>`
    }
    addText.value = ""
})
list.addEventListener('click', (event) => {
    if (event.target.classList[0] === 'del-btn'){
        event.target.parentNode.remove()
    }
})

addText.addEventListener("keydown", (event) =>  {
    if (event.keyCode === 13){
        document.querySelector('.add-btn').click()
    }
});
delAll.removeEventListener('click', (event) => {
       if (event.target.classList === 'list'){
           event.target.classList.remove()
       }
})
delAll.addEventListener('click', () => {
    list.innerHTML =''
    addText.innerHTML = ''
})

checkbox.addEventListener('click', () => {

})