let screenWidth = window.innerWidth;
let screenHeight = window.innerHeight;


//
// geef de vis een random positie en een random kleur
//

for (fish = 0; fish < 100; i++){
// pak de breedte en de hoogte


let fishes = document.getElementsByTagName("fish")
let fish = fishes[0]
fish.style.left = "200px"
fish.style.top = "100px"
fish.style.webkitFilter = "hue-rotate(200deg)"
fish.style.filter = "hue-rotate(200deg)"
}
//
// geef de bubble een random positie
//
let bubbles = document.getElementsByTagName("bubble")
let bubble = bubbles[0]
bubble.style.left = "200px"
bubble.style.top = "0px"

//
// roep een functie aan als alles geladen is
//
window.addEventListener("load", function () {
    console.log("start het aquarium")
})
