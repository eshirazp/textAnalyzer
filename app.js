/* Returns the average word count. Counts the total characters and then
    divides by the array length
*/
function averageCount(textArr) {
  var count = 0;
  for(var i = 0; i < textArr.length; i++) {
    count += textArr[i].length;
  }

  return (count/textArr.length).toFixed(2);
}

/* Returns the unique word count. Sorts the array first and then does a 
    simple compare. Must start count at 1 for this logic
*/
function uniqueCount(textArr) {
  var count = 1;

  textArr.sort();
  for(var i = 0; i < textArr.length-1; i++) {
    if(textArr[i] !== textArr[i+1])
      count++;
  }
  return count;
}

/* Returns the word count. Just uses the array.length method */
function wordCount(textArr) {
  return textArr.length;
}

/* Converts the text area into an array and then returns it. First trims all 
    leading and trailing whitespace. Then uses RegExp to remove all spaces 
    together from populating the array 
*/
function textToArr(textArea) {
  return textArea.trim().split(/\s+/g);
}

/* Gets the value within the text form. Calls all functions above and displays
    that information into the DOM
*/
function textAnalyze() {
  $('button').click(function(event) {
    event.preventDefault();
    $('dl').removeClass('hidden');

    var textArr = textToArr($('textarea').val());
    $('.wordCount').text(wordCount(textArr));
    $('.uniqueWordCount').text(uniqueCount(textArr));
    $('.averageWordLength').text(averageCount(textArr) + " characters");

  });
}

$(function() {
  textAnalyze();
});