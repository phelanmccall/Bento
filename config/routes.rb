Rails.application.routes.draw do

  namespace :api do
    get 'teams/index'
  end

  namespace :api do
    get 'teams/show'
  end

  namespace :api do
    get 'teams/new'
  end

  namespace :api do
    get 'teams/create'
  end

  namespace :api do
    get 'teams/update'
  end

  namespace :api do
    get 'teams/destroy'
  end

  get 'teams/index'

  get 'teams/show'

  get 'teams/new'

  get 'teams/create'

  get 'teams/update'

  get 'teams/destroy'

  get 'static_pages/root'

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :projects, except: [:new, :edit]
    resources :tasks, except: [:new, :edit]
  end

  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
