function isPalindrome(word) {
  for (let m = 0; m < word.length / 2; m++) {
    const n = word.length - 1 - m;
    if (word[m] !== word[n]) {
      return false;
    }
  }

  return true;
}


/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
  //It iterate from  start to the middle while comparing 
  it  should return same and false if not
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));
  console.log("");
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}
module.exports=isPalindrome;
