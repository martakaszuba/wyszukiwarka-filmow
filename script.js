var div = document.querySelector("#main");
var inptxt = document.querySelector("#txt");
var newArr;
inptxt.addEventListener("keyup", function(){
var xhr = new XMLHttpRequest();
xhr.open("GET", "data.json", true);
xhr.onload = function(){
    if (this.status === 200){
        div.innerHTML ="";
        var data = JSON.parse(this.responseText);
            newArr = data.filter(function(val){
                return val.title.toLowerCase().includes(inptxt.value.toLowerCase()) && inptxt.value !=="" && inptxt.value.length>1;
            })
        }
        newArr.forEach(function(val){
        div.innerHTML +=`<div class ="product">
    <a class="title" href= ${val.link} target="_blank">${val.title}</a>
    <p class="position">Pozycja na filmwebie: ${val.position}</p>
    <p class="rate">Ocena: ${val.rate}</p>
    <p class="count">Liczba głosów: ${val.count}</p>
    </div>`
    })
    }
xhr.send();
})