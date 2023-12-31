Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  resources :video_games, only: [:index, :create]
  resources :table_tops, only: [:index, :create]
  resources :video_game_reviews, only: [:index, :create, :destroy, :update]
  resources :table_top_reviews, only: [:index, :create, :destroy, :update]
  

  post "/login", to: "sessions#create"

  delete "/logout", to: "sessions#destroy"

  get "/me", to: "users#show"

  post "/signup", to: "users#create"

end