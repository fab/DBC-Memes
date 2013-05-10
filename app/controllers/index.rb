get '/' do
  # Look in app/views/index.erb
  @all_memes = all_memes
  
  @lotsOfMemes = []
  @all_memes.each do |meme|
    memeJson = {}
    memeJson["id"] = meme.id
    memeJson["url"] = meme.img_url
    @lotsOfMemes << memeJson.to_json
  end
  @lotsOfMemes
  erb :index
end


post '/upload' do
  Meme.create(img_url: params[:imgUrl])
end