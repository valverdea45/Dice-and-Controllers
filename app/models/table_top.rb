class TableTop < ApplicationRecord
    has_many :table_top_reviews
    has_many :users, through: :table_top_reviews
    
end
