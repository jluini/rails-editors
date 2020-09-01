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
  
  # GrapesJS
  get '/grapesjs/test', to: 'grapesjs#test', as: 'grapesjs_test'
  get '/grapesjs/test2', to: 'grapesjs#test2', as: 'grapesjs_test2'
  get '/grapesjs/test3', to: 'grapesjs#test3', as: 'grapesjs_test3'
  
  post '/grapesjs/store', to: 'grapesjs#mock_store'
  
  get '/grapesjs/documents/:id/edit', to: 'grapesjs#edit', as: 'edit_document'
  get '/grapesjs/documents/:id/load', to: 'grapesjs#load', as: 'load_document'
  post '/grapesjs/documents/:id/store', to: 'grapesjs#store', as: 'store_document'
end
