m1 = Meme.create(img_url: 'https://www.filepicker.io/api/file/2qURQMLsTd6bNdNO9KdL')
m2 = Meme.create(img_url: 'https://www.filepicker.io/api/file/gSggd2MjSSuOBO59KrVW')
m3 = Meme.create(img_url:'https://www.filepicker.io/api/file/hY1pZO3hQNsallTk2DiO')
m4 = Meme.create(img_url:'https://www.filepicker.io/api/file/2OhRTrxXTw6gABUkE55M')
m5 = Meme.create(img_url:'https://www.filepicker.io/api/file/J0ip34MxTze63CWJuVgy')
m6 = Meme.create(img_url:'https://www.filepicker.io/api/file/BI9UIrSfRFeZmbV3GLUD')
m7 = Meme.create(img_url:'https://www.filepicker.io/api/file/UDXbc2nyT7G128D8UJw4')

t1 = Tag.create(name: 'Weak sauce')
t2 = Tag.create(name: 'Laundry')

m1.tags << t1