let gameMode1 = document.getElementById("gameMode1");
let gameMode2 = document.getElementById("gameMode2");
let gameMode3 = document.getElementById("gameMode3");
// var gM = 1;

gameMode1.addEventListener(('click'), function (e) {
    // gM = 2;
    // alert(gM);
    document.location.href = (NewUrl() + "&GameMode=1");
});

gameMode2.addEventListener(('click'), function (e) {
    // gM = 2;
    // alert(gM);
    document.location.href = (NewUrl() + "&GameMode=3");
});

gameMode3.addEventListener(('click'), function (e) {
    // gM = 3;
    // alert(gM);
    document.location.href = (NewUrl() + "&GameMode=4");
});

function NewUrl() {
    var url = document.location.href
    return url.replace("GameMode", "VsPlayerBlue");
}

// export {gM};