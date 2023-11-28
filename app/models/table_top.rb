class TableTop < ApplicationRecord
    has_many :table_top_reviews
    has_many :users, through: :table_top_reviews
    
    validates :name, presence: true, uniqueness: true

    validates :price, numericality: { greater_than: 0 }

    validates :type_of, presence: { message: "game must have a selection"}

    validates :description, presence: true

    validates :image, presence: true
end
