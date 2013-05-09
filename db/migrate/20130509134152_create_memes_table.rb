class CreateMemesTable < ActiveRecord::Migration
  def change
    create_table :memes do |t|
      t.string :img_url
    end
  end
end
