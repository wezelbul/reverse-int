module.exports = function reverse (n) {
    let strNum = n.toString()

    const numLength = strNum.length;
    for (let i = numLength - 1; i >= 0; i--) {
        strNum += strNum[i];
    }
    return parseInt(strNum.substring(numLength));
}
