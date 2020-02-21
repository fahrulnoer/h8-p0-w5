// Nama : Fahrul Muhammad Neor
// exercise 2 week 5 phase 0

/*
Diberikan function changeVocals, reverseWord, setLowerUpperCase, removeSpaces, dan passwordGenerator

Pada function passwordGenerator implementasikan requirement dibawah ini untuk membuat password (harus berurutan):

Ganti semua huruf vokal menggunakan function changeVocals dengan aturan huruf vokal yang diganti akan menjadi huruf setelah huruf vokal itu (ex: a -> b, i -> j, u -> v, e -> f, o -> p, A -> B, I -> J, U -> V, E -> F, O -> P)

Balikkan/reverse kata yang sudah kita ganti huruf vokalnya menggunakan reverseWord

Gunakan function setLowerUpperCase untuk mengganti huruf besar menjadi kecil dan sebaliknya

Gunakan function removeSpaces untuk menghilangkan semua spasi di dalam string yang sudah kita manipulasi

NOTE:
Semua manipulasi string (changeVocals, reverseWord, setLowerUpperCase, removeSpaces) diletakkan di passwordGenerator dan return password-nya dari function ini juga
*/

function changeVocals (str) {
    var temp1 = ''
    for (i = 0; i < str.length; i++) {
        if (str[i] === 'a') {
            temp1 += 'b'
        } else if (str[i] === 'i') {
            temp1 += 'j'
        } else if (str[i] === 'u') {
            temp1 += 'v'
        } else if (str[i] === 'e') {
            temp1 += 'f'
        } else if (str[i] === 'o') {
            temp1 += 'p'
        } else if (str[i] === 'A') {
            temp1 += 'B'
        } else if (str[i] === 'I') {
            temp1 += 'J'
        } else if (str[i] === 'U') {
            temp1 += 'V'
        } else if (str[i] === 'E') {
            temp1 += 'F'
        } else if (str[i] === 'O') {
            temp1 += 'P'
        } else {
            temp1 += str[i]
        }
    }
    return temp1
}

function reverseWord (str) {
    var temp2 = ''
    for (i = str.length - 1; i >= 0; i--) {
      temp2 += str[i]
    }
    return temp2
}
  
function setLowerUpperCase (str) {
    var alphabetLit = 'abcdefghijklmnopqrstuvwxyz'
    var alphabetBig = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    var result = ''
    for (i = 0; i < str.length; i++){
        var temp3 = 0
        for (j = 0; j < alphabetBig.length; j++){
            if (str[i] === alphabetBig[j]){
                result += alphabetLit[j]
                temp3 ++
            }
        }
        for (k = 0; k < alphabetLit.length; k++){
            if (str[i] === alphabetLit[k]){
                result += alphabetBig[k]
                temp3 ++
                }
        }
        if(temp3 == 0){
            result += str[i]
        }
    }
    return result
}
  
function removeSpaces (str) {
    var temp4 = ''
    for ( i = 0; i < str.length; i++) {
        if (str[i] != ' '){
            temp4 += str[i]
        }
    }
    return temp4
}
  
function passwordGenerator (name) {
    if (name.length < 5){
        return 'Minimal karakter yang diinputkan adalah 5 karakter'
    }
    var changeVocals1 = changeVocals(name);
    var reverseWord1 = reverseWord(changeVocals1);
    var setLowerUpperCase1 = setLowerUpperCase(reverseWord1);
    var removeSpaces1 = removeSpaces(setLowerUpperCase1);
    return removeSpaces1;
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'