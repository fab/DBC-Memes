class CreateMemesTags < ActiveRecord::Migration
  def change
    create_table :memes_tags, :id => false do |t| 
      t.references :meme, :tag
    end
      
    add_index :memes_tags, [:meme_id, :tag_id], :unique => true
  end
end
