const form = document.getElementById('formInputs')
const fName = document.getElementById('fName')
const lName = document.getElementById('lName')
const email = document.getElementById('email')
const password = document.getElementById('password')
const iconError = document.querySelectorAll('.imgError')
const pError = document.querySelectorAll('.pError')
const show = document.querySelector('.show')

form.onsubmit = (e) => {
    e.preventDefault()
    let valid = true
    function validateForm () {
        let regexName = /^[a-zA-Z]{3,15}$/
        let regexEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/
        let regexPassword = /(?=^.{8,}$)((?=.*\d)(?=.*\W+))(?![.\n])(?=.*[A-Z])(?=.*[a-z]).*$/
        if(!regexName.test(fName.value)) {
            errorValidation(fName, iconError[0], pError[0], "fill this field correctly") 
            valid = false
        } else {
            sucessValidation(fName, iconError[0], pError[0])    
        } 
        if (!regexName.test(lName.value)) {
            errorValidation(lName, iconError[1], pError[1], "fill this field correctly")
            valid = false
        } else {
            sucessValidation(lName, iconError[1], pError[1])
        } 
        if (!regexEmail.test(email.value)) {
            errorValidation(email, iconError[2], pError[2], "Looks like this is not an email")
            valid = false
        } else {
            sucessValidation(email, iconError[2], pError[2])
        }
        if (!regexPassword.test(password.value)) {
            errorValidation(password, iconError[3], pError[3], "your password must contain uppercase, lowercase, numbers and special digits")
            valid = false
        } else {
            sucessValidation(password, iconError[3], pError[3])
        }
    }
    validateForm()
    if (valid === true) {
        form.submit()
    }
}



show.onclick = () => {
    if(password.getAttribute("type") === "text"){
        password.setAttribute("type", "password")
        show.setAttribute("src", "images/eyeOpen.svg")
    } else {
        password.setAttribute("type", "text")
        show.setAttribute("src", "images/eye.svg")
    }
}

function passwordCheck () {
    const pLength = document.querySelector('.passwordLength')
    password.onkeyup = (e) => {
        pLength.innerText = `Password length: ${password.value.length}`
    }
}

passwordCheck()

function errorValidation (input, iconError, pError, message) {
    input.setAttribute("class", "error")
    iconError.setAttribute("class", "imgError active")
    pError.setAttribute("class", "pError active")
    pError.textContent = message
}

function sucessValidation (input, iconError, pError) {
    input.removeAttribute("class")
    iconError.classList.remove('active')
    pError.classList.remove('active') 
}