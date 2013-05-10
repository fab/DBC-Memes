helpers do

  def all_memes
    Meme.all.shuffle
  end

  def partial (template, locals = {})
    erb(template, :layout => false, :locals => locals)
  end

end