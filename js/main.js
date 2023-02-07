let rating=document.querySelector(".rating");
let submit=document.querySelector("#submit");
let thankYou=document.querySelector(".thank-you");


const submitfunc=()=>{
    rating.classList.add("hidden");
    thankYou.classList.remove("hidden")
}
const rateSelected=(a)=>{
    let a1=document.getElementById(a);
    document.querySelector(".rate-selected").innerHTML=`<p>You selected ${a1.innerText} out of 5</p>`;
    for(let i=1;i<=5;i++){
        document.querySelector(`#rateBtn${i}`).classList.remove("active")
        
    }
    a1.classList.add("active");
}