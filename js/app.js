
const Header = document.getElementsByTagName('header');
const Main = document.getElementsByTagName('main');
const idforh3 = document.getElementsByTagName('h3');
let Video = document.getElementsByTagName('video');
let IdHeader = document.getElementById('idHeader');
let MainDiv = document.getElementById('mainDiv');
let isOpen = false;

window.addEventListener("load",LoadFunction ,false);

function LoadFunction(){
    if(idforh3[0].id == 'portfolio'){
        Portfolio();
    }
    else if(idforh3[0].id == 'contact'){
        Contact();
        addEventListener("click",ToggleForm() ,true);
    }
}
function Portfolio(){
    Header[0].setAttribute("style",`width: 100%; height: 500px; 
        background: url('../assets/images6.jpeg'); 
        background-size: cover;`);
    IdHeader.style.cssText = `width: 100%; height: 500px;
        background: rgba(2, 2, 2, 0.5);`;
    Main[0].style.cssText = `width: 100%; height: 680px; 
        background: url('../assets/images3.jpeg');
        background-size: cover; `;
     
}
function Contact(){
    Header[0].style.cssText = `width: 100%; height: 500px; 
        background: url('../assets/images11.jpeg'); 
        background-size: cover;`;
    IdHeader.style.cssText = `width: 100%; height: 500px;
        background: rgba(2, 2, 2, 0.5);`;
    Main[0].style.cssText = `width: 100%; height: 1020px; 
        background: url('../assets/images12.jpeg');
        background-size: cover;`;
    MainDiv.style.cssText = `height: 1020px;`;
}
function ToggleForm() {
    if(isOpen) {
        $('#contactForm').animate({
            left: '0px'
        }, 330, 'swing');
        isOpen = false;
    }
    else {
        $('#contactForm').animate({
            left: '-340px' 
        }, 300, 'swing');
        isOpen = true;
    }
}

