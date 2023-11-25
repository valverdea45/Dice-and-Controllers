class VideoGame < ApplicationRecord
    has_many :video_game_reviews
    has_many :users, through: :video_game_reviews
end
