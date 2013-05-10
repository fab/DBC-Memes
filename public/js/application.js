function Meme (id, imgUrl) {
  this.id = id;
  this.imgUrl = imgUrl;
  this.smallImg = ['<img src="', imgUrl, '/convert?w=200&h=200">'].join('');
  this.bigImg = ['<img src="', imgUrl, '/convert?w=600&h=600">'].join('');
}

function openFilePicker() {
  filepicker.setKey('AlhlEgr2SLOnvE4L9x0RQz');
  filepicker.pick({
    mimetypes: ['image/*', 'text/plain'],
    container: 'window',
    services:['COMPUTER', 'FACEBOOK', 'GMAIL', 'INSTAGRAM']
    },
    function(FPFile){
      var tempID = allTheMemes[allTheMemes.length - 1].id + 1;
      var meme = new Meme (tempID, FPFile.url);
      allTheMemes.push(meme);
      $.post('upload', meme);
      var memeDiv = ['<div id="', tempID,'" class="meme">', meme.smallImg,'</div>'].join('');
      $('#display-all-memes').append(memeDiv);
    },
    function(FPError){
      console.log(FPError.toString());
    }
  );
}


$(document).ready(function() {
  allTheMemes = [];
  $('.overlay').hide();
  $('#upload').on('click', function(e){
    e.preventDefault();
    openFilePicker();
  });

  $(lotsOfMemes).each(function(index, value){
    var parsed = jQuery.parseJSON(value);
    var meme = new Meme(parsed.id, parsed.url);
    allTheMemes.push(meme);
  });

  $('#display-all-memes').on('click', '.meme', function(e){
    console.log('clicked');
    $('.overlay').show();
    console.log($(this));
    var targetID = $(this).attr('id');
    console.log(targetID);
    var photo = allTheMemes.filter(function(e){ return e.id == targetID; });
    console.log(photo);
    console.log(photo[0]);
    $('#overlay-box').append(photo[0].bigImg);
  });

  $('#close-button').on('click', function(e){
    e.preventDefault();
    $('.overlay').hide();
    $('#overlay-box').find('img').remove();
  });
});














