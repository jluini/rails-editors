# frozen_string_literal: true

Rails.application.routes.draw do
  root 'welcome#index'
  
  get '/editorjs-test', to: 'editorjs#test', as: 'editorjs-test'
  get '/editorjs-showroom', to: 'editorjs#showroom', as: 'editorjs-showroom'
  
  post '/uploadFile', to: 'editorjs#upload_file'
  post '/fetchUrl', to: 'editorjs#fetch_url'
end
