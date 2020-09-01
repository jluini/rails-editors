# frozen_string_literal: true

#
# Create 'documents' table.
#
class CreateDocuments < ActiveRecord::Migration[6.0]
  def change
    create_table :documents do |t|
      t.text :html       # content as html
      t.text :components # content as json
      
      t.text :css        # style as css
      t.text :style      # style as json
      
      t.text :assets     # asset list as json
      
      t.timestamps
    end
  end
end
