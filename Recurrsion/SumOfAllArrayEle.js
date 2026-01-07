let arr = [5, 3, 2, 0, 1]

function sum(n) {
    if (n === 0) return arr[0]
    return arr[n] + sum(n - 1)
}

console.log(sum(arr.length - 1))



//odd numbers

let arr1 = [5, 3, 2, 0, 1]

function sum1(n) {

    if (n === 0) {
        if (arr[0] % 2 === 0) {
            return arr[0]
        }
        else {
            return 0
        }
    }
    else {
        if (arr[n] % 2 === 0) {
            return arr[n] + sum1(n - 1)
        }
        else {
            return 0 + sum1(n - 1)
        }
    }


}

console.log(sum1(arr1.length - 1))