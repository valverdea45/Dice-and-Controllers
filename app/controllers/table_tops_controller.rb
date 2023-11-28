class TableTopsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        table_tops = TableTop.all
        render json: table_tops, status: :ok
    end

    def create
        new_table_top = TableTop.create!(table_top_params)
        render json: new_table_top, status: :created
    end

    private

    def table_top_params
        params.permit(:name, :price, :type_of, :description, :image)
    end

end
