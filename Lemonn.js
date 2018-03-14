function generator(min, max) {
    return Math.floor(Math.random() * (max + 1 - min) + min);
}

function genNum() {
    const min = -10;
    const max = 10;
    const num = generator(min, max-1);
    return num == 0 ? 10 : num; 

}

function getSign() {
    const operation = generator(0,3);
    signs = ['+', '-', '/', '*'];
    return signs[operation];
}

function calculate(num1, num2, sign) {
    switch(sign) {
        case '+': {
            return num1 + num2;
            break;
        }
        case '-': {
            return num1 - num2;
            break;
        }
        case '/': {
            return Math.round(num1 / num2 * 10) / 10;
            break;
        }
        case '*': {
            return num1 * num2;
            break;
        }
    }
}


while(true) {
    const num1 = genNum();
    const num2 = genNum();
    const str = num2 < 0 ? `(${num2})` : `${num2}`;
    const sign = getSign ();
    const userAnswer = prompt(`Реши математический пример и запиши ЗДЕСЬ свой ШЕДЕВРАЛЬНЫЙ ответ.
    Если нужно записать дробное число, запиши его через ТОЧКУ и только с ОДНИМ ЗНАКОМ после заятой:
    ${num1} ${sign} ${str} = `);
    const rezult = calculate(num1, num2, sign);
    if(+userAnswer != rezult) {
        alert('Топай спать, бухарик!');
        break;
    } else alert('Продолжаем!');
}
