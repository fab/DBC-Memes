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

function displayRandomMeme() {
  $('.overlay').show();
  $('#overlay-box').find('.bigmeme').remove();
  var randomMeme = allTheMemes[Math.floor(Math.random()*allTheMemes.length)];
  console.log(randomMeme);
  var memeDiv = ['<div id="', randomMeme.id ,'" class="bigmeme">', randomMeme.bigImg,'</div>'].join('');
  $('#overlay-box').append(memeDiv);
}


$(document).ready(function() {
  allTheMemes = [];
  $('.overlay').hide();
  $('#upload').on('click', function(e){
    e.preventDefault();
    openFilePicker();
  });

  $('#shuffle').on('click', function(e){
    e.preventDefault();
    displayRandomMeme();
    var newMemeCycle = setInterval(displayRandomMeme, 10000);
    $('#close-button').on('click', function(e){
      e.preventDefault();
      $('.overlay').hide();
      $('#overlay-box').find('.bigmeme').remove();
      clearInterval(newMemeCycle);
    });
  });

  $(lotsOfMemes).each(function(index, value){
    var parsed = jQuery.parseJSON(value);
    var meme = new Meme(parsed.id, parsed.url);
    allTheMemes.push(meme);
  });

  $('#display-all-memes').on('click', '.meme', function(e){
    $('.overlay').show();
    var targetID = $(this).attr('id');
    var photo = allTheMemes.filter(function(e){ return e.id == targetID; })[0];
    var memeDiv = ['<div id="', photo.id ,'" class="bigmeme">', photo.bigImg,'</div>'].join('');
    $('#overlay-box').append(memeDiv);
  });

  $('#close-button').on('click', function(e){
    e.preventDefault();
    $('.overlay').hide();
    $('#overlay-box').find('.bigmeme').remove();
  });
});














