const arrOfRandomNumber = [],
    sortedArr = arrOfRandomNumber.sort(sortForArr);

let randomNumber = function () {
    return Math.floor(Math.random() * 100);
};

for (let i = 0; i < 20; i++) {
    arrOfRandomNumber.push(randomNumber());
}

function sortForArr(a, b) {
    if (a > b) {
        return 1
    }
    if (a < b) {
        return -1
    }
    if (a === b) {
        return 0
    }
}

document.write(arrOfRandomNumber);
document.write(`<br>Самое маленькое число : ${sortedArr[0]}, 
а самое большое число,это ${sortedArr[sortedArr.length - 1]}`);