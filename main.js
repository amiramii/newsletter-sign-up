const dialog=document.getElementById('dialog');
const submitButton=document.querySelector('.submit-button');
const pageOne=document.querySelectorAll('.flex-item');
const dismissButton=document.querySelector('.dismiss-btn');
const email=document.getElementById('email-address');

submitButton.addEventListener('click',(e)=>{
    e.preventDefault();
    checkInput();
});
dismissButton.addEventListener('click',()=>{
    document.getElementById('email-address').value.innerText="";
    pageOne.forEach((element)=>{
        element.style.display='';
    });
    dialog.classList.remove('show');
    
});
function checkInput(){
    const emailValue =email.value.trim();
    if(emailValue === ''){
        setErrorMessage("email is required");
    }else if(!isEmailValid(emailValue)){
        setErrorMessage("Email entered is not valid");
    }else{
        setErrorMessage("");
        email.classList.remove("input-error");
        pageOne.forEach((e)=>{
            e.style.display='none';
        })
        document.querySelector('.user-email').innerText=emailValue;
        dialog.classList.add('show');
        
    }

}
function setErrorMessage(message){
    email.classList.add("input-error");
    const emailError=document.querySelector('.email-error');
    emailError.innerText=message;
    
}
function isEmailValid(input){
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(input);
}