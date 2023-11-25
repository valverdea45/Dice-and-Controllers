class TableTopReviewSerializer < ActiveModel::Serializer
  attributes :id, :table_top_id, :body, :username

  def username
    self.object.user.username
  end

end
