class CreateReviews < ActiveRecord::Migration[7.0]
  def change
    create_table :reviews do |t|
      t.string :body
      t.string :item_id
      t.string :type_of
      t.string :user_id
      t.string :likes

      t.timestamps
    end
  end
end
