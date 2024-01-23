let blueScissors = document.getElementById("blueScissors");
let bluePaper = document.getElementById("bluePaper");
let blueRock = document.getElementById("blueRock");
let blueLizard = document.getElementById("blueLizard");
let blueSpock = document.getElementById("blueSpock");

// alert(PvP);
// alert(PvP)

function GetBlueChoice(id) {
    let blueParam = UrlParam();
    if (blueParam["PlayerMode"] === "Player") {
        document.location.href = (RedUrl() + "&BlueChoice=" + id);
    } else {
        document.location.href = (BattleUrl() + "&BlueChoice=" + id);
    }
}

blueScissors.addEventListener(('click'), function (e) {
    GetBlueChoice("1");
});
bluePaper.addEventListener(('click'), function (e) {
    GetBlueChoice("2");
});
blueRock.addEventListener(('click'), function (e) {
    GetBlueChoice("3");
});
blueLizard.addEventListener(('click'), function (e) {
    GetBlueChoice("4");
});
blueSpock.addEventListener(('click'), function (e) {
    GetBlueChoice("5");
});

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

function RedUrl() {
    var url = document.location.href
    return url.replace("VsPlayerBlue", "VsPlayerRed");
}

function BattleUrl() {
    var url = document.location.href
    return url.replace("VsPlayerBlue", "Battle");
}