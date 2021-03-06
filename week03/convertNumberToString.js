/**
 * @Description:
 * @param {number} number
 * @param {number} x
 * @return {string}
 * @Author: ksf
 * @Date: 2020/4/28
 */
function convertNumberToString(number, x = 10) {
    let integer = Math.floor(number);
    let decimal = number - integer;
    let string = !integer ? '0' : '';
    while (integer > 0) {
        string = (integer % x) + string;
        integer = Math.floor(integer / x);
    }

    if (decimal) {
        string += '.';
        while (decimal && !/\.\d{20}$/.test(string)) {
            decimal *= x;
            string += `${Math.floor(decimal)}`;
            decimal -= Math.floor(decimal);
        }
    }
    return string;
}
