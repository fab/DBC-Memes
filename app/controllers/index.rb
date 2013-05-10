get '/' do
  # Look in app/views/index.erb
  erb :index
end


post '/upload' do
  Meme.create(img_url: params[:img_url])
end