class ItemsController < ApplicationController

    def index
        byebug
        video_games = VideoGame.all
        table_tops = TableTop.all

    end

end
