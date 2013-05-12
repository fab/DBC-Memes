helpers do

  def all_memes
    Meme.all.sort_by(&:created_at).reverse
  end

  def partial (template, locals = {})
    erb(template, :layout => false, :locals => locals)
  end

end
