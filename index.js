function reverse(word){
  const wordArray=word.split('')
  const reverseWordArray = wordArray.reverse('')
  const reverseword = reverseWordArray.join("")
  return reverseword
}


function isPalindrome(word) {
  // Write your algorithm here
  const reverseword = reverse(word)
  if (word === reverseword) {
    return true
  }
  else{
    return false
  }
}
console.log(isPalindrome('roro'))

/* 
  Add your pseudocode here
  create a function isPalindrome("string");
  if string === isPalindrome;
  return true
  else 
  return false
*/

/*
  Add written explanation of your solution here

  //You create a function to know if a string is a palindrome
  //this function takes in a string aregument
  //If this  string reads same way backwards as it did forward
  //Then this function should return true otherwise false
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
