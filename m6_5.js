const functPow = (x, n) => {
    let result = x;
    for (let i = 1; i < n; i++) {
    result *= x;
    }
    return result;
    }
    let x = prompt("x введи", '')
    let n = prompt("n введи тоже, пжл", '')
    alert( functPow(x, n) )