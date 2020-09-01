# frozen_string_literal: true

#
# GrapesJS controller.
#
class GrapesjsController < ApplicationController
  def test; end
  
  def test2; end
  
  def test3; end
  
  def store
    puts '**********************'
    puts '** Storing document **'
    puts '**********************'
    puts
    puts 'Content'
    puts '-------'
    puts params['gjs-components']
    puts
    puts 'Style'
    puts '-----'
    puts params['gjs-style']
    puts
    
    response = { data: 'ok' }
    
    render json: response
  end
end
