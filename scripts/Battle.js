let player2Text = document.getElementById("player2Text");
let player1Choice = document.getElementById("player1Choice");
let player2Choice = document.getElementById("player2Choice");
let blueScore = document.getElementById("blueScore");
let redScore = document.getElementById("redScore");
let nextMatchBtn = document.getElementById("nextMatchBtn");

// var bS = 0;
// var rS = 0;



function UrlParam() {
    var url = document.location.href,
        params = url.split('?')[1].split('&'),
        data = {}, tmp;
    for (var i = 0, l = params.length; i < l; i++) {
        tmp = params[i].split('=');
        data[tmp[0]] = tmp[1];
    }
    return data;
}
let param = UrlParam();

function ReplaceParam(keyName, keyValue) {
    var url = document.location.href,
        baseUrl = url.split('?')[0], tmp;
        tmp = baseUrl + "?"
    for (var i = 0, l = param.length; i < l; i++) {
        if (param[i].key != keyName) {
            tmp = tmp + param[i].key + "=" + param[i].value + "&";
        } else {
            tmp = tmp + keyName + "=" + keyValue + "&";
        }
    }
    return tmp.substring(0, tmp.length - 1);
}

if (param["PlayerMode"] === "Player") {
    player2Text.innerText = "Player 2";
} else {
    player2Text.innerText = "CPU";
}

function LogWinner(winner) {
    if (winner === "blue") {
        var newUrl = document.location.href;
        if (newUrl.includes("BlueScore")) {
            var bS = param["BlueScore"];
            var newBS = ([int](bS) + 1).toString();
            newUrl = newUrl.substring(0, newUrl.indexOf("BlueScore") + 10) + newBS + newUrl.substring(newUrl.indexOf("BlueScore") + 12, newUrl.length);
            
        } else {
            newUrl = newUrl + "&BlueScore=1&RedScore=0";
        }
        alert(newUrl);
        
    } else {

    }
}

if (param["BlueChoice"] === "1") {
    if (param["RedChoice"] === "Paper" || param["RedChoice"] === "Lizard") {
        LogWinner("blue");
    } else if (param["RedChoice"] === "Spock" || param["RedChoice"] === "Rock") {
        LogWinner("red");
    }
}



// async function RandChoiceAPI() {
//     const promise = await fetch('https://rpslsapi.azurewebsites.net/RPSLS');

//     const data = await promise.json();

//     alert(data);
//     // redChoice.src = data;
// }