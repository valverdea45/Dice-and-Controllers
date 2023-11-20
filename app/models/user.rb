class User < ApplicationRecord
    has_many :reviews
    has_many :table_tops, through: :reviews
    has_many :video_games, through: :reviews

    has_secure_password

    
end
