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


const MINUS = "ลบ"
const ZERO = "ศูนย์"
const SECOND_POSITION = "ยี่"
const ONE_AFTER = "เอ็ด"
const positionThai = ["", "สิบ", "ร้อย", "พัน", "หมื่น", "แสน", "ล้าน"]
const thaiCounting = ["", "หนึ่ง", "สอง", "สาม", "สี่", "ห้า", "หก", "เจ็ด", "แปด", "เก้า"]

/**
 * function numberReader
 * 
 * @param {number} number 
 * @returns 
 */

const numberReader = function (number) {
    // define this for result text
    let readingText = ""
    // is number is minus
    let isMinus = ''
    // define blank array 
    let arr = []

    // is zero
    if (number === 0) {
        return ZERO
    }
    // non zero
    else {
        // check number is minus eg. -1, -5, or -n
        if (number < 0) {
            number *= -1
            isMinus = MINUS
        }
        // split number to array and reverse
        let numberArray = number.toString().split('').reverse()


        /*
        / grouping array to multiple array by 6
        */
        while (numberArray.length > 0) {
            arr.push(numberArray.splice(0, 6))
        }

        // reverse array group
        arr.reverse()

        // revers child array
        arr.map(function (value, index) {
            arr[index].reverse()
        })

        // map outermost array 
        arr.map(function (array, i) {
            let countNumber = array.length

            // map inside array
            array.map(function (singleArray, j) {
                if ((countNumber - 1) == 1 && (singleArray == 2)) {
                    readingText += SECOND_POSITION + positionThai[countNumber - 1]
                } else if ((countNumber - 1) == 1 && (singleArray == 1)) {
                    readingText += positionThai[countNumber - 1]
                } else if ((countNumber - 1) == 0 && singleArray == 1 && arr[i].length > 1 && array[j - 1] != 0) {
                    readingText += ONE_AFTER + positionThai[countNumber - 1]

                } else {
                    readingText += singleArray == 0 ?
                        thaiCounting[singleArray] :
                        thaiCounting[singleArray] + positionThai[countNumber - 1]
                }
                countNumber--
            })
            readingText += i + 1 != arr.length ? positionThai[6] : ''
        })
        return (isMinus + readingText)
    }
}

module.exports = numberReader