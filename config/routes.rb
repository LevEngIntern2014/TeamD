Rails.application.routes.draw do
  match 'homepages/home', to: 'home_pages#home', via: 'get'
  match 'homepages/click', to: 'home_pages#click', via: 'post'
end
