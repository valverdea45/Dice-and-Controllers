class CreateTableTops < ActiveRecord::Migration[7.0]
  def change
    create_table :table_tops do |t|
      t.string :name
      t.float :price
      t.string :type_of
      t.string :description
      t.string :image

      t.timestamps
    end
  end
end
