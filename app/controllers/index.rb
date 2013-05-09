get '/' do
  # Look in app/views/index.erb
  erb :index
end


get '/upload' do
  "You tried to upload a meme!"
  #upload pop up
  #allow for tag input
  #get filepicker io url and store in database
end