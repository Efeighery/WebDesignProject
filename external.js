function videoLink(){
var str="Example of my work at Inglot";
var result= 
window.open("https://www.facebook.com/InglotCosmeticsIreland/videos/1788221377865174?vh=e&d=n&sfns=mo");
document.getElementById("INGLOT").innerHTML=result;
}

function videoLink2(){
var str="My appearance in Karen Bachini's video";
var result=
window.open("https://youtu.be/txWkNuTILEk");
document.getElementById("YOUTUBEVIDEO").innerHTML=result;
}

function imageShow(imgs) {
var expandedImage = document.getElementById("expandedImage");
var imageText = document.getElementById("imageText");
expandedImage.src = imgs.src;
imageText.innerHTML = imgs.alt;
expandedImage.parentElement.style.display = "block";
}