m1 = Meme.create(img_url: 'https://www.filepicker.io/api/file/2qURQMLsTd6bNdNO9KdL')
m2 = Meme.create(img_url: 'https://www.filepicker.io/api/file/gSggd2MjSSuOBO59KrVW')

t1 = Tag.create(name: 'Weak sauce')
t2 = Tag.create(name: 'Laundry')

m1.tags << t1