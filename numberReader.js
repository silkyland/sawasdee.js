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

/**
* @param  number
* @return string
*/
const MINUS = "ลบ"
const ZERO = "ศูนย์"
const SECOND_POSITON = "ยี่"
const ONE_AFTER = "เอ็ด"
const positionThai = [
    "",
    "สิบ",
    "ร้อย",
    "พัน",
    "หมื่น",
    "แสน",
    "ล้าน"
]
const thaiCounting = [
    "",
    "หนึ่ง",
    "สอง",
    "สาม",
    "สี่",
    "ห้า",
    "หก",
    "เจ็ด",
    "แปด",
    "เก้า"
]

const numberReader = function (number) {
    let readingText = ""
    var isMinus = number < 0
        ? MINUS
        : undefined
    if (number === 0) {
        return ZERO
    } else {
        let reverseNumber = number
            .toString()
            .split('')
            .reverse()
            .join('')
        let arr = []
        let numberArray = reverseNumber.split("")
        /*
        / grouping array to multiple array like : [[1,2,3], [4,5,6]]
        */
        while (numberArray.length > 0) {
            arr.push(numberArray.splice(0, 6))
        }

        arr
            .map(function (array, i) {
                let countNumber = array.length
                array.map(function (singleArray, j) {
                    if ((countNumber - 1) == 1 && (singleArray == 2)) {
                        readingText += SECOND_POSITON + positionThai[countNumber - 1]
                    } else if ((countNumber - 1) == 1 && (singleArray == 1)) {
                        readingText += positionThai[countNumber - 1]
                    } else if ((countNumber - 1) == 0 && singleArray == 1 && arr[i].length > 1 && array[j - 1] != 0) {
                        readingText += ONE_AFTER + positionThai[countNumber - 1]
                    } else {
                        readingText += singleArray.length == 0
                            ? thaiCounting[singleArray]
                            : thaiCounting[singleArray] + positionThai[countNumber - 1]
                    }
                    countNumber--
                })
                readingText += i + 1 != arr.length
                    ? positionThai[6]
                    : ''
            })
        return readingText
    }
}

console.log(numberReader(12345671))