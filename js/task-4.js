"use strict";

const credits = 23580;
const pricePerDroid = 3000;
const promptLabel = "Выбери колличество дроидов";
let message;
let userChoise = prompt(promptLabel);

if (userChoise === null) {
    message = "Отменено пользователем!";
} else {
    userChoise = Number(userChoise);
    if (credits < pricePerDroid * userChoise) {
        message = "Недостаточно средств на счету!";
    } else {
        const balance = credits - userChoise * pricePerDroid;
        message = `'Вы купили ${userChoise} дроидов, на счету осталось ${balance} кредитов.'`;
    }
}
alert(message);