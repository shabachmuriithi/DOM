document.body.style.backgroundColor="silver"
document.body.style.margin="5%"
document.getElementById("sell").style.textAlign="center"
document.getElementById("title").style.color="green"
document.getElementById("title").style.textAlign="center"
document.querySelectorAll("h3").forEach(h3=>{
    h3.style.textAlign="center"
});
document.querySelectorAll("h3").forEach(h3=>{
    h3.style.textTransform="uppercase"
});
const fruits=document.getElementById("fruList");
const newFruit=document.createElement("li");
newFruit.textContent="Cherry";
fruits.append(newFruit);

const veggies=document.querySelectorAll("ul")[1]
const newVeg =document.createElement("li");
newVeg.textContent="Broccolli"
veggies.appendChild(newVeg)

const images=document.querySelectorAll("img")
images.forEach(img =>{
    img.style.width = "130px"
    img.style.height = "130px"
    img.style.borderRadius="10px"
    img.style.boxShadow='0 2px 8px rgba(0,0,0,15)'
    img.style.transform="translate(20px, 10px)"
    img.style.marginLeft="8em"
})

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
    img.style.marginLeft="100px"
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
    img.style.marginLeft="100px"
    veggiesList.parentNode.insertBefore(img,veggiesList)


});

docume


