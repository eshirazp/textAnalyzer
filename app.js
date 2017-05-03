// your code here!
function averageCount(textArr) {
  var count = 0;
  for(var i = 0; i < textArr.length; i++) {
    count += textArr[i].length;
  }

  return (count/textArr.length).toFixed(2);
}

function uniqueCount(textArr) {
  var count = 1;

  textArr.sort();
  for(var i = 0; i < textArr.length-1; i++) {
    if(textArr[i] !== textArr[i+1])
      count++;
  }
  return count;
}

function wordCount(textArr) {
  return textArr.length;
}

function textToArr(textArea) {
  return textArea.trim().split(/\s+/g);
}

function textAnalyze() {
  $('button').click(function(event) {
    event.preventDefault();
    $('dl').removeClass('hidden');

    var textArr = textToArr($('textarea').val());
    $('.wordCount').text(wordCount(textArr));
    $('.uniqueWordCount').text(uniqueCount(textArr));
    $('.averageWordLength').text(averageCount(textArr) + "characters");

  });
}

$(function() {
  textAnalyze();
});