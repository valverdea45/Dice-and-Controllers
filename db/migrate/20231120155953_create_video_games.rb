class CreateVideoGames < ActiveRecord::Migration[7.0]
  def change
    create_table :video_games do |t|
      t.string :name
      t.float :price
      t.string :item_type
      t.string :description

      t.timestamps
    end
  end
end
