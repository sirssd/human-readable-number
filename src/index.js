module.exports = function toReadable(number) {
    if (number == 0) return 'zero';
    let ones = ['', ' one', ' two', ' three', ' four', ' five', ' six', ' seven', ' eight', ' nine', ' ten', ' eleven', ' twelve', ' thirteen', ' fourteen', ' fifteen', ' sixteen', ' seventeen', ' eighteen', ' nineteen'];
    let tens = ['', '', ' twenty', ' thirty', ' forty', ' fifty', ' sixty', ' seventy', ' eighty', ' ninety'];
    let hundred = ' hundred';
    let strFromNum = String(number);
    let arrFromStr = [];
    let words = [];
    let numLength = strFromNum.length;

    for (let i = 0; i < numLength; i++) {
        if (numLength == 1 && arrFromStr.length == 0) arrFromStr.push(strFromNum[i])
        if (numLength == 3) {
            arrFromStr.push(strFromNum[i]);
        }
        if (numLength == 2) arrFromStr.push(strFromNum.slice(i));
        numLength--;
    }

    numLength = strFromNum.length;

    arrFromStr.forEach((item) => {
        if (numLength == 3) {
            if (+item < 10) words.push(ones[+item]);
            numLength--
            return words.push(hundred);
        }
        if (+item < 20 && numLength <= 2) words.push(ones[+item]);
        if (+item >= 20 && arrFromStr.length <= 2) {
            words.push(tens[+item[0]]);
            words.push(ones[+item[1]]);
        }
    });
    return words.join('').trim();
}
