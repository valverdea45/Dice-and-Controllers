class VideoGameReview < ApplicationRecord
    belongs_to :user
    belongs_to :video_game 

    validates :body, presence: true

    validates :body, length: { minimum: 25 }, on: :create

end
