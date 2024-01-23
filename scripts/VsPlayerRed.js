let redScissors = document.getElementById("redScissors");
let redPaper = document.getElementById("redPaper");
let redRock = document.getElementById("redRock");
let redLizard = document.getElementById("redLizard");
let redSpock = document.getElementById("redSpock");

function GetRedChoice(id) {
    document.location.href = (NewUrl() + "&RedChoice=" + id);
}

redScissors.addEventListener(('click'), function (e) {
    GetRedChoice("Scissors");
});
redPaper.addEventListener(('click'), function (e) {
    GetRedChoice("Paper");
});
redRock.addEventListener(('click'), function (e) {
    GetRedChoice("Rock");
});
redLizard.addEventListener(('click'), function (e) {
    GetRedChoice("Lizard");
});
redSpock.addEventListener(('click'), function (e) {
    GetRedChoice("Spock");
});

function NewUrl() {
    var url = document.location.href
    return url.replace("VsPlayerRed", "Battle");
}