Rails.application.routes.draw do

  namespace :api, defaults: {format: :json} do
    resource :user, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :projects, except: [:new, :edit]
    resources :tasks, except: [:new, :edit]
    resources :teams, except: [:new, :edit]
    resources :memberships, except: [:new, :edit]
  end

  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
