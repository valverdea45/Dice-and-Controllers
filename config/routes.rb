Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :video_games, only: [:index]
  resources :table_tops, only: [:index]
  resources :reviews, only: [:index]
  

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"

  get "/me", to: "users#show"

  post "/signup", to: "users#create"
end

# class VideoGamesController < ApplicationController

#   skip_before_action :authorize, only: [:index]

#   def index
#       video_games = VideoGame.all
#       render json: video_games, status: :ok
#   end

# end

