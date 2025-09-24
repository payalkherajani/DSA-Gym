var isPalindrome = function (num) {
    if(num < 0) {
        return false
    }

    let n = Math.abs(num)
    let reverseNum = 0

    while (n > 0) {
        digit = n % 10
        reverseNum = (reverseNum * 10) + digit
        n = Math.floor(n / 10)
    }

   return num === reverseNum 
};

console.log(isPalindrome(121))