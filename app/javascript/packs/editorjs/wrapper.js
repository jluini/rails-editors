import EditorJS from '@editorjs/editorjs';

// EditorJS tools or plugins
import Header from '@editorjs/header';
import List from '@editorjs/list';
import ImageTool from '@editorjs/image';
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
        image: {
          class: ImageTool,
          config: {
            endpoints: {
              byFile: 'uploadFile',
              byUrl: 'fetchUrl',
            },
            additionalRequestHeaders: {
              'X-CSRF-Token': document.querySelector('meta[name="csrf-token"]').getAttribute('content')
            }
          }
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
            "External image": "Imagen externa",
            "Image": "Imagen",
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
            },
            "external_image": {
              "Paste an image URL...": "Pegue la URL de una imagen..."
            },
            "image": {
              "Caption": "Escriba una leyenda...",
              "Select an Image": "Cargue una imagen (o arrástrela aquí)",
              "Couldn’t upload image. Please try another.": "No se pudo cargar la imagen. Pruebe con otra.",
              "With border": "Con borde",
              "Stretch image": "Expandir",
              "With background": "Con fondo",
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
