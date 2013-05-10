function openFilePicker() {
  filepicker.setKey('AlhlEgr2SLOnvE4L9x0RQz');
  filepicker.pick({
    mimetypes: ['image/*', 'text/plain'],
    container: 'window',
    services:['COMPUTER', 'FACEBOOK', 'GMAIL', 'INSTAGRAM']
    },
    function(FPFile){
      var imgUrl = FPFile.url;
      var imgTag = ['<img src="', imgUrl, '/convert?w=200&h=200">'].join('');
      $.post('upload', {img_url: imgUrl});
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
});

