class TableTopReviewSerializer < ActiveModel::Serializer
  attributes :id, :table_top_id, :user_id, :body

end
