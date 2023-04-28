const menu = document.querySelector('.menu');
const mobBtns = document.querySelector('.mobBtns');
const menuButton = document.querySelector('.menu-button');
const menuIcon = document.querySelector('.mobil-menu-icon');
var isMobMenuOpen = false;

menuButton.addEventListener('click', () => {
    if(!isMobMenuOpen){
            const mobMenu = document.createElement("nav");
            mobMenu.classList.add("menu");
            mobMenu.innerHTML = `<a id="mobil-fr">Front-End</a>
            <a id="mobil-dn">.Net&C#</a>
            <a id="mobil-it">IT</a>`;
            mobBtns.appendChild(mobMenu);
            const mobilFr = document.getElementById("mobil-fr");
            const mobilDn = document.getElementById("mobil-dn");
            const mobilIt = document.getElementById("mobil-it");
            mobilFr.classList.add("mobile-link");
            mobilDn.classList.add("mobile-link");
            mobilIt.classList.add("mobile-link");
            CLS();
            menuButton.classList.toggle("mobil-menu-icon-open");

            mobilFr.addEventListener("click", () => {
              mobilFr.classList='mobile-link-clicked';
              mobilDn.classList='mobile-link';
              mobilIt.classList = "mobile-link";
              FrontEndInfo();
            });
            mobilDn.addEventListener("click", () => {
              mobilFr.classList = "mobile-link";
              mobilDn.classList = "mobile-link-clicked";
              mobilIt.classList = "mobile-link";
              DotNetInfo();
            });
            mobilIt.addEventListener("click", () => {
              mobilFr.classList = "mobile-link";
              mobilDn.classList = "mobile-link";
              mobilIt.classList = "mobile-link-clicked";
              ITInfo();
            });
            isMobMenuOpen=true;
    }else{
        mobBtns.lastChild.remove();
        isMobMenuOpen=false;
        CLS();
        menuButton.classList.toggle("mobil-menu-icon-open");
    }


});







