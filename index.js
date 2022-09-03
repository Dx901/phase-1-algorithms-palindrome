
function isPalindrome(word) {
  for (let i = 0; i < word.length / 2; i++){
    const j = word.length -1 -i;
    if (word[i] !== word[j]) {
      //if those leetrs do nt match return false
      return false;
    }
  }
  
  return true;
}

/* 
  Add your pseudocode here
iterate from the beginning of the string to the middle of the string
  compare the letter we're iterating over to the corresponding letter at the end of the string
    if the letters don't match, return false

if we reach the middle, and all the letters match, return true
  */


/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
/*
isPalindrome = (string) => {
  var reg = /[\W_]/g

  var smallstr = string.toLowerCase().replace(reg, '')

  var reversed = smallstr.split('').reverse().join('')
  if (reversed === smallstr) {return true
  }else {
    return false
  }
}
console.log(isPalindrome('robot'))


  /**
  

}

/* 
  Add your pseudocode here
  Using a for loop
  compare the first character with the last character
  In every iterartion we move closer to the center of the string
  If we reach the middle successfully and all characters are equal
  then it is a palindrome

  //Here is the guided pseudoCode
  Iterate through a string
  if letters match from both ends return true 
*/

/*
  Add written explanation of your solution here

  //using a for loop you iterarye through a string
  //If the characters match then return true
  //Otherwise return false

*/