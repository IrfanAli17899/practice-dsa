// var romanToInt = function (s) {
//   const romans = {
//     I: 1,
//     V: 5,
//     X: 10,
//     L: 50,
//     C: 100,
//     D: 500,
//     M: 1000,
//   };

//   let sum = 0;
//   for (let i = s.length - 1; i >= 0; i--) {
//     if (s[i] === "V" && s[i - 1] == "I") {
//       sum += 4;
//       i--;
//     } else if (s[i] === "X" && s[i - 1] == "I") {
//       sum += 9;
//       i--;
//     } else if (s[i] === "L" && s[i - 1] == "X") {
//       sum += 40;
//       i--;
//     } else if (s[i] === "C" && s[i - 1] == "X") {
//       sum += 90;
//       i--;
//     } else if (s[i] === "D" && s[i - 1] == "C") {
//       sum += 400;
//       i--;
//     } else if (s[i] === "M" && s[i - 1] == "C") {
//       sum += 900;
//       i--;
//     } else {
//       sum += romans[s[i]];
//     }
//   }
//   return sum;
// };

var romanToInt = function (s) {
  const romans = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
    IV: 4,
    IX: 9,
    XL: 40,
    XC: 90,
    CD: 400,
    CM: 900,
  };

  let sum = 0;
  for (let i = s.length - 1; i >= 0; i--) {
    const letter = s[i] + s[i - 1];
    console.log("🚀 ~ file: roman_to_decimal.js ~ line 59 ~ romanToInt ~ letter", letter)
    console.log("🚀 ~ file: roman_to_decimal.js ~ line 60 ~ romanToInt ~ romans[letter]", romans[letter])
    if (romans[letter]) {
      sum += romans[letter];
      i--;
    } else {
      sum += romans[s[i]];
    }
  }
  return sum;
};

// console.log(romanToInt("LVIII")); // 58
console.log(romanToInt("MCMXCIV")); // 58
