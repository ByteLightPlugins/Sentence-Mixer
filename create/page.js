$(function () {
  $('#save-button').click(function (e) {
    var hueVal = Math.random() * 360;
    var content = {
      body:$('#note-body').val(), 
      author:$('#note-author').val()
    };
    BL.createContent(JSON.stringify(content));
  })
});