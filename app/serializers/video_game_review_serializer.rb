class VideoGameReviewSerializer < ActiveModel::Serializer
  attributes :id, :video_game_id, :user_id, :body

end
