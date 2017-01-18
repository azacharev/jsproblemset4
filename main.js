var addNumbers = function(str) {
    var temp = "";
    for (var i = 0; i < str.length; i++) {
        if (!isNaN(str[i])) {
            temp += str[i];
        } else {
            temp += " ";
        }
    }
    var arr = temp.split(" ");
    var numArr = [];
    for (var j = 0; j < arr.length; j++) {
        if (arr[j] != '') {
            numArr.push(arr[j]);
        }
        var total = 0;
        for (var x = 0; x < numArr.length; x++) {
            total += parseInt(numArr[x]);
        }
    }
    console.log(total);
}
addNumbers("88Hello 3World!");

//  Warning: Regex is not allowed for this exercise!  Write a function longestWord that takes a single string
//  parameter and returns the largest word in the string. If there are two or more words
//  that are the same length, it returns the first word from the string with that length.
//  Ignore punctuation and assume the input sentence will not be empty.

function longestWord(str){
  var toArr = str.split(" ");
  for(var i = 0; i < toArr.length; i++){
    var Currlength = toArr[0].length;
    var currentIndex;
    if(toArr[i].length > Currlength){
      Currlength = toArr[i].length;
      currentIndex = toArr[i];
    }
  }
    return currentIndex;
  // console.log(Currlength);
}

console.log("longestWord: " + longestWord("hey how's it going"));
