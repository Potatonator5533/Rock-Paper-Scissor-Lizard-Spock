// var path = window.location.pathname;
// var page = path.split("/").pop();
// // alert( page );
// alert(document.location)
// var test = 0;


// alert("page loaded")

// switch(page)
// {
//     case "index.html":

//     break;
// }

let PvPBtn = document.getElementById("PvPBtn");
let PvCBtn = document.getElementById("PvCBtn");
// var PvP = "PVCPUMode";

PvPBtn.addEventListener(('click'), function (e) {
    // PvP = "PVPMode";
    // alert(PvP);
    document.location.href = ("./pages/GameMode.html?PlayerMode=Player");
    // test = test + 1;
    // alert(test);
});

PvCBtn.addEventListener(('click'), function (e) {
    // PvP = "PVPMode";
    // alert(PvP);
    document.location.href = ("./pages/GameMode.html?PlayerMode=CPU");
    // test = test + 1;
    // alert(test);
});

// switch(page)
// {
//     case "index.html":



//     break;
//     case "GameMode.html":
//         // let gameMode2 = document.getElementById("gameMode2");
//         // let gameMode3 = document.getElementById("gameMode3");
//         // var gM = 1;

//         // gameMode2.addEventListener(('click'), function (e) {
//         //     gM = 2;
//         //     // gM2 = false;
//         //     // WhatGamemode();
//         // });
//         // gameMode3.addEventListener(('click'), function (e) {
//         //     gM = 3;
//         //     // gM3 = false;
//         //     // WhatGamemode();
//         // });
//     break;
//     case "VsPlayerBlue.html":
//         // let blueScissors = document.getElementById("blueScissors");
//         // let bluePaper = document.getElementById("bluePaper");
//         // let blueRock = document.getElementById("blueRock");
//         // let blueLizard = document.getElementById("blueLizard");
//         // let blueSpock = document.getElementById("blueSpock");
//         // var blueChoice = "";

//         // blueScissors.addEventListener(('click'), function (e) {
//         //     blueChoice = "Scissors";
//         //     alert(PvP);
//         //     if (PvP === true) {
//         //         window.location.href = "./VsPlayerRed.html";

//         //     } else {
//         //         window.location.href = "./Battle.html";
//         //         RandChoiceAPI();
//         //     }
//         // });
//         // bluePaper.addEventListener(('click'), function (e) {
//         //     blueChoice = "Paper";
//         //     alert(PvP);
//         //     if (PvP === true) {
//         //         window.location.href = "./VsPlayerRed.html";

//         //     } else {
//         //         window.location.href = "./Battle.html";
//         //         RandChoiceAPI();
//         //     }
//         // });
//         // blueRock.addEventListener(('click'), function (e) {
//         //     blueChoice = "Rock";
//         //     alert(PvP);
//         //     if (PvP === true) {
//         //         window.location.href = "./VsPlayerRed.html";

//         //     } else {
//         //         window.location.href = "./Battle.html";
//         //         RandChoiceAPI();
//         //     }
//         // });
//         // blueLizard.addEventListener(('click'), function (e) {
//         //     blueChoice = "Lizard";
//         //     alert(PvP);
//         //     if (PvP === true) {
//         //         window.location.href = "./VsPlayerRed.html";

//         //     } else {
//         //         window.location.href = "./Battle.html";
//         //         RandChoiceAPI();
//         //     }
//         // });
//         // blueSpock.addEventListener(('click'), function (e) {
//         //     blueChoice = "Spock";
//         //     alert(PvP);
//         //     if (PvP === true) {
//         //         window.location.href = "./VsPlayerRed.html";

//         //     } else {
//         //         window.location.href = "./Battle.html";
//         //         RandChoiceAPI();
//         //     }
//         // });
//     break;
//     case "VsPlayerRed.html":
//         // let redScissors = document.getElementById("redScissors");
//         // let redPaper = document.getElementById("redPaper");
//         // let redRock = document.getElementById("redRock");
//         // let redLizard = document.getElementById("redLizard");
//         // let redSpock = document.getElementById("redSpock");
//         // var redChoice = "";

//         // redScissors.addEventListener(('click'), function (e) {
//         //     redChoice = "Scissors";

//         // });
//         // redPaper.addEventListener(('click'), function (e) {
//         //     redChoice = "Paper";

//         // });
//         // redRock.addEventListener(('click'), function (e) {
//         //     redChoice = "Rock";

//         // });
//         // redLizard.addEventListener(('click'), function (e) {
//         //     redChoice = "Lizard";

//         // });
//         // redSpock.addEventListener(('click'), function (e) {
//         //     redChoice = "Spock";

//         // });
//     break;
//     case "Battle.html":
//         // let blueScore = document.getElementById("blueScore");
//         // let redScore = document.getElementById("redScore");
//         // var bS = 0;
//         // var rS = 0;

//     break;
//     case "Winner.html":

//     break;
// }



//let nextMatch = document.querySelector('#nextMatch');






// if(nextMatch.getAttribute('value') == 'Edit'){
//     nextMatch.style.display = 'none';
//     nextMatch.style.display = '';
// }














// window.onload = function NumOfBattles() {
//     togglePlayer.style.display = 'none';
//     toggleCPU.style.display = 'none';
//     if (PvP === true) {
//         togglePlayer.style.display = '';
//         console.log("Test");
//     }
//     if (PvC === true) {
//         toggleCPU.style.display = '';
//         console.log("Test");
//     }

// };
// blueScore.innerText = 3;
// redScore.innerText = 3;

// export { PvP }