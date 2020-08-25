# frozen_string_literal: true

Rails.application.routes.draw do
  root 'welcome#index'
  
  # EditorJS
  get '/editorjs-test', to: 'editorjs#test', as: 'editorjs-test'
  get '/editorjs-showroom', to: 'editorjs#showroom', as: 'editorjs-showroom'
  post '/uploadFile', to: 'editorjs#upload_file'
  post '/fetchUrl', to: 'editorjs#fetch_url'
  
  # TinyMCE
  get '/tiny-mce/test', to: 'tiny_mce#test', as: 'tinymce_test'
end
