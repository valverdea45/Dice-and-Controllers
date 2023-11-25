class CreateVideoGameReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :video_game_reviews do |t|
      t.string :body
      t.integer :video_game_id
      t.integer :user_id

      t.timestamps
    end
  end
end
