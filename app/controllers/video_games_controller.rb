class VideoGamesController < ApplicationController

    skip_before_action :authorize, only: [:index]

    def index
        video_game = VideoGame.all
        render json: video_game, status: :ok
    end 

    def create
        new_video_game = VideoGame.create!(video_game_params)
        render json: new_video_game, status: :created
    end

    private

    def video_game_params
        params.permit(:name, :price, :type_of, :description, :image)
    end


end
