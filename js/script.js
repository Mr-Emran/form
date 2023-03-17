let doc = document
let form_inputs = doc.querySelectorAll('input')
let btn = doc.querySelector('button')


const checkInputs = (inputs) => {
    for(let item of inputs){
        if(!item.value) {
            item.style.border = '2px solid red';
        }
        
    }
    console.log('works')
}


btn.addEventListener("click", (event) => {
    event.preventDefault()
    checkInputs(form_inputs)
})





let analiz = doc.querySelector('.chek')
let all = doc.querySelector('.all')
let need = doc.querySelector('.need')
let succes = doc.querySelector('.succes')
let error = doc.querySelector('.error')

function check_form (li){
let all = li.lenght
let need = analiz.lenght
let succes = 0
let error = 0



}