Rails.application.routes.draw do
  # resources :posts
  root 'welcome#index'

  # For single page app.
  # Reference: http://stackoverflow.com/questions/23045427/how-to-remove-redirects-in-rails-angularjs-html5-mode
  get "*path" => "welcome#index"

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
