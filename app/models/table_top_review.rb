class TableTopReview < ApplicationRecord
    belongs_to :table_top
    belongs_to :user

    validates :body, presence: true
    
    validates :body, length: { minimum: 25 }
end
