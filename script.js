const URL= "https://cat-fact.herokuapp.com/facts"
let factpara= document.querySelector("#para")
let btn = document.querySelector("#btn")

// ===========  async-await ===========
const getFacts = async ()=>{
console.log("Getting Data........");
    let response= await fetch (URL)
console.log(response.status);
let data= await response.json();
// console.log(data[0].text);
factpara.innerText= data[1].text
}

// ========== promise ===========
// function getFacts() {
//     fetch(URL)
//         .then((response) => {
//             return response.json();
//         })
//         .then((data) => {
//             console.log(data);
//             factpara.innerText = data[3].text
//         })
// }

btn.addEventListener("click", getFacts)
