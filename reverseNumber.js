var reverse = function(num) {
    let isNumPositive = num < 0 ? false : true
    let n = Math.abs(num)
    let reverseNum = 0

    while (n > 0) {
        digit = n % 10
        reverseNum = (reverseNum * 10) + digit
        n = Math.floor(n / 10)
    }

    const limit = Math.pow(2, 31 )
    if(reverseNum < -limit || reverseNum > limit-1){
        return 0
    }
    return isNumPositive ? reverseNum : -(reverseNum)
};