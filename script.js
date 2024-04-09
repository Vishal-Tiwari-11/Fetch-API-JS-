const URL= "https://cat-fact.herokuapp.com/facts"
let factpara= document.querySelector("#para")
let btn = document.querySelector("#btn")

const getFacts = async ()=>{
console.log("Getting Data........");
    let response= await fetch (URL)
console.log(response.status);
let data= await response.json();
// console.log(data[0].text);
factpara.innerText= data[1].text
}

btn.addEventListener("click", getFacts)
