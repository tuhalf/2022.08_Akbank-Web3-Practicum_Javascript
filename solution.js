/*
Bir sayının Tek mi Çift mi olduğunu belirleyen bir işlev oluşturun. 
Bir sayı, tüm basamaklarının toplamı tek ise tek, tüm basamaklarının toplamı çift ise bir sayıdır. 
Bir sayı tek ise, "Odd" döndürün. Aksi takdirde, "Even" değerini döndürün. Örnek olarak:

oddishOrEvenish(43) ➞ "Odd"
// 4 + 3 = 7
// 7 % 2 = 1

oddishOrEvenish(373) ➞ "Odd"
// 3 + 7 + 3 = 13
// 13 % 2 = 1

oddishOrEvenish(4433) ➞ "Even"
// 4 + 4 + 3 + 3 = 14
// 14 % 2 = 0
*/

//solution
function oddishOrEvenish(num) {
    const sum = num
        .toString()
        .split("")
        .reduce((a, b) => Number(a) + Number(b));
    return sum % 2 === 0 ? "Even" : "Odd";
}

//test
console.log(oddishOrEvenish(43) === "Odd" ? "Correct" : "Wrong");
console.log(oddishOrEvenish(373) === "Odd" ? "Correct" : "Wrong");
console.log(oddishOrEvenish(4433) === "Even" ? "Correct" : "Wrong");
