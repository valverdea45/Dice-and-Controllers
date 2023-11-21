class VideoGamesController < ApplicationController

    skip_before_action :authorize, only: [:index]

    def index
        video_games = VideoGame.all
        render json: video_games, status: :ok
    end 
end
