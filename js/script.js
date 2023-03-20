// let doc = document
// let form_inputs = doc.querySelectorAll('input')
// let btn = doc.querySelector('button')


// const checkInputs = (inputs) => {
//     for(let item of inputs){
//         if(!item.value) {
//             item.style.border = '2px solid red';
//         }
        
//     }
//     console.log('works')
// }


// btn.addEventListener("click", (event) => {
//     event.preventDefault()
//     checkInputs(form_inputs)
// })





// let analiz = doc.querySelector('.chek')
// let all = doc.querySelector('.all')
// let need = doc.querySelector('.need')
// let succes = doc.querySelector('.succes')
// let error = doc.querySelector('.error')

// function check_form (li){
// let all = li.lenght
// let need = analiz.lenght
// let succes = 0
// let error = 0



// }




// let doc = document

// let form = doc.querySelector('.form')
// let submit = doc.querySelector('#submit')
// let inputs = doc.querySelectorAll('.input')
// let req_Inputs = doc.querySelectorAll('.required')

// let all = doc.querySelector('#all')
// let need = doc.querySelector('#need')
// let success = doc.querySelector('#success')
// let error = doc.querySelector('#error')

// submit.addEventListener('click', (event) => {
//     event.preventDefault()

//     let all = inputs.length
//     let need = req_Inputs.length
//     let success = 0;
//     let error = 0;
//     for(let input of req_Inputs) {
//         if(input.value) {
//             success++
//         }
//         else  {
//             input.style.border = '3px solid red'
//             error++
//         }
//     }

//     if(error == 0) {
//         for(let input of inputs) {
//             input.value = ''
//         }
//         alert('Data has been sent. Thank you!')
//     }

//     for(let input of inputs) {
//         input.style.border = '1px solid black'
//     }

//     all.textContent = `All: ${all}`
//     need.textContent = `Need: ${need}`
//     success.textContent = `Succes:${success} / ${need}`
//     error.textContent = `Error:${error} / ${need}`
// })


let doc = document

let form = doc.querySelector('.form')
let submit = doc.querySelector('#submit')
let inputs = doc.querySelectorAll('.input')
let req_Inputs = doc.querySelectorAll('.required')

let all = doc.querySelector('#all')
let need = doc.querySelector('#need')
let success = doc.querySelector('#success')
let error = doc.querySelector('#error')

submit.addEventListener('click', (event) => {
    event.preventDefault()
    restartForm()

    let allInputs = inputs.length
    let reqInputs = req_Inputs.length
    let successCount = 0;
    let errorCount = 0;

    for(let input of req_Inputs) {
        if(input.value) {
            successCount++
        }
        else  {
            input.style.border = '2px solid red'
            errorCount++
        }
    }

    if(errorCount == 0) {
        for(let input of inputs) {
            input.value = ''
        }
       
    }

    all.textContent = `All: ${allInputs}`
    need.textContent = `Need: ${reqInputs}`
    success.textContent = `Success:${successCount} / ${reqInputs}`
    error.textContent = `Error:${errorCount} / ${reqInputs}`
})

function restartForm() {
    for(let input of inputs) {
        input.style.border = '1px solid black'
    }
}   