// Nama : Fahrul Muhammad Neor
// exercise 8 week 5 phase 0

/*
Diberikan sebuah function hapusSimbol(str) yang menerima satu parameter berupa string.
Function akan me-return string yang telah bersih dari berbagai simbol, hanya menyisakan a-z dan angka 0-9.
*/

function hapusSimbol(str) {
    // you can only write your code here!
    var change = /[0-9a-zA-Z]/
    var result = ''
    for (i = 0; i < str.length; i++) {
        if(change.test(str[i])){
            result += str[i]
        }
    }
    return result
}

// TEST CASES
console.log(hapusSimbol('test%$4aa')); // test4aa
console.log(hapusSimbol('devel0p3r s3j@@ati')); // devel0p3rs3jati
console.log(hapusSimbol('ma@#k!an~')); // makan
console.log(hapusSimbol('coding')); // coding
console.log(hapusSimbol('1+3-5*2=100')); // 1352100