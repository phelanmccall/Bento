Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resource :user,        only:    %i[create]
    resource :session,     only:    %i[create destroy show]
    resources :projects,   except:  %i[new edit]
    resources :tasks,      except:  %i[new edit]
    resources :teams,      except:  %i[new edit]

    # resources :memberships,   except: %i[new edit]
  end

  root "static_pages#root"
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
