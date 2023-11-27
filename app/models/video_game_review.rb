class VideoGameReview < ApplicationRecord
    belongs_to :user
    belongs_to :video_game 

    validates :body, presence: true

end
