function Meme (imgUrl) {
  this.imgUrl = imgUrl;
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
      var imgTag = ['<img src="', meme.imgUrl, '/convert?w=200&h=200">'].join('');
      $.post('upload', meme);
      $('#display-all-memes').append(imgTag);
    },
    function(FPError){
      console.log(FPError.toString());
    }
  );
}


$(document).ready(function() {
  $('#upload').on('click', function(e){
    e.preventDefault();
    openFilePicker();
  });

  $('.meme').on('click', function(e){
    
  });
});

