class TableTopReviewsController < ApplicationController
rescue_from ActiveRecord::RecordNotFound, with: :review_not_found_response

    skip_before_action :authorize, only: [:index]

    def index
        reviews = TableTopReview.all
        render json: reviews, status: :ok
    end

    def create
        new_review = @user.table_top_reviews.create!(review_params)
        render json: new_review, status: :created
    end

    def destroy
        review = find_review
        review.destroy
        render json: review, status: :ok
    end

    def update
        review = find_review
        review.update!(review_params)
        render json: review, status: :accepted
    end

    private

    def review_params
        params.permit(:body, :table_top_id, :user_id)
    end

    def find_review
        @user.table_top_reviews.find_by!(id: params[:id])
    end

    def review_not_found_response
        render json: { error: "Not Found" }, status: :not_found
    end

end
