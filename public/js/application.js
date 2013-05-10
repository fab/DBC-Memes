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
      var meme = new Meme (FPFile.url);
      $.post('upload', meme);
      $('#display-all-memes').append(meme.smallImg);
    },
    function(FPError){
      console.log(FPError.toString());
    }
  );
}


$(document).ready(function() {
  var allTheMemes = [];
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

  // instantiate js objects

  $('.meme').on('click', function(e){
    console.log('clicked');
    $('.overlay').show();
    var targetID = $(this).attr('id');
    var photo = allTheMemes.filter(function(e){ return e.id == targetID; });
    $('#overlay-box').append(photo[0].bigImg);
  });
});

