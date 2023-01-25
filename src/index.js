module.exports = function toReadable(number) {
    let unit = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen']
    let dozen = ['twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety']
    let rest = number % 10;
    if (number < 20) {
        return unit[number];
    } else if (number < 100) {
        if (rest == 0) {
            return dozen[Math.trunc(number / 10) - 2];
        }
        else {
            return dozen[Math.trunc(number / 10) - 2] + " " + unit[rest];
        }
    }
    else if (number < 1000) {
        if (number % 100 == 0) {
            return unit[Math.trunc(number / 100)] +" hundred"
        }
        else {
            if (number % 100 >= 20) {
                return unit[Math.trunc(number / 100)] +
                    " hundred" + (Math.trunc((number % 100) / 10) == 0 ? "" : " " + dozen[Math.trunc(number % 100 / 10) - 2]) + (((number % 100) % 10) == 0 ? "" : " " + unit[((number % 100) % 10)])
            }
            else {
                return unit[Math.trunc(number / 100)] +
                    " hundred" + " "+unit[number % 100]
            }
        }
    }
};

