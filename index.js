var resetBtn = document.getElementById("resetBtn");
var randomBtn = document.getElementById("randomBtn");
var AX_input = document.getElementById("AX-input");
var BX_input = document.getElementById("BX-input");
var CX_input = document.getElementById("CX-input");
var DX_input = document.getElementById("DX-input");
var firstColInputs = document.querySelectorAll(".firstCol-input");
var errors = document.querySelectorAll(".error");
var error1 = document.querySelector(".error1");
var error2 = document.querySelector(".error2");
var error3 = document.querySelector(".error3");
var error4 = document.querySelector(".error4");
errors.forEach(function (error) {
    //@ts-ignore
    error.style.display = "none";
});
firstColInputs.forEach(function (input) {
    input.addEventListener('input', function () {
        errors.forEach(function (error) {
            //@ts-ignore
            error.style.display = "none";
        });
        //@ts-ignore  
        if (input.value.match(/[^A-Fa-f0-9]/g) || input.value.length <= 3) {
            var errorTag = input.parentElement.querySelector('p');
            errorTag.style.display = 'block';
        }
    });
});
var moveBtn = document.querySelectorAll(".moveBtn");
var xChangeBtn = document.querySelectorAll(".xchangeBtn");
var allCharacters = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    0,
    1,
    2,
    3,
    4,
    5,
    6,
    7,
    8,
    9,
];
var resetValues = function () {
    AX_input.value = "";
    BX_input.value = "";
    CX_input.value = "";
    DX_input.value = "";
};
var setRandomValues = function () {
    AX_input.value = randomValues();
    BX_input.value = randomValues();
    CX_input.value = randomValues();
    DX_input.value = randomValues();
};
var randomValues = function () {
    var rand = "";
    for (var i = 0; i < 4; i++) {
        var randomCharacter = allCharacters[Math.floor(Math.random() * allCharacters.length)];
        rand += randomCharacter;
    }
    return rand;
};
var moveData = function (e) {
    var dataValue = e.target.dataset.value;
    var firstValue = dataValue.split("-")[0].toUpperCase();
    var secondValue = dataValue.split("-")[1].toUpperCase();
    var firstInput = (document.getElementById(firstValue + "-input"));
    var secondInput = (document.getElementById(secondValue + "-input"));
    // console.log(allCharacters.indexOf(firstInput.value.split('')));
    // if(firstInput.value.match(/[^A-Fa-f0-9]/g)){
    //    alert('Error')
    //    return
    // }
    firstInput.value = secondInput.value;
};
var xChangeData = function (e) {
    var dataValue = e.target.dataset.value;
    var firstValue = dataValue.split("-")[0].toUpperCase();
    var secondValue = dataValue.split("-")[1].toUpperCase();
    var firstInput = (document.getElementById(firstValue + "-input"));
    var secondInput = (document.getElementById(secondValue + "-input"));
    var actualFirstValue = firstInput.value;
    var actualSecondValue = secondInput.value;
    firstInput.value = actualSecondValue;
    secondInput.value = actualFirstValue;
};
moveBtn.forEach(function (btn) {
    btn.addEventListener("click", moveData);
});
xChangeBtn.forEach(function (btn) {
    btn.addEventListener("click", xChangeData);
});
randomBtn.addEventListener("click", setRandomValues);
resetBtn.addEventListener("click", resetValues);
