"use strict";

let input;
let total = 0;



do {
    input = prompt('введите число');
    if (input === null) {
        break;
    }

    if (Number.isNaN(Number(input))) {
        alert('Было введено не число, попробуйте еще раз');
    } else {
        total = total + Number(input);
    }
}
while (input !== null);

alert(`Общая сумма чисел равна ${total}.`);