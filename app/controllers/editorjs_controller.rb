# frozen_string_literal: true

#
# Editorjs controller.
#
class EditorjsController < ApplicationController
  def test; end
  
  def showroom; end
  
  def upload_file
    image_url = 'https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search-v2_297x176.jpg'
    
    render_url image_url
  end
  
  def fetch_url
    render_url params[:url]
  end
  
  private
  
  def render_url(url)
    sleep 1.5
    render json: { success: 1, file: { url: url } }
  end
end
