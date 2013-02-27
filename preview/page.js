$(
  
  
  function () {
  var numContents = BL.getContentForPreview().content.length;
  var sentences = new Array();
  var largestSentenceLength = 0;
  var content = JSON.parse(BL.getContentForPreview().content[0].data);
  for(i = 0; i < numContents; i++)
  {
    var c = JSON.parse(BL.getContentForPreview().content[i].data);
    
    sentences[i] = c.body.split(' ');
  
    var l = sentences[i].length;
    
    if(l > largestSentenceLength)
    {
      largestSentenceLength = l;
    }
  }
  
  
  for(i = 0; i < largestSentenceLength; i++)
  {
    var foundWord = 0;
    while(foundWord == 0)
    {
      var sentenceChoice = Math.floor((Math.random()*numContents )) ;
  
     
      if(sentences[sentenceChoice].length > i)
      {

      
        var chosenSentence = sentences[sentenceChoice];
        var chosenWord = chosenSentence[i];
        $('#text').append( chosenWord + ' ');
      
        break;
      }
      
    }
    
  }

  $('#author').append('-' + content.author + '');
  BL.previewReady();
});

