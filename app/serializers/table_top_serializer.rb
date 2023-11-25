class TableTopSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :price, :type_of, :description

  has_many :table_top_reviews
end
