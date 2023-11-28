class VideoGame < ApplicationRecord
    has_many :video_game_reviews
    has_many :users, through: :video_game_reviews

    validates :name, presence: true, uniqueness: true

    validates :price, numericality: { greater_than: 0 }

    validates :type_of, presence: { message: "game must have a selection" }

    validates :description, presence: true

    validates :image, presence: true
end
