Rails.application.routes.draw do
  

   post '/signin', to: 'users#signin'
   post '/register', to: 'users#create'
   resources :users do
           resources :recipes
           resources :items
   end
    

    
  
end
