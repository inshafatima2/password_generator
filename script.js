const password=document.getElementById("password");
const copybtn=document.getElementById("copybtn");
const passValue=document.getElementById("passValue");
const passlength=document.getElementById("slider");
const getPassword=document.getElementById("getPassword");

const msg=document.getElementById("msg");

const upperCase="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase="abcdefghijklmnopqrstuvwxyz";
const number="1234567890";
const symbol="!@#$%^&*()?_";

const allchars=upperCase+lowerCase+number+symbol;


passlength.addEventListener("input",()=>{
    passValue.textContent=passlength.value;
})

getPassword.addEventListener("click",()=>{
    let pswd=""
    pswd+=upperCase[Math.floor(Math.random()*upperCase.length)]
    pswd+=lowerCase[Math.floor(Math.random()*lowerCase.length)]
    pswd+=number[Math.floor(Math.random()*number.length)]
    pswd+=symbol[Math.floor(Math.random()*symbol.length)]
    while(pswd.length<passlength.value){
        const randomIndex=Math.floor(Math.random()*allchars.length);
        pswd+=allchars[randomIndex];
    }
    password.value=pswd;
    

})

copybtn.addEventListener("click",()=>{
    if(password.value===""){
        msg.textContent="you need to generate a password!!!";
        msg.classList.add("red");
        setTimeout(()=>msg.textContent="",2000)
        return;
    }
    navigator.clipboard.writeText(password.value);
    msg.textContent="password copied!!";
    setTimeout(()=>msg.textContent="",2000)
    msg.classList.add("green");

})
