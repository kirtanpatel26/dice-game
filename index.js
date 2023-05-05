//first image
let randomNumber1 = Math.floor(Math.random()*6 + 1); 
let randomImage = "dice" + randomNumber1 + ".png";
let randomImageSource = "images/" + randomImage;
let image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImageSource);

//second image
let randomNumber2 = Math.floor(Math.random()*6 + 1); 
let randomImage2 = "images/dice" + randomNumber2 + ".png";
// let randomImageSource2 = "images/" + randomImage2;
document.querySelectorAll("img")[1].setAttribute("src",randomImage2);;


//changing h1 tag 
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML =  "🚩The Winner Is Player1";
}
else if(randomNumber2 > randomNumber1){
    document.querySelector("h1").innerHTML = "The Winner Is Player2🚩";
}
else{
    document.querySelector("h1").innerHTML = "Draw!!";
}
