Rails.application.routes.draw do
  namespace :api do
    defaults: {format: :json}
    get 'sessions/new'
    get 'sessions/create'
    get 'sessions/destroy'
  end

  namespace :api do
    get 'users/new'
    get 'users/create'
  end


  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
