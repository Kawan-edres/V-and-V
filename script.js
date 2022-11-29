let dark=document.querySelector(".dark-mode");
let body= document.querySelector("body")
let bg="#0a0a23"

let lastName=document.querySelector('.lastName');
let error= document.querySelector('.error');
let pass= document.querySelector('.pass');
console.log(error);

let form=document.querySelector('form');

form.addEventListener('submit',(e)=>{
    e.preventDefault();

    if(lastName.value.length>=3 && lastName.value.length<=12){
        pass.innerHTML+="Pass"

        alert("Pass");
    }

    else{
        error.innerHTML+="Erorr"
        alert("char length should be >=3 or <=12");
    }

    
    

})
dark.addEventListener("click",(e)=>{

    if(bg==="#0a0a23")bg="#fff"
    else bg="#0a0a23";
    body.style.background=bg;
})

