
let boxContent = document.querySelectorAll(".boxContent");
let tabLinks = document.getElementsByClassName("tabLinks");
let idItem = document.getElementById('Photoshop');
let back = document.querySelector('#back');
let forward = document.querySelector('#forward');
let tabContent = document.querySelectorAll('.tabContent');
let ItemSelected = [];
let currentPos = 0;
const PicInterval = 4000;
const arrPhotos = [
  'assets/LuisImage1.jpg','assets/LuisImage4.jpg',
  'assets/LuisImage6.jpg','assets/LuisSample01.jpg',
  'assets/LuisSample02.jpg','assets/LuisSample03.jpg',
  'assets/LuisTest20210924.jpg','assets/LuisSample05.jpg',
  'assets/LuisSample06.jpg'
];
const arrIllustra = [
  'assets/LuisLogo1-2.png','assets/LuisLogo1.png',
  'assets/LuisLogo2-2.png','assets/LuisLogo2.png',
  'assets/LuisLogo3-3.png','assets/LuisLogo3.png',
  'assets/LuisLogo4-4.png','assets/LuisLogo4.png',
  'assets/LuisLogo5-2.jpg','assets/LuisLogo5.png'
];
const arrJava = [
  'assets/Java-Accounting1.png','assets/Java-Accounting2.png',
  'assets/Java-Accounting3.png','assets/Java-Accounting4.png',
  'assets/Java-Accounting5.png','assets/Java-Accounting6.png',
  'assets/Java-Accounting7.png','assets/Java-Accounting8.png',
  'assets/Java-Accounting9.png','assets/Java-Accounting10.png',
  'assets/Java-Accounting11.png','assets/Java-Accounting12.png',
  'assets/Java-Accounting13.png','assets/Java-Accounting14.png',
  'assets/Java-Accounting15.png','assets/Java-Accounting16.png',
  'assets/Java-Accounting17.png'
]
const arrDrawing = [
  'assets/Drawing1.jpg','assets/Drawing2.jpg',
  'assets/Drawing3.jpg','assets/Drawing4.jpg',
  'assets/Drawing5.jpg','assets/Drawing6.jpg',
  'assets/Drawing7.jpg','assets/Drawing8.jpg'
]
const arrWallpap = [
  'assets/images3.jpeg','assets/images6.jpeg',
  'assets/images11.jpeg','assets/images12.jpeg',
  'assets/images14.jpeg','assets/images15.jpeg',
  'assets/images20.jpeg',
]

function OpenTabMenu(evt, Items) {
  for (let i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace(" active", "");
  }
  //document.getElementById(Items).style.display = "block";
  evt.currentTarget.className += " active";
  if(Items == 'Photoshop') {
    idItem.id = 'Photoshop';
    idItem.src = 'assets/LuisImage1.jpg';
    ItemSelected = arrPhotos;
    interval = setInterval(ForwardPic,PicInterval);
  }
  else if(Items == 'Illustrator') {
    idItem.id = 'Illustrator';
    idItem.src = 'assets/LuisLogo1-2.png';
    ItemSelected = arrIllustra;
    //document.getElementById(Items).style.display = "block";
  }
  else if(Items == 'Java') {
    idItem.id = 'Java';
    idItem.src = 'assets/Java-Accounting1.png';
    ItemSelected = arrJava;
  }
  else if(Items == 'Charcoa_Drawings') {
    idItem.id = 'Charcoa_Drawings';
    idItem.src = 'assets/Drawing1.jpg';
    ItemSelected = arrDrawing;
  }
  else{
    idItem.id = 'Wallpapers';
    idItem.src = 'assets/images3.jpeg';
    ItemSelected = arrWallpap;
  }
  RunCarousel();
}

function RunCarousel(){
  addEventListener('click',RenderPic); 
  forward.addEventListener('click',ForwardPic);
  back.addEventListener('click',BackPic);
}

function ForwardPic() {
  if(currentPos < ItemSelected.length - 1) {
    idItem.src = ItemSelected[currentPos + 1];
    currentPos++;
    //alert(ItemSelected.length);  
    //alert(currentPos);
  } 
  else {
    idItem.src = ItemSelected[0];
    currentPos = 0;  
  }
  RenderPic();  
}

function BackPic() {
  if(currentPos <= 0) {
    idItem.src = ItemSelected[ItemSelected.length - 1];
    currentPos = ItemSelected.length - 1;
  } 
  else {
    idItem.src = ItemSelected[currentPos - 1];
    currentPos--;
  }
  RenderPic();
}

function RenderPic () {
  tabContent.style.backgroundImage = `url(${ItemSelected[currentPos]})`; 
}
