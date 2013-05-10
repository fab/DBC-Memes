function openFilePicker() {
  filepicker.setKey('AlhlEgr2SLOnvE4L9x0RQz');
  filepicker.pick({
    mimetypes: ['image/*', 'text/plain'],
    container: 'window',
    services:['COMPUTER', 'FACEBOOK', 'GMAIL', 'INSTAGRAM']
    },
    function(FPFile){
      console.log(JSON.stringify(FPFile));
      //ajax call to save FPFile.url to database
      var imgTag = ['<img src="', FPFile.url, '/convert?w=200&h=200">'].join('');
      $('#display-all-memes').append(imgTag);
      // updatePageWithUploadedFile(FPFile.url);
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

