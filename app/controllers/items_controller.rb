class ItemsController < ApplicationController

    skip_before_action :authorize, only: :index

    def index
        items = VideoGame.all, TableTop.all 
        render json: items, status: :ok
    end

end
