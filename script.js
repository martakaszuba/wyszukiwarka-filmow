var arr = [{"name":"Skazani na Shawshank","image":"https://ssl-gfx.filmweb.pl/po/10/48/1048/6925401.6.jpg","rate":"8.75","link":"https://www.filmweb.pl/Skazani.Na.Shawshank","count":"857 849"},{"name":"Nietykalni","image":"https://ssl-gfx.filmweb.pl/po/33/90/583390/7441162.6.jpg","rate":"8.64","link":"https://www.filmweb.pl/film/Nietykalni-2011-583390","count":"622 911"},
{"name":"Zielona mila","image":"https://ssl-gfx.filmweb.pl/po/08/62/862/7517878.6.jpg","rate":"8.61","link":"https://www.filmweb.pl/Zielona.Mila","count":"948 372"},{"name":"Ojciec chrzestny","image":"https://ssl-gfx.filmweb.pl/po/10/89/1089/7196615.6.jpg","rate":"8.59","link":"https://www.filmweb.pl/Ojciec.Chrzestny","count":"504 669"},
{"name":"Dwunastu gniewnych ludzi","image":"https://ssl-gfx.filmweb.pl/po/07/01/30701/7492190.6.jpg","rate":"8.54","link":"https://www.filmweb.pl/film/Dwunastu+gniewnych+ludzi-1957-30701","count":"198 108"},{"name":"Forrest Gump","image":"https://ssl-gfx.filmweb.pl/po/09/98/998/7314731.6.jpg","rate":"8.52","link":"https://www.filmweb.pl/Forrest.Gump","count":"934 269"},
{"name":"Lot nad kukułczym gniazdem","image":"https://ssl-gfx.filmweb.pl/po/10/19/1019/7386645.6.jpg","rate":"8.45","link":"https://www.filmweb.pl/Lot.Nad.Kukulczym.Gniazdem","count":"370 741"}];

var txt = document.querySelector("#txt");
var res = document.querySelector("#results");
txt.addEventListener("keyup", function(){
    var sortArr;

    res.innerHTML ="";
    if (txt.value.trim().length <2){
        return;	
    }
    else {
        sortArr = arr.filter(function(val){
        return val.name.toLowerCase().includes(txt.value.toLowerCase())
    })
    if (sortArr.length === 0){
        return;
    }
    sortArr.forEach(function(val){
        res.innerHTML+=`<div class="item">
        <div class="one-third">
        <img src =${val.image} class="img"/>
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
}
})