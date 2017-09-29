/**
 * 
 * 
 * @param {integer} number 
 * @returns String
 */
const reader = require('./numberReader')
const unitReader = function (number) {
    let readingText
    let numberGroup = number.toString().split(".")
    let singleReading = ""
    if (numberGroup.length > 1) {
        numberGroup[1].split("").map(function (value, index) {
            singleReading += reader(value)
        })
    }
    readingText = numberGroup.length > 1 ? reader(numberGroup[0]) + "จุด" + singleReading : reader(number)
    return readingText
}
module.exports = unitReader