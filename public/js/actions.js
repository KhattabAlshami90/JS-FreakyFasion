const myImg = document.getElementById("img");
const infoText = document.getElementById("infoText");
const cupe = document.getElementById("cupe");

const body = document.querySelector("body");
const fieldTextInfo = document.createElement("div");
fieldTextInfo.classList.add("fieldTextInfo");

const fieldTextFirstTitle = document.createElement("h3");
fieldTextFirstTitle.classList.add("sideInfoTitle");
const fieldTextFirstPara = document.createElement("p");
fieldTextFirstPara.classList.add("sideInfoText");
const fieldTextSecondTitle = document.createElement("h3");
fieldTextSecondTitle.classList.add("sideInfoTitle");
const fieldTextSecondPara = document.createElement("p");
fieldTextSecondPara.classList.add("sideInfoText");
fieldTextInfo.append(
  fieldTextFirstTitle,
  fieldTextFirstPara,
  fieldTextSecondTitle,
  fieldTextSecondPara
);

const frBtn = document.getElementById("frBtn");
const dotNetBtn = document.getElementById("dotNetBtn");
const itBtn = document.getElementById("itBtn");

const title1 = document.getElementById("title1");
const sub1_1 = document.getElementById("sub1-1");
const sub1_2 = document.getElementById("sub1-2");
const sub1_3 = document.getElementById("sub1-3");
const sub1_4 = document.getElementById("sub1-4");

const title2 = document.getElementById("title2");
const sub2_1 = document.getElementById("sub2-1");
const sub2_2 = document.getElementById("sub2-2");
const sub2_3 = document.getElementById("sub2-3");

const title3 = document.getElementById("title3");
const sub3_1 = document.getElementById("sub3-1");
const sub3_2 = document.getElementById("sub3-2");
const sub3_3 = document.getElementById("sub3-3");

const title4 = document.getElementById("title4");
const sub4_1 = document.getElementById("sub4-1");
const sub4_2 = document.getElementById("sub4-2");
const sub4_3 = document.getElementById("sub4-3");
const sub4_4 = document.getElementById("sub4-4");

frBtn.addEventListener("mouseover", FrontEndInfo);
frBtn.addEventListener("mouseleave", () => {
  CLS();
  menuButton.classList = "menu-button";
  if (mobBtns.lastChild.classList == "menu") mobBtns.lastChild.remove();
});

dotNetBtn.addEventListener("mouseover", DotNetInfo);
dotNetBtn.addEventListener("mouseleave", () => {
  menuButton.classList = "menu-button";
  CLS();
  if (mobBtns.lastChild.classList == "menu") mobBtns.lastChild.remove();
});

itBtn.addEventListener("mouseover", ITInfo);
itBtn.addEventListener("mouseleave", () => {
  menuButton.classList = "menu-button";
  CLS();
  if (mobBtns.lastChild.classList == "menu") mobBtns.lastChild.remove();
});

function ITInfo() {
  title1.innerHTML = "Programmering";
  sub1_1.innerHTML = "Java";
  sub1_2.innerHTML = "Python";
  sub1_3.innerHTML = "PHP";
  sub1_4.innerHTML = "C++";

  title4.innerHTML = "TalSystem";
  sub4_1.innerHTML = "Binary";
  sub4_2.innerHTML = "BCD";
  sub4_3.innerHTML = "Hexadecimala";

  title3.innerHTML = "Automation";
  sub3_1.innerHTML = "C";
  sub3_2.innerHTML = "Assembly";
  sub3_3.innerHTML = "PLC";

  title2.innerHTML = "Allmänt";
  sub2_1.innerHTML = "Algoritmer";
  sub2_2.innerHTML = "Datastrukturer";
  sub2_3.innerHTML = "Boolean algebra";

    fieldTextFirstTitle.innerText = "IT Teknik";
    fieldTextFirstPara.innerText = "Algoritmer, DataStrukturer, Binära, Hexadecimala, BCD TalSystem.";
    fieldTextSecondTitle.innerText = "Andra programmeringsSpråk";
    fieldTextSecondPara.innerText = "Java, C++, PHP..";

    body.appendChild(fieldTextInfo);
}

