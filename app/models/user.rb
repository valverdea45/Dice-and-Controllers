class User < ApplicationRecord
    has_many :table_top_reviews
    has_many :video_game_reviews
    has_many :table_tops, through: :table_top_reviews
    has_many :video_games, through: :video_game_reviews

    has_secure_password

    validates :username, presence: true,
    uniqueness: true

    validates :password, length: { minimum: 5 }, on: :create

    validates :email, presence: true

    
end
