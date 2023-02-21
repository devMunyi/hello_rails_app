Rails.application.routes.draw do
  root 'root#index'
  
  # routes for API endpoints
  namespace :api do 
    resources :messages, only: [:index], :path => "message"
  end
end
