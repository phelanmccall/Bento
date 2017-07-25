Rails.application.routes.draw do
  namespace :api do
    get 'tasks/index'
  end

  namespace :api do
    get 'tasks/show'
  end

  namespace :api do
    get 'tasks/create'
  end

  namespace :api do
    get 'tasks/update'
  end

  namespace :api do
    get 'tasks/destroy'
  end

  get 'static_pages/root'

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :projects, except: [:new, :edit]
  end

  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
