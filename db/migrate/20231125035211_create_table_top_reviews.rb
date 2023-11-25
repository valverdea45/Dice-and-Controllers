class CreateTableTopReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :table_top_reviews do |t|
      t.string :body
      t.integer :table_top_id
      t.integer :user_id

      t.timestamps
    end
  end
end
