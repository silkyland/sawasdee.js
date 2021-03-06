/**
 * filename   index.js
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
const currency = require('./src/currency')
const unit = require('./src/unit')

console.log(currency(0.60))
console.log(unit(0.06))