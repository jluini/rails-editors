import EditorJS from '@editorjs/editorjs';

// EditorJS tools or plugins
import Header from '@editorjs/header';
import List from '@editorjs/list';
import ExternalImage from './tools/external-image';

import DocumentRenderer from './renderer'

class EditorJSWrapper {
  constructor(holderId, options) {
    this.holderId = holderId;
    
    this.renderer = new DocumentRenderer();
    
    this.editor = new EditorJS({
      holder: holderId,
      autofocus: true,
      
      /**
       * Tools list.
       */
      tools: {
        header: Header,
        list: {
          class: List,
          inlineToolbar: true,
        },
        external_image: ExternalImage,
      },
      
      /**
       * I18n configuration.
       */
      i18n: {
        messages: {
          ui: {
            "blockTunes": {
              "toggler": {
                "Click to tune": "Clic para editar bloque",
                "or drag to move": "o arrastra para mover"
              }
            },
            "inlineToolbar": {
              "converter": {
                "Convert to": "Transformar en"
              }
            },
            "toolbar": {
              "toolbox": {
                "Add": "Agregar"
              }
            }
          },
          toolNames: {
            "Text": "Texto normal",
            "Link": "Vínculo",
            "Bold": "Negrita",
            "Italic": "Cursiva",
            "Heading": "Título",
            "List": "Lista",
          },
          tools: {
            "link": {
              "Add a link": "Destino del vínculo..."
            },
            "stub": {
              "The block can not be displayed correctly.": "El bloque no puede mostrarse (no se reconoce su tipo)"
            },
            "header": {},
            "list": {
              "Ordered": "Con números",
              "Unordered": "Con viñetas"
            }
          },
          blockTunes: {
            "delete": {
              "Delete": "Eliminar bloque"
            },
            "moveUp": {
              "Move up": "Subir bloque"
            },
            "moveDown": {
              "Move down": "Bajar bloque"
            }
          }
        }
      },
      
      /**
       * Custom options you may pass.
       */
      ...options
    });
  }
  
  render(content) {
    this.editor.render(content);
  }
  
  getEditorData(callback) {
    return this.editor.save().then((outputData) => {
      callback(outputData);
    }).catch((error) => {
      callback({error});
    });
  }
  
  renderHtml(data) {
    return {
      html: this.renderer.blocksToHtml(data.blocks)
    };
  }
}

export default EditorJSWrapper;
