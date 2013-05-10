helpers do

  def all_memes
    Meme.all
  end

  def partial (template, locals = {})
    erb(template, :layout => false, :locals => locals)
  end

end