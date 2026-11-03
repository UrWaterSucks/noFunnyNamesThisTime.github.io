const pokemon = [
  { name: "Charmander", type: "fire", maxHp: 100, attack: 15 },
  { name: "Squirtle", type: "water", maxHp: 110, attack: 12 },
  { name: "Pikachu", type: "electric", maxHp: 95, attack: 18 },
  { name: "Bulbasaur", type: "grass", maxHp: 105, attack: 13 }
];

function filterSelection(){
const pokethemans = document.getElementById("select").value;
const typeFilter = pokemon
.filter((itm) => itm.type === document.getElementById("select").value)
.map((itm) => `${itm.name}, ${itm.type}, ${itm.maxHp}`)
//there's no way we're supposed to use template literals but goddammit if that's what i have to do
.join(', ');
const wrapThis = document.createElement("div");
wrapThis.innerHTML = ("");
document.body.appendChild(wrapThis)
const wrapThat = document.createElement("div");
wrapThis.innerHTML = typeFilter;
document.body.appendChild(wrapThis);
}

document.getElementById("select").addEventListener("change", filterSelection);
  

// console.log(typeFilter);



const typeReduce = pokemon.reduce((maxIt, itm) => maxIt + itm.maxHp, 0);

const wrapThisButItsReduceThisTime = document.createElement("div");
wrapThisButItsReduceThisTime.innerHTML = typeReduce;
document.body.appendChild(wrapThisButItsReduceThisTime);

const typeReduceTwo = pokemon.reduce((maxIt, itm) => maxIt + itm.attack, 0)/4;
//this does not feel correct. why are you not in parenthesis. this vexes me

const wrapThisButItsReduceTwoThisTime = document.createElement("div");
wrapThisButItsReduceTwoThisTime.innerHTML = typeReduceTwo;
document.body.appendChild(wrapThisButItsReduceTwoThisTime);