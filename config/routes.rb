# frozen_string_literal: true

Rails.application.routes.draw do
  root 'welcome#index'
  
  # EditorJS
  get '/editor-js/test', to: 'editorjs#test', as: 'editorjs_test'
  get '/editor-js/showroom', to: 'editorjs#showroom', as: 'editorjs_showroom'
  post '/editor-js/uploadFile', to: 'editorjs#upload_file'
  post '/editor-js/fetchUrl', to: 'editorjs#fetch_url'
  
  # TinyMCE
  get '/tiny-mce/test', to: 'tiny_mce#test', as: 'tinymce_test'
  
  # Tiptap
  get '/tiptap/test', to: 'tiptap#test', as: 'tiptap_test'
  
  # GrapeJS
  get '/grapejs/test', to: 'grapejs#test', as: 'grapejs_test'
end
