class VideoGameSerializer < ActiveModel::Serializer
  attributes :id, :name, :image, :price, :type_of, :description

  has_many :video_game_reviews

end
