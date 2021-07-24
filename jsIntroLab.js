
/* runs test to see if expected argument is === to value returned by function2test argument */
function myFunctionTest(expected, found) {
    if (expected === found) {
      return "TEST SUCCEEDED";
    } else if(expected.constructor ==Array &&found.constructor ==Array){
        if (JSON.stringify(expected) == JSON.stringify(found)) {
          return "TEST SUCCEEDED";
        }else{
            return "TEST FAILED.  Expected " + expected + " found " + found;
        }
    } else{
      return "TEST FAILED.  Expected " + expected + " found " + found;
    }
  }
  
  /* max returns the maximum of 2 arguments */
  function max(a, b) {
    if (a > b) {
      return a;
    } else {
      return b;
    };
  }
  console.log("Expected output of max(20,10) is 20  " + myFunctionTest(20, max(20, 10)));
  
  /* max3 takes 3 numbers as arguments and returns the largest */
  function maxOfThree(a, b, c) {
    return max(max(a, b), c);
  }
  
  console.log("Expected output of maxOfThree(5,4,44) is 44  " + myFunctionTest(44, maxOfThree(5, 4, 44)));
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(55, maxOfThree(55, 4, 44)));
  
  console.log("Expected output of maxOfThree(55,4,44) is 55  " + myFunctionTest(4, maxOfThree(55, 4, 44)));
  
  // Write a function isVowel() that takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise.
  function isVowel(a){
      if (a.length > 1) {
          return false;
      }
  
      let vowel;
      switch (a.charAt(0)) {
          case 'a':
              vowel =  true;
              break;
          case 'e':
              vowel = true;
              break;
          case 'i':
              vowel =  true;
              break;
          case 'o':
              vowel = true;
              break;
          case 'u':
              vowel = true;
              break;
          default:
              vowel = false;
      }
      return vowel;
  }
  
  console.log("Expected output of isVowel('a') is true  " + myFunctionTest(true, isVowel('a')));
  
  // Define a function sum() and a function multiply() that sums and multiplies (respectively) all 
  // the numbers in an array of numbers. For example, sum([1,2,3,4]) should return 10, and multiply([1,2,3,4]) 
  // should return 24.
  
  function sum(array){
      var total = 0
      array.forEach(element => {
          total +=element
      });
      return total
  }
  function multiply(array){
      var total = 1
      array.forEach(element => {
          total *=element
      });
      return total
  }
  console.log("Expected output of sum([1,2,3,4]) is  10 " + myFunctionTest(10, sum([1,2,3,4])));
  console.log("Expected output of multiply([1,2,3,4]) is  24 " + myFunctionTest(24, multiply([1,2,3,4])));
  
  // Define a function reverse() that computes the reversal of a string. For example, reverse("jag testar") should return the string "ratset gaj".
  function reverse(str){
      return str.split("").reverse().join("")
  }
  console.log("Expected output of reverse(jag testar) is  ratset gaj " + myFunctionTest("ratset gaj", reverse("jag testar")));
  
  // Write a function findLongestWord() that takes an array of words and returns the length of the longest one.
  function findLongestWord(strArray){
      var length = 0;
      strArray.forEach(element=>{
          if(element.length > length){
              length = element.length;
          }
      });
      return length;
  }
  console.log("Expected output of findLongestWord(['kind','Ethiopia','Mazaz']) is  8 " + myFunctionTest(8, findLongestWord(['kind','Ethiopia','Mazaz'])));
  
  // Write a function filterLongWords() that takes an array of words and an integer i and returns the array of words that are longer than i.
  function filterLongWords(strArray, num){
      var str = [];
      strArray.forEach(element=>{
          if(element.length > num){
              str.push(element)
          }
      });
      return str
  }
  
  console.log("Expected output of filterLongWords(['kind','Ethiopia','Mazaz'],4) is  [ 'Ethiopia', 'Mazaz' ] " + myFunctionTest([ 'Ethiopia', 'Mazaz' ], filterLongWords(['kind','Ethiopia','Mazaz'],4)));
  
  
  const a = [1,3,5,3,4]; 
  const b = a.map(function(elem, i, array) {
    return elem * 10;
  })
  
  const f = a.filter(function(elem, i, array){
          return elem ===3; 
  })
  const g = a.reduce(function(accumulator, elem){return accumulator * elem;}, 1)
  
  document.writeln(b.toString() + "<br/>");
  document.writeln(f.toString() + "<br/>");
  document.writeln(g.toString() + "<br/>");