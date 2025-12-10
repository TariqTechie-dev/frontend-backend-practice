
function largerElements(arr, num) {
    let result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > num) {
            result.push(arr[i]);
        }
    }
    return result;
}

largerElements([2, 5, 8, 1, 10], 5); // Output: [8, 10]

/*
Step by Step:

Start:

arr = [2, 5, 8, 1, 10]

num = 5

result = [] (khali array)

i = 0 → arr[0] = 2

Kya 2 > 5? ❌ Nahi.

Kuch nahi hota.

result = []

i = 1 → arr[1] = 5

Kya 5 > 5? ❌ Nahi (equal hai, greater nahi).

Kuch nahi hota.

result = []

i = 2 → arr[2] = 8

Kya 8 > 5? ✅ Haan.

result.push(8)

result = [8]

i = 3 → arr[3] = 1

Kya 1 > 5? ❌ Nahi.

result = [8]

i = 4 → arr[4] = 10

Kya 10 > 5? ✅ Haan.

result.push(10)

result = [8, 10]

Loop khatam

Return → [8, 10]

✅ Final Answer: [8, 10]  */



function uniqueChars(str) {
    let result = "";  // empty string
    for (let i = 0; i < str.length; i++) {
        let char = str[i];  // ek ek character uthao
        if (result.indexOf(char) === -1) {
            // agar char result mai pehle se nahi hai
            result += char;  // usay result mai daal do
        }
    }
    return result;
}
uniqueChars("hello world"); // Output: "helo wrd"




/*
  🔎 Dry run (Example: "abcdabcdefgggh")

Start: result = ""

i=0 → 'a' → result mai nahi hai → result = "a"

i=1 → 'b' → nahi hai → result = "ab"

i=2 → 'c' → nahi hai → result = "abc"

i=3 → 'd' → nahi hai → result = "abcd"

i=4 → 'a' → already hai → skip

i=5 → 'b' → already hai → skip

i=6 → 'c' → already hai → skip

i=7 → 'd' → already hai → skip

i=8 → 'e' → nahi hai → result = "abcde"

i=9 → 'f' → nahi hai → result = "abcdef"

i=10 → 'g' → nahi hai → result = "abcdefg"

i=11 → 'g' → already hai → skip

i=12 → 'g' → already hai → skip

i=13 → 'h' → nahi hai → result = "abcdefgh"  */








let country = ["Australia", "Germany", "United States of America"];

function longestName(country) {
    let ansIdx = 0;
    for (let i = 0; i < country.length; i++) {
        let ansLen = country[ansIdx].length;
        let currLen = country[i].length;
        if (currLen > ansLen) {
            ansIdx = i;
        }
    }
    return country[ansIdx];
}
longestName(country);


let s = "apnacollege";

function convervowel(str) {
    let counte = 0;
    for (let i = 0; i <= str.length; i++) {
        if (
            str.charAt(i) == "a" ||
            str.charAt(i) == "e" ||
            str.charAt(i) == "i" ||
            str.charAt(i) == "o" ||
            str.charAt(i) == "u"

        )
        {
            counte++;

        }
    }
    return counte;

}

console.log(convervowel(s));



let start = 100;
let end = 200;
function generateRandom(start, end) {
let diff = end - start;
return Math.floor(Math.random() * diff) + start;
}