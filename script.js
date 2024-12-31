const apikey = "e545cfc883ec014d693188440f59c9ac";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
let search= document.querySelector(".input");
let btn= document.querySelector(".button");

// async function fun (k){
//     let fullurl= apiurl+k+ `&appid=${apikey}`;
//     let temp = await fetch(fullurl);
//     let val = await temp.json();
//     console.log(val);

// }
btn.addEventListener("click", async ()=>{
    // fun(search.value);
    let fullurl= apiurl+search.value+ `&appid=${apikey}`;
    let temp = await fetch(fullurl);
    let val = await temp.json();
    console.log(val);

})