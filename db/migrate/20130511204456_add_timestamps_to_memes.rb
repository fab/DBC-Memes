class AddTimestampsToMemes < ActiveRecord::Migration
  def change
    add_column :memes, :created_at, :datetime
    add_column :memes, :updated_at, :datetime
  end
end
