import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header';

class EditorJSWrapper {
  constructor(holderId, options) {
    this.holderId = holderId;
    this.editor = new EditorJS({
      holder: holderId,
      autofocus: true,
      
      /**
       * Tools list
       */
      tools: {
        header: Header,
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
          },
          tools: {
            "link": {
              "Add a link": "Destino del vínculo..."
            },
            "stub": {
              "The block can not be displayed correctly.": "El bloque no puede mostrarse (no se reconoce su tipo)"
            },
            "header": {},
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
}

export default EditorJSWrapper;
