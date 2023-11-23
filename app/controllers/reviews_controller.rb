class ReviewsController < ApplicationController
    skip_before_action :authorize, only: [:index]

    def index
        reviews = Review.all
        render json: reviews, status: :ok
    end
end
