class TableTopReviewsController < ApplicationController

    def index
        reviews = TableTopReviews.all
        render json: reviews, status: :ok
    end

    def created
        new_review = @user.table_top_reviews.create(review_params)
        render json: new_review, status: :created
    end

    private

    def review_params
        params.permit(:body, table_top_id)
    end

end
