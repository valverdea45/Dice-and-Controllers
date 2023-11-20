class Review < ApplicationRecord
    belongs_to :user
    belongs_to :table_tops
    belongs_to :video_games


end
