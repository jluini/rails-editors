# frozen_string_literal: true

Rails.application.routes.draw do
  root 'welcome#index'
  
  get '/editorjs-test', to: 'editorjs#test'
  get '/editorjs-showroom', to: 'editorjs#showroom'
end
