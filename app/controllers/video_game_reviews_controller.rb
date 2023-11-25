class VideoGameReviewsController < ApplicationController

    def index
        reviews = VideoGameReview.all
        render json: reviews, state: :ok
    end

    def create
        new_review = @user.video_game_reviews.create(review_params)
        render json: new_review, status: :created
    end

    private

    def review_params
        params.permit(:body, :video_game_id, :user_id)
    end


end