function FrontEndInfo() {
  title1.innerHTML = "Grundläggande";
  sub1_1.innerHTML = "HTML";
  sub1_2.innerHTML = "CSS";
  sub1_3.innerHTML = "JavaScript";
  sub1_4.innerHTML = "";

  title4.innerHTML = "Biblioteken";
  sub4_1.innerHTML = "ReactJS";
  sub4_2.innerHTML = "JQuery";
  sub4_3.innerHTML = "Bootstrap";
  sub4_4.innerHTML = "TailWind CSS ";

  title3.innerHTML = "Verktyg";
  sub3_1.innerHTML = "Next.js";
  sub3_2.innerHTML = "TypeScript";
  sub3_3.innerHTML = "SASS";

  title2.innerHTML = "Övrigt";
  sub2_1.innerHTML = "PhotoShop";
  sub2_2.innerHTML = "GIT ";
  sub2_3.innerHTML = "CLI";

  fieldTextFirstTitle.innerText = "Unika Sidor";
  fieldTextFirstPara.innerText =
    "PhotoShop och CSS ger stor möjlighet att ge siten unika avtryck.";
  fieldTextSecondTitle.innerText = "Snapp & Dynamisk";
  fieldTextSecondPara.innerText =
    "JavaScript, TypeScript, ReactJS, Sass och BoorStrap gör det snabbare att skapa dynamiska sidor.";

  body.appendChild(fieldTextInfo);
}

function DotNetInfo() {
    title1.innerHTML = "Data Lagring";
    sub1_1.innerHTML = "MS SQL";
    sub1_2.innerHTML = "ADO.NET";
    sub1_3.innerHTML = "Entity";
    sub1_4.innerHTML = "Framework";

    title4.innerHTML = "ASP.NET";
    sub4_1.innerHTML = "Web App";
    sub4_2.innerHTML = "MVC App";
    sub4_3.innerHTML = "Web API";

    title3.innerHTML = "Mobil-App";
    sub3_1.innerHTML = "XAML";
    sub3_2.innerHTML = "Xamarin";
    sub3_3.innerHTML = "";

    title2.innerHTML = "Grundläggande";
    sub2_1.innerHTML = "C#";
    sub2_2.innerHTML = "Razor pages";
    sub2_3.innerHTML = "Blazor";

    fieldTextFirstTitle.innerText = "ASP.Net Core";
    fieldTextFirstPara.innerText = "C#, Razor Pages, MVC, WebAPI.";
    fieldTextSecondTitle.innerText = ".Net DataBas";
    fieldTextSecondPara.innerText = "Ms-SQL, ADO.NET, Dapper, Entity FrameWork Core.";

    body.appendChild(fieldTextInfo);
}

function CLS() {
  title1.innerHTML = "IT";
  sub1_1.innerHTML = "Teknik";
  sub1_2.innerHTML = "";
  sub1_3.innerHTML = "";
  sub1_4.innerHTML = "";

  title2.innerHTML = "System";
  sub2_1.innerHTML = "Utveckling";
  sub2_2.innerHTML = "";
  sub2_3.innerHTML = "";

  title3.innerHTML = "Front-End";
  sub3_1.innerHTML = "Utveckling";
  sub3_2.innerHTML = "";
  sub3_3.innerHTML = "";

  title4.innerHTML = ".Net";
  sub4_1.innerHTML = "Utveckling";
  sub4_2.innerHTML = "";
  sub4_3.innerHTML = "";
  sub4_4.innerHTML = "";
  isMobMenuOpen=false;
  if (body.lastChild.classList == "fieldTextInfo") {
    body.lastChild.remove();
  }
}

