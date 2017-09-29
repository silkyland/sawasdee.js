/**
 * filename    currency.js
 *
 * Sawasdee, a number translator to Thai reading words
 *
 * Sawasdee is a PHP library that created for people who need to translate numbers to Thai reading style.
 * It's including with Thai currency, Date and Time, Thai Unit and also included Thai SEO URL. Sawasdee
 * comes with easy to use PHP style and powerful with documentation. You will love to use it permanently.
 *
 * @copyright  2017 Bundit Nuntates
 * @license    http://www.opensource.org/licenses/mit-license.php   MIT license
 * @version    Release: 1.0.0
 * @link       http://devded.com, https://github.com/silkyland
 * @since      1.0.0
 */
const reader = require('./numberReader')
const unitReader = require('./unit')
const currencyList = require('./currencyList')


/**
 * 
 * 
 * @param {any} number 
 * @param {string} unit
 * @returns string
 */
const currency = function (number, unit = "") {
    let readerText
    let thaiBath = {
        unit: "บาท",
        deci: "สตางค์",
        absl: "ถ้วน"
    }
    let checkDot = number.toString().split(".")

    // floor or ceiling
    
    if (unit === "") {
        readerText = checkDot.length > 1 && checkDot[1] != 0 ?
            reader(checkDot[0]) + thaiBath.unit + reader(checkDot[1]) + thaiBath.deci :
            reader(checkDot[0]) + thaiBath.unit + thaiBath.absolute
    } else {
        readerText = unitReader(number) + currencyList[unit].name_plural
    }
    return readerText
}

module.exports = currency