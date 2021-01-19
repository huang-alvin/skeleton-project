/******************************************************************************
Write a function oddRange(end) that takes in a number and returns an array
containing all positive odd numbers up to `end`.

Examples:

oddRange(13); // => [ 1, 3, 5, 7, 9, 11, 13 ]
oddRange(6); // => [ 1, 3, 5 ]
*******************************************************************************/

function oddRange(end) {
  let i = 1;
  let endArray = [];
  while(i <= end){
    endArray.push(i);
    i++;
  }
  let array = endArray.filter(function(ele){
    return (ele > 0 && ele % 2 !== 0);
  });
  return array;
}

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*************************/
module.exports = oddRange;
