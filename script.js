const characters = [
    {
      "id": 1,
      "name": "Luke Skywalker",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/2/20/LukeTLJ.jpg",
      "homeworld": "tatooine"
    },
    {
      "id": 2,
      "name": "C-3PO",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/3/3f/C-3PO_TLJ_Card_Trader_Award_Card.png",
      "homeworld": "tatooine"
    },
    {
      "id": 3,
      "name": "R2-D2",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/ArtooTFA2-Fathead.png",
      "homeworld": "naboo"
    },
    {
      "id": 4,
      "name": "Darth Vader",
      "pic": "https://vignette.wikia.nocookie.net/fr.starwars/images/3/32/Dark_Vador.jpg",
      "homeworld": "tatooine"
    },
    {
      "id": 5,
      "name": "Leia Organa",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/f/fc/Leia_Organa_TLJ.png",
      "homeworld": "alderaan"
    },
    {
      "id": 6,
      "name": "Owen Lars",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/OwenCardTrader.png",
      "homeworld": "tatooine"
    },
    {
      "id": 7,
      "name": "Beru Whitesun lars",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cc/BeruCardTrader.png",
      "homeworld": "tatooine"
    },
    {
      "id": 8,
      "name": "R5-D4",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/cb/R5-D4_Sideshow.png",
      "homeworld": "tatooine"
    },
    {
      "id": 9,
      "name": "Biggs Darklighter",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/0/00/BiggsHS-ANH.png",
      "homeworld": "tatooine"
    },
    {
      "id": 10,
      "name": "Obi-Wan Kenobi",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/4e/ObiWanHS-SWE.jpg",
      "homeworld": "stewjon"
    },
    {
      "id": 11,
      "name": "Anakin Skywalker",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/6f/Anakin_Skywalker_RotS.png",
      "homeworld": "tatooine"
    },
    {
      "id": 12,
      "name": "Wilhuff Tarkin",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c1/Tarkininfobox.jpg",
      "homeworld": "eriadu"
    },
    {
      "id": 13,
      "name": "Chewbacca",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/4/48/Chewbacca_TLJ.png",
      "homeworld": "kashyyyk"
    },
    {
      "id": 14,
      "name": "Han Solo",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/e2/TFAHanSolo.png",
      "homeworld": "corellia"
    },
    {
      "id": 15,
      "name": "Greedo",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/c/c6/Greedo.jpg",
      "homeworld": "Rodia"
    },
    {
      "id": 16,
      "name": "Jabba Desilijic Tiure",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/7/7f/Jabba_SWSB.png",
      "homeworld": "tatooine"
    },
    {
      "id": 18,
      "name": "Wedge Antilles",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/6/60/WedgeHelmetless-ROTJHD.jpg",
      "homeworld": "corellia"
    },
    {
      "id": 19,
      "name": "Jek Tono Porkins",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/e/eb/JekPorkins-DB.png",
      "homeworld": "bestine"
    },
    {
      "id": 20,
      "name": "Yoda",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d6/Yoda_SWSB.png",
    },
    {
      "id": 21,
      "name": "Palpatine",
      "pic": "https://vignette.wikia.nocookie.net/starwars/images/d/d8/Emperor_Sidious.png",
      "homeworld": "naboo"
    },
  ];
    

    const toggle_btn = document.getElementById("toggle-btn");
    const row = document.getElementById("row");

 
    function toggleCharacters(){
if (row.innerHTML === "") { 
  
  toggle_btn.classList.remove("btn-success");
  toggle_btn.classList.add("btn-danger");
  toggle_btn.innerText ="Karakterleri Gizle";

var i;
for(i =0 ; i<characters.length; i++) {
let element=document.createElement("div");
element.classList.add("col-4");
element.innerHTML =  `<div class="card" style="width: 18rem;">
<img src="${characters[i].pic}"
class="card-img-top"
  alt="...">
<div class="card-body">
  <h5 class="card-title">${characters[i].name}</h5>
  <p class="card-text">${characters[i].homeworld}</p>
</div>
</div>`;

row.appendChild(element);
  
} 
} else {
  toggle_btn.classList.add("btn-success");
  toggle_btn.classList.remove("btn-danger");
      row.innerHTML = "";
      toggle_btn.innerText ="Karakterleri Göster";
} 
 }



const  homeworldsRaw = [];

for (var i=0; i<characters.length; i++){
  homeworldsRaw.push(characters[i].homeworld ?? "other");
};
// console.log(homeworldsRaw);


const homeworldsUnique = [...new Set(homeworldsRaw)];
// console.log(homeworldsUnique);


const homeworldsLowercase = homeworldsUnique.map(function(e) {
  return e.toLowerCase();
});
// console.log(homeworldsLowercase);

const homeworlds = homeworldsLowercase;
// console.log(homeworlds);

var i;
for(i =0 ; i<homeworlds.length; i++) {
let element=document.createElement("div");
element.classList.add("form-check");
element.innerHTML =  `
<input class="form-check-input" type="radio" name="homeworld"  onclick="handleClick(this)"; id="homeworld-${homeworlds[i]}" value="${homeworlds[i]}" checked>
<label class="form-check-label"   for="homeworld-${homeworlds[i]}">
${homeworlds[i]}
</label>
`;

filter_group.appendChild(element);
}
// console.log(homeworlds);



let filteredHomeworld = 0;
function handleClick(homeworld) {  
  filteredHomeworld = homeworld.value;
    // console.log(filteredHomeworld);
}

const filter_form =document.getElementById('filter_form');

filter_form.addEventListener("submit", (e) =>{
  e.preventDefault();
  let filteredHomeworld ="";
  const data = new FormData(filter_form);
  
  for (const entry of data ){
    filteredHomeworld = entry[1];
  }
  FilteredCharacters(filteredHomeworld);
});

function FilteredCharacters(filteredHomeworld){
  if (row.innerHTML === "") { 
    
    toggle_btn.classList.remove("btn-success");
    toggle_btn.classList.add("btn-danger");
    toggle_btn.innerText ="Karakterleri Gizle";
  }
  row.innerHTML = "";
  
  var i;
  for(i =0 ; i<characters.length; i++) {
if( 
  (characters[i].homeworld ?? "other").toLowerCase() === filteredHomeworld || !filteredHomeworld)
  {let element=document.createElement("div");
  element.classList.add("col-4");
  element.innerHTML =  `<div class="card" style="width: 18rem;">
  <img src="${characters[i].pic}"
  class="card-img-top"
    alt="...">
  <div class="card-body">
    <h5 class="card-title">${characters[i].name}</h5>
    <p class="card-text">${characters[i].homeworld}</p>
  </div>
  </div>`;

  row.appendChild(element);
    
  } 
}
  };
   