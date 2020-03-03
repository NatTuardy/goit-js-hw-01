'use strict';

const credits = 23580;
const accauntUser = credits;
const pricePerDroid = 3000;

const promptLabel = 'Выбери колличество дроидов';

let userChoise = prompt(promptLabel);
let totalPrice = userChoise;
let balance = 0;
let message;

if (userChoise === null) {
    message = 'Отменено пользователем!';
} else if (userChoise = Number(userChoise)) {
    if (credits < pricePerDroid * userChoise) {
        message = 'Недостаточно средств на счету!';
        alert(message);
    } else if (credits > pricePerDroid * userChoise) {
        let balance = credits - (userChoise * pricePerDroid);
        message = `'Вы купили ${userChoise} дроидов, на счету осталось ${balance} кредитов.'`;
        alert(message);
    }
}

// console.log(totalPrice);
// console.log(message);
// const total = 100;
// const ordered = 50;
// const result = total >= ordered

// console.log('result);