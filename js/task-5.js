'use strict';

const country = prompt('Введите страну');
let price;
let message;


switch (country.toLowerCase()) {
    case 'китай':
        price = 100;
        message = `'Доставка в ${country} будет стоить ${price} кредитов'`;
        alert(message);
        break;

    case 'чили':
        price = 250;
        message = `'Доставка в ${country} будет стоить ${price} кредитов'`;
        alert(message);
        break;

    case 'австралия':
        price = 170;
        message = `'Доставка в ${country} будет стоить ${price} кредитов'`;
        alert(message);
        break;

    case 'индия':
        price = 80;
        message = `'Доставка в ${country} будет стоить ${price} кредитов'`;
        alert(message);
        break;

    case 'ямайка':
        price = 120;
        message = `'Доставка в ${country} будет стоить ${price} кредитов'`;
        alert(message);
        break;

    default:
        message = 'В вашей стране доставка не доступна';
        alert(message);
}




// const china = 'Китай';
// const chile = 'Чили';
// const australia = 'Австралия';
// const india = 'Индия';
// const jamaica = 'Ямайка';

// let credit = 0;

// const country