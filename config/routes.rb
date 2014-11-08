Rails.application.routes.draw do
  match 'homepages/home', to: 'home_pages#home', via: 'get'
end
