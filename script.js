
var txt = document.querySelector("#txt");
var res = document.querySelector("#results");
var newArr;
txt.addEventListener("keyup", function(){
var xhr = new XMLHttpRequest();
xhr.open("GET", "dane.json", true);
xhr.onload = function(){
    if (this.status === 200){
        res.innerHTML ="";
        var data = JSON.parse(this.responseText);
            newArr = data.filter(function(val){
                return val.name.toLowerCase().includes(txt.value.toLowerCase()) && txt.value !=="" && txt.value.length>1;
            })
        }
        newArr.forEach(function(val){
        res.innerHTML +=`<div class="item">
        <div class="one-third">
        <img src =${val.image} class="img" alt="brak obrazka"/>
        </div>
        <div class="two-third">
        <a href=${val.link} target="_blank">
        <h2 class="name">${val.name}</h2>
        </a>
        <p class="rate">Ocena: ${val.rate}</p>
        <p class="count">Liczba głosów: ${val.count}</p>
        </div>
        </div>`
    })
    var img = document.querySelectorAll("img");
    img.forEach(function(val){
        if(val.src.includes("class")){
            val.remove();
        }
    })

    }
xhr.send();
})