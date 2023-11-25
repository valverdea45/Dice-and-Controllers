class VideoGameReviewSerializer < ActiveModel::Serializer
  attributes :id, :video_game_id, :body, :username

  def username
    self.object.user.username
  end

end
