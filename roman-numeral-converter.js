function convertToRoman() {

  let number = document.getElementById('number')
  let answer = document.getElementById('answer')
  let numAns =  Number(number.value);
  let num = Number(number.value);
  
  let romanNumeral = "";
  if (num < 1 || num > 3999 ){
    return answer.innerHTML = `There are no roman numerals for the number ${numAns}.`;
  } else {
    while ( num > 0) {
      if (num < 4) {
        romanNumeral += "I";
        num -=1
      } else if(num === 4) {
        romanNumeral += "IV"
        num -= 4
      } else if(num >= 5 && num < 9) {
        romanNumeral += "V"
        num -= 5
      } else if (num === 9 ) {
        romanNumeral += "IX"
        num -= 9
      } else if (num >= 10 && num <= 39){
        romanNumeral += "X"
        num -= 10
      } else if (num >= 40 && num <= 49) {
        romanNumeral += "XL"
        num -= 40
      } else if (num >= 50 && num <= 89) {
        romanNumeral += "L"
        num -= 50
      } else if (num >= 90 && num <= 99) {
        romanNumeral += "XC"
        num -= 90
      } else if (num >= 100 && num <= 399) {
        romanNumeral += "C"
        num -= 100
      } else if (num >= 400 && num <= 499) {
        romanNumeral += "CD"
        num -= 400
      } else if (num >= 500 && num <= 899) {
        romanNumeral += "D"
        num -= 500
      } else if (num >= 900 && num <= 999) {
        romanNumeral += "CM"
        num -= 900
      } else if (num >= 1000 && num <= 3999) {
        romanNumeral += "M"
        num -= 1000
      } else {
        num -= 1
      }
    }
  }
  number.value = ''
  answer.innerHTML = ''
  answer.innerHTML += `The equivalent value of ${numAns} in Roman numerals is`; 
  answer.innerHTML += `<h3>${romanNumeral}</h3>`;
}