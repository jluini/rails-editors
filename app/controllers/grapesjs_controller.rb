# frozen_string_literal: true

#
# GrapesJS controller.
#
class GrapesjsController < ApplicationController
  def test; end
  
  def test2; end
  
  def test3; end
  
  def mock_store
    puts '**********************'
    puts '** Storing document **'
    puts '**********************'
    puts
    puts 'Components'
    puts '----------'
    puts params['gjs-components']
    puts
    puts 'Style'
    puts '-----'
    puts params['gjs-styles']
    puts
    puts 'Html'
    puts '----------'
    puts params['gjs-html']
    puts
    puts 'Css'
    puts '-----'
    puts params['gjs-css']
    puts
    
    render json: { data: 'ok' }
  end
  
  def index
    @documents = Document.all
  end
  
  def new
    new_document = Document.new(
      {
        'html' => '<div>Insert content here</div>',
        'components' => '[{"type":"text","content":"Insert content here","open":false}]',
        'css' => '* { box-sizing: border-box; } body {margin: 0;}',
        'style' => '[]',
        'assets' => '[]'
      }
    )
    
    if new_document.save
      redirect_to action: 'edit', id: new_document.id
    else
      render plain: 'Error!'
    end
  end
  
  def edit
    # this is actually pretty useless
    # (only showing id in view, the content is loaded asynchronously)
    @document = Document.find(params[:id])
  end
  
  def destroy
    @node = Document.find(params[:id])
    @node.destroy
    
    redirect_to documents_path
  end
  
  def load
    @document = Document.find(params[:id])
    
    response = {
      'gjs-components' => @document.components,
      'gjs-styles' => @document.style
    }
    
    render json: response
  end
  
  def store
    @document = Document.find(params[:id])
    
    @document.html       = params['gjs-html']
    @document.components = params['gjs-components']
    @document.css        = params['gjs-css']
    @document.style      = params['gjs-styles']
    @document.assets     = params['gjs-assets']
    
    @document.save!
    
    render json: { data: 'ok' }
  end
end
