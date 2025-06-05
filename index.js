document.body.style.backgroundColor="silver"
document.body.style.margin="5%"
document.getElementById("sell").style.textAlign="center"
document.getElementById("title").style.color="green"
document.getElementById("title").style.fontSize="3em"
document.getElementById("title").style.fontFamily='kurale'
document.getElementById("sell").style.fontSize="2em"
document.getElementById("sell").style.fontFamily='kurale'
document.getElementById("title").style.textAlign="center"
document.querySelectorAll("h3").forEach(h3=>{
    h3.style.textAlign="center"
    h3.style.textTransform="uppercase"
    h3.style.fontFamily='overpass'
    h3.style.marginBottom="3em"
   
});

const fruits=document.getElementById("fruList");
const newFruit=document.createElement("li");
newFruit.textContent="Cherry";
fruits.append(newFruit);

const veggies=document.querySelectorAll("ul")[1]
const newVeg =document.createElement("li");
newVeg.textContent="Broccolli"
veggies.appendChild(newVeg)

const fruitImages=[
    {src: "image/mango.jpeg", alt: "mango"},
    {src: "image/banana.jpg", alt: "banana"},
    {src: "image/watermelon.jpg", alt: "watermelon"},
    {src: "image/cherry.jpeg", alt: "cherry"}
];

const fruitsList=document.getElementById("fruList");
fruitImages.forEach(item =>{
    const img= document.createElement("img");
    img.src=item.src;
    img.alt=item.alt;
    img.style.width="130px";
    img.style.height="130px";
    img.style.borderRadius="10px";
    img.style.marginLeft="70px"
    img.style.boxShadow='0 2px 8px rgba(0,0,0,15)'
    fruitsList.parentNode.insertBefore(img,fruitsList)


});

const vegImages=[
    {src: "image/onion.jpg", alt: "onion"},
    {src: "image/tomato.jpg", alt: "tomato"},
    {src: "image/kale.jpg", alt: "kale"},
    {src: "image/brocoli.jpg", alt: "brocoli"}
];

const veggiesList=document.getElementById("veggieList");
vegImages.forEach(item =>{
    const img= document.createElement("img");
    img.src=item.src;
    img.alt=item.alt;
    img.style.width="130px";
    img.style.height="130px";
    img.style.borderRadius="10px";
    img.style.marginLeft="70px"
    img.style.boxShadow='0 2px 8px rgba(0,0,0,15)'
    veggiesList.parentNode.insertBefore(img,veggiesList)


});


const extraFruits=[
    {name: "Apples" ,src: "image/apple.jpg", alt: "apple"},
    {name: "Grapes", src: "image/grape.jpg", alt: "grape"},
    {name: "Avocados", src: "image/avocado.jpeg", alt: "avocado"},
    {name: "Passion", src: "image/passion.jpeg", alt: "passion"}
];
let fruitIndex=0;

document.getElementById("addFruit").addEventListener("click", function(){
    if (fruitIndex< extraFruits.length){
        const newFruit = document.createElement("li");
        newFruit.textContent = extraFruits[fruitIndex].name;
        fruits.appendChild(newFruit);

        const img=document.createElement("img");
        img.src = extraFruits[fruitIndex].src;
        img.alt=extraFruits[fruitIndex].alt
        img.style.width="130px";
        img.style.height="130px";
        img.style.borderRadius="10px"
        img.style.marginLeft="70px"
        img.style.boxShadow='0 2px 8px rgba(0,0,0,15)'
        fruitsList.parentNode.insertBefore(img, fruitsList);
        fruitIndex++;
    }else{
        alert("Sorry, that's all the fruits we have for you today ):")
    }
});

const extraVeggie=[
    {name: "Spinach" ,src: "image/spinach.jpg", alt: "spinach"},
    {name: "Carrot", src: "image/carrot.jpeg", alt: "carrot"},
    {name: "Courgette", src: "image/courgette.jpg", alt: "courgette"},
    {name: "Lettuce", src: "image/lettuce.jpg", alt: "lettuce"}
];
let veggieIndex=0;

document.getElementById("addVeggie").addEventListener("click", function(){
    if (veggieIndex< extraVeggie.length){
        const newVeggie = document.createElement("li");
        newVeggie.textContent = extraVeggie[veggieIndex].name;
        veggies.appendChild(newVeggie);

        const img=document.createElement("img");
        img.src = extraVeggie[veggieIndex].src;
        img.alt=extraVeggie[veggieIndex].alt
        img.style.width="130px";
        img.style.height="130px";
        img.style.borderRadius="10px"
        img.style.marginLeft="70px"
        img.style.boxShadow='0 2px 8px rgba(0,0,0,15)'
        veggiesList.parentNode.insertBefore(img, veggiesList);
        veggieIndex++;
    }else{
        alert("Sorry, that's all the veggies we have for you today ):")
    }
});

document.getElementById("addFruit").style.padding="1em"
document.getElementById("addFruit").style.paddingLeft="4em"
document.getElementById("addFruit").style.paddingRight="4em"
document.getElementById("addFruit").style.borderRadius="1em"
document.getElementById("addFruit").style.border="none"
document.getElementById("addFruit").style.backgroundColor="maroon"
document.getElementById("addFruit").style.color="white"
document.getElementById("addFruit").style.cursor="pointer"

const addFruitBtn = document.getElementById("addFruit");

addFruitBtn.addEventListener("mouseenter", function() {
    addFruitBtn.style.backgroundColor = "green";
    addFruitBtn.style.color = "yellow";
});

addFruitBtn.addEventListener("mouseleave", function() {
    addFruitBtn.style.backgroundColor = "maroon";
    addFruitBtn.style.color = "white";
});
 
document.getElementById("addVeggie").style.padding="1em"
document.getElementById("addVeggie").style.paddingLeft="4em"
document.getElementById("addVeggie").style.paddingRight="4em"
document.getElementById("addVeggie").style.borderRadius="1em"
document.getElementById("addVeggie").style.border="none"
document.getElementById("addVeggie").style.backgroundColor="maroon"
document.getElementById("addVeggie").style.color="white"
document.getElementById("addVeggie").style.cursor="pointer"

const addVeggieBtn = document.getElementById("addVeggie");

addVeggieBtn.addEventListener("mouseenter", function() {
    addVeggieBtn.style.backgroundColor = "green";
    addVeggieBtn.style.color = "yellow";
});

addVeggieBtn.addEventListener("mouseleave", function() {
    addVeggieBtn.style.backgroundColor = "maroon";
    addVeggieBtn.style.color = "white";
});
document.getElementById("addCart").style.padding="1em"
document.getElementById("addCart").style.paddingLeft="4em"
document.getElementById("addCart").style.paddingRight="4em"
document.getElementById("addCart").style.borderRadius="1em"
document.getElementById("addCart").style.border="none"
document.getElementById("addCart").style.backgroundColor="maroon"
document.getElementById("addCart").style.color="white"
document.getElementById("addCart").style.cursor="pointer"
document.getElementById("addCart").style.float="right"



const addCartBtn = document.getElementById("addCart");

addCartBtn.addEventListener("mouseenter", function() {
    addCartBtn.style.backgroundColor = "gold";
    addCartBtn.style.color = "black";
});

addCartBtn.addEventListener("mouseleave", function() {
    addCartBtn.style.backgroundColor = "maroon";
    addCartBtn.style.color = "white";
});

document.getElementById("addCart").addEventListener("click", function (){
    alert ("Item added to cart")
})
 
