class VideoGameReviewSerializer < ActiveModel::Serializer
  attributes :id, :video_game_id, :body, :user_id, :username

  def username
    self.object.user.username
  end

end
