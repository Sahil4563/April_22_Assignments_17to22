const nameElement = document.getElementById('name')
const email = document.getElementById('email')
const password = document.getElementById('password')
const confirmPassword = document.getElementById('confirm-password')
const buttonElement = document.getElementById('submit-btn')
const nameSmall = document.getElementById('name-small')

const entireForm = document.querySelector('form')


entireForm.addEventListener('submit', submitForm)



function buttonClick(){
    console.log("button is clicked")
}



function submitForm(virat){
    virat.preventDefault()

    if(nameElement.value === ""){
        console.log("Name is Empty")
        nameElement.classList = "error"
        nameSmall.classList = "display"
    }else{
        nameElement.classList = "success"
    }

    if(email.value === ""){
        console.log("email is Empty")
        email.classList = "error"
    }else{
        email.classList = "success"
    }


    if(password.value === ""){
        console.log("password is Empty")
        password.classList = "error"
    }
    else
    {
        password.classList="success"
    }
    if(password.value !== confirmPassword.value){
        console.log('confirm password is not same as password')
        confirmPassword.classList = "error"
        password.classList = "error"
    }else
    {
        password.classList="success"
        confirmPassword.classList = "success"
    }
    if(password.value.includes("@") === false || password.value.includes("$") === false || password.value.includes("#") === false)
    {
        confirmPassword.classList = "error"
        password.classList = "error"
        console.log('password should contain @,#,$') 
    }

    



    if(confirmPassword.value === ""){
        console.log("confirm password is Empty")
        confirmPassword.classList = "error"
        
    }
   
}