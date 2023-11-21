class TableTopsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        table_tops = TableTop.all
        render json: table_tops, status: :ok
    end

end
