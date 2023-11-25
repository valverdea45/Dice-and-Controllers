class VideoGamesController < ApplicationController

    skip_before_action :authorize, only: [:index]

    def index
        video_game = VideoGame.all
        render json: video_game, status: :ok
    end 


end
