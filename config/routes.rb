Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

  post "/login", to: "sessions#create"

  delete "/logout", to: "session#destroy"

  get "/me", to: "users#show"

  post "/signup", to: "user#create"
end
