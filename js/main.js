menu.onclick = function myFunction() {
    var x = document.getElementById('myTopnav')
    if (!x.classList.contains("responsive")) {
        x.classList.add("responsive");
    } else {
        x.classList.remove("responsive");
    }
};

let buttonCountPlus1 = document.getElementById("buttonCountPlus1");
let buttonCountMinus1 = document.getElementById("buttonCountMinus1");
let count1 = document.getElementById("buttonCountNumber1");
let number1 = 1;


buttonCountPlus1.onclick = function () {
    if (number1 <= 49) {
        number1++;
        count1.innerHTML = number1;
    }
};

buttonCountMinus1.onclick = function () {
    if (number1 >= 2) {
        number1--;
        count1.innerHTML = number1;
    }
};
let buttonCountPlus2 = document.getElementById("buttonCountPlus2");
let buttonCountMinus2 = document.getElementById("buttonCountMinus2");
let count2 = document.getElementById("buttonCountNumber2");
let number2 = 1;


buttonCountPlus2.onclick = function () {
    if (number2 <= 49) {
        number2++;
        count2.innerHTML = number2;
    }
};

buttonCountMinus2.onclick = function () {
    if (number2 >= 2) {
        number2--;
        count2.innerHTML = number2;
    }
};
let buttonCountPlus3 = document.getElementById("buttonCountPlus3");
let buttonCountMinus3 = document.getElementById("buttonCountMinus3");
let count3 = document.getElementById("buttonCountNumber3");
let number3 = 1;


buttonCountPlus3.onclick = function () {
    if (number3 <= 49) {
        number3++;
        count3.innerHTML = number3;
    }
};

buttonCountMinus3.onclick = function () {
    if (number3 >= 2) {
        number3--;
        count3.innerHTML = number3;
    }
};
let buttonCountPlus4 = document.getElementById("buttonCountPlus4");
let buttonCountMinus4 = document.getElementById("buttonCountMinus4");
let count4 = document.getElementById("buttonCountNumber4");
let number4 = 1;


buttonCountPlus4.onclick = function () {
    if (number4 <= 49) {
        number4++;
        count4.innerHTML = number4;
    }
};

buttonCountMinus4.onclick = function () {
    if (number4 >= 2) {
        number4--;
        count4.innerHTML = number4;
    }
};