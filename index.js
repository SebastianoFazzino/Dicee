

document.querySelector(".play-button").addEventListener("click", function(){
    play();
})


function play() {
    var randomNumber1 = Math.floor(Math.random() * 6 + 1);
    var randomNumber2 = Math.floor(Math.random() * 6 + 1);

    var dice1 = "images/dice" + randomNumber1 + ".png";
    var dice2 = "images/dice" + randomNumber2 + ".png";

    document
        .querySelector(".img1")
        .setAttribute("src", dice1);
    document
        .querySelector(".img2")
        .setAttribute("src", dice2);

    if (dice1 > dice2) {
        document
            .querySelector("h1")
            .innerHTML = "Player 1 Wins!";
    } else if (dice1 < dice2) {
        document
            .querySelector("h1")
            .innerHTML = "Player 2 Wins!";
    } else {
        document
            .querySelector("h1")
            .innerHTML = "Draw!";
    }
}
