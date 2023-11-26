class TableTopReviewSerializer < ActiveModel::Serializer
  attributes :id, :table_top_id, :body, :user_id, :username

  def username
    self.object.user.username
  end

end
